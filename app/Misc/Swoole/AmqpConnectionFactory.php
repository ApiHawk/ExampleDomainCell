<?php

declare(strict_types=1);

namespace App\Misc\Swoole;

use Enqueue\AmqpLib\AmqpContext;
use Enqueue\AmqpTools\ConnectionConfig;
use Enqueue\AmqpTools\DelayStrategyAware;
use Enqueue\AmqpTools\DelayStrategyAwareTrait;
use Enqueue\AmqpTools\RabbitMqDlxDelayStrategy;
use Interop\Amqp\AmqpConnectionFactory as InteropAmqpConnectionFactory;
use Interop\Queue\Context;
use PhpAmqpLib\Connection\AbstractConnection;

class AmqpConnectionFactory implements InteropAmqpConnectionFactory, DelayStrategyAware
{
    use DelayStrategyAwareTrait;

    /**
     * @var ConnectionConfig
     */
    private $config;

    /**
     * @var AbstractConnection
     */
    private $connection;

    /**
     * @param array|string|null $config
     * @see \Enqueue\AmqpTools\ConnectionConfig for possible config formats and values.
     *
     */
    public function __construct($config = 'amqp:')
    {
        $this->config = (new ConnectionConfig($config))
            ->addSupportedScheme('amqp+lib')
            ->addSupportedScheme('amqps+lib')
            ->addDefaultOption('stream', true)
            ->addDefaultOption('insist', false)
            ->addDefaultOption('login_method', 'AMQPLAIN')
            ->addDefaultOption('login_response', null)
            ->addDefaultOption('locale', 'en_US')
            ->addDefaultOption('keepalive', false)
            ->addDefaultOption('channel_rpc_timeout', 0.)
            ->addDefaultOption('heartbeat_on_tick', true)
            ->parse();

        if (in_array('rabbitmq', $this->config->getSchemeExtensions(), true)) {
            $this->setDelayStrategy(new RabbitMqDlxDelayStrategy());
        }
    }

    /**
     * @return AmqpContext
     */
    public function createContext(): Context
    {
        $context = new AmqpContext($this->establishConnection(), $this->config->getConfig());
        $context->setDelayStrategy($this->delayStrategy);

        return $context;
    }

    public function getConfig(): ConnectionConfig
    {
        return $this->config;
    }

    private function establishConnection(): AbstractConnection
    {
        if (false == $this->connection) {
            $con = new SwooleConnection(
                $this->config->getHost(),
                $this->config->getPort(),
                $this->config->getUser(),
                $this->config->getPass(),
                $this->config->getVHost(),
                $this->config->getOption('insist'),
                $this->config->getOption('login_method'),
                $this->config->getOption('login_response'),
                $this->config->getOption('locale'),
            /*
            (float)round($this->config->getReadTimeout()),
            $this->config->getOption('keepalive'),
            (float)round($this->config->getWriteTimeout()),
            (float)round($this->config->getHeartbeat())
            */
            );

            $this->connection = $con;
        }

        return $this->connection;
    }
}
