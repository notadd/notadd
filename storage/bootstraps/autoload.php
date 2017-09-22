<?php

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

define('NOTADD_START', microtime(true));

require __DIR__.'/../../vendor/autoload.php';

if (file_exists($compiled = __DIR__.'/compiled.php')) {
    require $compiled;
}
