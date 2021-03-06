<?php


namespace App\Misc\Swoole;


use PhpAmqpLib\Connection\AbstractConnection;

class SwooleConnection extends AbstractConnection
{

    public function __construct(
        string $host,
        int $port,
        string $user,
        string $password,
        string $vhost = '/',
        bool $insist = false,
        string $loginMethod = 'AMQPLAIN',
        $loginResponse = null,
        string $locale = 'en_US',
        float $connectionTimeout = 3.0,
        float $readWriteTimeout = 3.0,
        $context = null,
        bool $keepalive = false,
        int $heartbeat = 0
    )
    {
        $io = new KeepaliveIO($host, $port, $connectionTimeout, $readWriteTimeout, $context, $keepalive, $heartbeat);


        parent::__construct(
            $user,
            $password,
            $vhost,
            $insist,
            $loginMethod,
            $loginResponse,
            $locale,
            $io,
            $heartbeat,
            $connectionTimeout
        );
    }

    public function getIO()
    {
        return $this->io;
    }
}
