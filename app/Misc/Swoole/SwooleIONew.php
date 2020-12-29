<?php


namespace App\Misc\Swoole;

use PhpAmqpLib\Exception\AMQPConnectionClosedException;
use PhpAmqpLib\Exception\AMQPIOException;
use PhpAmqpLib\Exception\AMQPRuntimeException;
use PhpAmqpLib\Exception\AMQPSocketException;
use PhpAmqpLib\Exception\AMQPTimeoutException;
use PhpAmqpLib\Helper\MiscHelper;
use PhpAmqpLib\Wire\IO\AbstractIO;
use Swoole;


class SwooleIO extends AbstractIO
{
    /** @var null|resource */
    private $sock;

    /**
     * @param string $host
     * @param int $port
     * @param int|float $read_timeout
     * @param bool $keepalive
     * @param int|float|null $write_timeout if null defaults to read timeout
     * @param int $heartbeat how often to send heartbeat. 0 means off
     */
    public function __construct($host, $port, $read_timeout = 3, $keepalive = false, $write_timeout = null, $heartbeat = 0)
    {
        $this->host = $host;
        $this->port = $port;
        $this->read_timeout = $read_timeout;
        $this->write_timeout = $write_timeout ?: $read_timeout;
        $this->heartbeat = $heartbeat;
        $this->initial_heartbeat = $heartbeat;
        $this->connection_timeout = 3;
        $this->keepalive = $keepalive;
        $this->canDispatchPcntlSignal = $this->isPcntlSignalEnabled();

        /*
            TODO FUTURE enable this check
            php-amqplib/php-amqplib#648, php-amqplib/php-amqplib#666
        if ($this->heartbeat !== 0 && ($this->read_timeout <= ($this->heartbeat * 2))) {
            throw new \InvalidArgumentException('read_timeout must be greater than 2x the heartbeat');
        }
        if ($this->heartbeat !== 0 && ($this->write_timeout <= ($this->heartbeat * 2))) {
            throw new \InvalidArgumentException('send_timeout must be greater than 2x the heartbeat');
        }
         */
    }

    /**
     * @inheritdoc
     */
    public function connect()
    {
        var_dump('CONNECT');
        if ($this->keepalive) {
            //Todo
        }

        $sock = new Swoole\Client(SWOOLE_SOCK_TCP);
        //$sock = new Swoole\Coroutine\Client(SWOOLE_SOCK_TCP);
        if (!$sock->connect($this->host, $this->port, $this->connection_timeout)) {
            throw new AMQPRuntimeException(
                sprintf(
                    'Error Connecting to server(%s): %s ',
                    $sock->errCode,
                    swoole_strerror($sock->errCode)
                ),
                $sock->errCode
            );
        }
        $this->sock = $sock;

        $this->heartbeat = $this->initial_heartbeat;
    }

    /**
     * @inheritdoc
     */
    public function getSocket()
    {
        return $this->sock;
    }

    /**
     * @inheritdoc
     */
    public function read($len)
    {
        if (is_null($this->sock)) {
            throw new AMQPSocketException(sprintf(
                'Socket was null'
            ));
        }

        $this->check_heartbeat();

        list($timeout_sec, $timeout_uSec) = MiscHelper::splitSecondsMicroseconds($this->read_timeout);
        $read_start = microtime(true);
        $read = 0;
        $data = '';
        while ($read < $len) {

            $buffer = $this->sock->recv($len - $read, 0);
            var_dump($buffer);
            $result = strlen($buffer);
            //$result = socket_recv($this->sock, $buffer, $len - $read, 0);
            if ($result === 0) {
                // From linux recv() manual:
                // When a stream socket peer has performed an orderly shutdown,
                // the return value will be 0 (the traditional "end-of-file" return).
                // http://php.net/manual/en/function.socket-recv.php#47182
                $this->close();
                throw new AMQPConnectionClosedException('Broken pipe or closed connection');
            }

            if (empty($buffer)) {
                $read_now = microtime(true);
                $t_read = $read_now - $read_start;
                if ($t_read > $this->read_timeout) {
                    throw new AMQPTimeoutException('Too many read attempts detected in SocketIO');
                }
                $this->select($timeout_sec, $timeout_uSec);
                continue;
            }

            $read += mb_strlen($buffer, 'ASCII');
            $data .= $buffer;
        }

        if (mb_strlen($data, 'ASCII') != $len) {
            throw new AMQPIOException(sprintf(
                'Error reading data. Received %s instead of expected %s bytes',
                mb_strlen($data, 'ASCII'),
                $len
            ));
        }

        $this->last_read = microtime(true);

        return $data;
    }

    /**
     * @inheritdoc
     */
    public function write($data)
    {
        // Null sockets are invalid, throw exception
        if (is_null($this->sock)) {
            throw new AMQPSocketException(sprintf(
                'Socket was null!'
            ));
        }

        $this->checkBrokerHeartbeat();

        $written = 0;
        $len = mb_strlen($data, 'ASCII');
        $write_start = microtime(true);

        while ($written < $len) {
            $this->set_error_handler();
            try {
                $this->select_write();
                $buffer = mb_substr($data, $written, self::BUFFER_SIZE, 'ASCII');
                //  $result = socket_write($this->sock, $buffer, self::BUFFER_SIZE);

                $buffer .= $this->sock->send($data);
                $result = strlen($buffer);

                $this->cleanup_error_handler();
            } catch (\ErrorException $e) {
                $this->close();
                throw new AMQPConnectionClosedException(socket_strerror($e->getCode()), $e->getMessage(), $e);
            }

            if ($result === false) {
                throw new AMQPIOException(sprintf(
                    'Error sending data2'
                ));
            }

            $now = microtime(true);
            if ($result > 0) {
                $this->last_write = $write_start = $now;
                $written += $result;
            } else {
                if (($now - $write_start) > $this->write_timeout) {
                    throw AMQPTimeoutException::writeTimeout($this->write_timeout);
                }
            }
        }
    }

    /**
     * @inheritdoc
     */
    public function close()
    {
        $this->disableHeartbeat();
        if (is_resource($this->sock)) {
            $this->sock->close();
        }
        $this->sock = null;
        $this->last_read = 0;
        $this->last_write = 0;
    }

    /**
     * @inheritdoc
     */
    protected function do_select($sec, $usec)
    {
        $this->check_heartbeat();

        return 1;
    }

    /**
     * @return int|bool
     */
    protected function select_write()
    {
        $this->check_heartbeat();

        return 1;
    }


}
