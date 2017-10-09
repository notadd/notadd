<?php
/**
 * This file is part of Notadd.
 *
 * @author        TwilRoad <heshudong@ibenchu.com>
 * @copyright (c) 2017, notadd.com
 * @datetime      2017-10-09 17:21
 */
namespace Tests\Features;

use Tests\TestCase;

/**
 * Class ModuleListTest.
 */
class ModuleListTest extends TestCase
{
    public function testList()
    {
        $list = $this->createApplication()->make('module')->repository();
        $this->assertArrayHasKey('notadd/administration', $list->toArry());
    }
}
