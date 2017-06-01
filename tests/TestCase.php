<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2016, notadd.com
 * @datetime 2016-10-25 11:58
 */
/**
 * Class TestCase.
 */
abstract class TestCase extends Notadd\Foundation\Testing\TestCase
{
    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost';

    /**
     * Creates the application.
     *
     * @return \Notadd\Foundation\Application
     */
    public function createApplication()
    {
        $application = require __DIR__ . '/../storage/bootstraps/application.php';
        $application->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $application;
    }
}
