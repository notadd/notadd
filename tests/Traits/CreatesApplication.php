<?php
/**
 * This file is part of Notadd.
 *
 * @author        TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2017, notadd.com
 * @datetime      2017-10-09 17:16
 */
namespace Tests\Traits;

use Illuminate\Contracts\Console\Kernel;

/**
 * Trait CreatesApplication.
 */
trait CreatesApplication
{
    /**
     * Creates the application.
     *
     * @return \Notadd\Foundation\Application
     */
    public function createApplication()
    {
        $app = require __DIR__ . '/../../storage/bootstraps/application.php';
        $app->make(Kernel::class)->bootstrap();

        return $app;
    }
}