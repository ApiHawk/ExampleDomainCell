<?php

return [
    'host' => getenv('AH_ETCD_HOST'),
    'port' => getenv('AH_ETCD_PORT'),
    'username' => getenv('AH_ETCD_USER'),
    'password' => getenv('AH_ETCD_PASS'),
];
