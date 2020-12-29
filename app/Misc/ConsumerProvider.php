<?php


namespace App\Misc;

use App\Misc\Amqp\Extenstion\SimpleReplyExtension;
use Enqueue\AmqpLib\AmqpConnectionFactory;
use Enqueue\Consumption\CallbackProcessor;
use Enqueue\Consumption\ChainExtension;
use Enqueue\Consumption\Extension\LoggerExtension;
use Enqueue\Consumption\Extension\SignalExtension;
use Enqueue\Consumption\QueueConsumer;
use Enqueue\Consumption\Result;
use Interop\Amqp\Impl\AmqpBind;
use Interop\Queue\Context;
use Interop\Queue\Message;
use Laminas\Json\Json;
use LaravelZero\Framework\Commands\Command;
use Log;

//use App\Misc\Swoole\AmqpConnectionFactory;

abstract class ConsumerProvider extends Command
{
    protected $context;

    private $debug;
    private $queueNameOnRun;

    public function __construct()
    {
        if (!$this->signature) {
            $path = explode('\\', get_called_class());
            $className = strtolower(array_pop($path));

            $this->signature = str_replace('command', '', $className);
        }

        $this->signature .= ' {-d|--debug: Debug mode for the logging processor }';;
        parent::__construct();

        $this->addOption('debug', 'd');
    }

    private function prepare()
    {
        $this->context = $this->createContext();

        try {
            if (method_exists($this, 'getQueueName')) {
                $this->queueNameOnRun = $this->getQueueName();
            } else {
                list($this->queueNameOnRun) = explode(' ', $this->signature);
                $this->queueNameOnRun = ucfirst($this->queueNameOnRun);
            }

            if ($this->queueNameOnRun === 'Process') {
                $this->queueNameOnRun = 'AppCell[' . strtolower(config('app.name')) . ']';
            } else {
                $this->queueNameOnRun = 'AppCell[' . strtolower(config('app.name')) . ']::' . $this->queueNameOnRun;
            }

            $this->prepareQueue();
            $extensions = [
                new LoggerExtension(Log::getLogger()),
                new SignalExtension(),
                new SimpleReplyExtension()
            ];

            $queueConsumer = new QueueConsumer($this->context, new ChainExtension($extensions));

            $processor = new CallbackProcessor([$this, 'onConsume']);
            $queueConsumer->bind($this->queueNameOnRun, $processor);

            $queueConsumer->consume();
        } catch (AMQPQueueException $e) {
            if (strpos($e->getMessage(), 'Server channel error: 404') !== false) {
                $this->prepare();
            }

            throw $e;
        }
    }

    public function handle()
    {
        $this->debug = $this->option('debug');

        $this->prepare();
    }

    public function onConsume(Message $message, Context $context)
    {
        Log::info('Message received at queue: ' . $this->queueNameOnRun . '(C:' . $message->getCorrelationId() . ')');

        if (!$this->debug) {
            if ($message->isRedelivered()) {
                Log::warning('Message is redelivered');
                return Result::ack('Message is redelivered');
            }
        }

        try {
            $body = Json::decode($message->getBody(), Json::TYPE_ARRAY);
        } catch (\Exception $exception) {
            $body = [
                'body' => $message->getBody()
            ];
        }

        Log::debug('Message body', $body);
        $output = $this->process($body);

        if ($output instanceof Result) {

            switch ($output) {
                case Result::ACK:
                    $state = 'acknowledged';
                    break;
                case Result::REJECT:
                    $state = 'rejected';
                    break;
                case Result::REQUEUE:
                    $state = 'requeue';
                    break;
            }

            Log::info('Message ' . $this->queueNameOnRun . '(C:' . $message->getCorrelationId() . ') ' . $state);
            return $output;
        }

        Log::info('Message ' . $this->queueNameOnRun . '(C:' . $message->getCorrelationId() . ') acknowledged');
        return Result::reply($context->createMessage(Json::encode($output)), Result::ACK);

    }


    private function createContext(): Context
    {
        $factory = new AmqpConnectionFactory([
            'host' => getenv('AH_AMQP_HOST'),
            'port' => getenv('AH_AMQP_PORT'),
            'vhost' => getenv('AH_AMQP_VHOST'),
            'user' => getenv('AH_AMQP_USER'),
            'pass' => getenv('AH_AMQP_PASS'),
            'persisted' => false,

        ]);

        return $factory->createContext();
    }

    private function prepareQueue()
    {
        Log::info("Preparing " . $this->queueNameOnRun . ' queue');
        $queue = $this->context->createQueue($this->queueNameOnRun);
        //$queue->addFlag(AMQP_DURABLE);
        $this->context->declareQueue($queue);

        $topic = $this->context->createTopic($this->queueNameOnRun);
        $this->context->declareTopic($topic);

        $this->context->bind(new AmqpBind($topic, $queue));

    }

    /**
     * @param array $body contains message body. If is send as json, it will be autoamtically decoded into array.
     * If is string or non json, will be provided as array in format: ['body' => 'message body']
     * @return array
     */
    protected abstract function process(array $body): array;
}
