<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2016, notadd.com
 * @datetime 2016-11-21 11:33
 */
define('NOTADD_START', microtime(true));
require __DIR__ . '/../../vendor/autoload.php';
$compiledPath = __DIR__ . '/compiled.php';
if (file_exists($compiledPath)) {
    require $compiledPath;
}
