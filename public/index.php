<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2016, notadd.com
 * @datetime 2016-08-19 22:45
 */
require __DIR__ . '/../storage/bootstraps/autoload.php';
$application = require_once __DIR__ . '/../storage/bootstraps/application.php';
$kernel = $application->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle($request = Illuminate\Http\Request::capture());
$response->send();
$kernel->terminate($request, $response);
