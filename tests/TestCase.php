<?php
/**
 * This file is part of Notadd.
 *
 * @author        TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2016, notadd.com
 * @datetime      2016-10-25 11:58
 */
namespace Tests;

use Notadd\Foundation\Testing\TestCase as AbstractTestCase;
use Tests\Traits\CreatesApplication;

/**
 * Class TestCase.
 */
abstract class TestCase extends AbstractTestCase
{
    use CreatesApplication;
}
