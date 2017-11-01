<?php

declare(strict_types=1);

// +----------------------------------------------------------------------+
// | The Notadd Application.                                              |
// +----------------------------------------------------------------------+
// | Copyright (c) 2016-2017 Shanxi Benchu Network Technology Co,.Ltd     |
// +----------------------------------------------------------------------+
// | This source file is subject to version 2.0 of the Apache license,    |
// | that is bundled with this package in the file LICENSE, and is        |
// | available through the world-wide-web at the following url:           |
// | http://www.apache.org/licenses/LICENSE-2.0.html                      |
// +----------------------------------------------------------------------+
// | Author: TwilRoad <heshudong@ibenchu.com>                             |
// |         Seven Du <shiweidu@outlook.com>                              |
// +----------------------------------------------------------------------+

$app = new \Notadd\Foundation\Application(
    realpath(__DIR__.'/../../')
);

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

$app->singleton(
    \Illuminate\Contracts\Http\Kernel::class,
    \Notadd\Foundation\Http\Kernel::class
);

$app->singleton(
    \Illuminate\Contracts\Console\Kernel::class,
    \Notadd\Foundation\Console\Kernel::class
);

$app->singleton(
    \Illuminate\Contracts\Debug\ExceptionHandler::class,
    \Notadd\Foundation\Http\ExceptionHandler::class
);

/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/

return $app;
