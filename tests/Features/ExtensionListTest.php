<?php
/**
 * This file is part of Notadd.
 *
 * @author        TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2017, notadd.com
 * @datetime      2017-10-17 18:13
 */
namespace Tests\Features;

use Tests\TestCase;

/**
 * Class ExtensionListTest.
 */
class ExtensionListTest extends TestCase
{
    /**
     * Test Extension List.
     */
    public function testList()
    {
        $list = $this->app->make('extension')->repository();
        $this->assertEmpty($list->toArray());
    }
}
