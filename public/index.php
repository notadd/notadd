<?php
/**
 * This file is part of Notadd.
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2015, iBenchu.org
 * @datetime 2015-11-27 18:50
 */
require '../vendor/autoload.php';
(new \Notadd\Server(__DIR__ . '/../'))->init()->terminate();