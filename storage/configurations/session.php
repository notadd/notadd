<?php
return [
    'driver' => env('SESSION_DRIVER', 'file'),
    'lifetime' => 120,
    'expire_on_close' => false,
    'encrypt' => false,
    'files' => storage_path('sessions'),
    'connection' => null,
    'table' => 'sessions',
    'store' => null,
    'lottery' => [
        2,
        100
    ],
    'cookie' => 'notadd_session',
    'path' => '/',
    'domain' => env('SESSION_DOMAIN', null),
    'secure' => false,
    'http_only' => true,
];
