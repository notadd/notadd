<?php
/**
 * This file is part of Notadd.
 *
 * @author        TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2017, notadd.com
 * @datetime      2017-10-17 18:12
 */
namespace Tests\Features;

use Tests\TestCase;

/**
 * Class AddonListTest.
 */
class AddonListTest extends TestCase
{
    /**
     * Test Addon List.
     */
    public function testList()
    {
        $list = $this->app->make('addon')->repository();
        $this->assertEmpty($list->toArray());
    }
}
