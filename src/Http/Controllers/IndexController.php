<?php
/**
 * This file is part of Notadd.
 *
 * @author TwilRoad <269044570@qq.com>
 * @copyright (c) 2016, iBenchu.org
 * @datetime 2016-10-21 16:17
 */
namespace Application\Http\Controllers;

use Notadd\Foundation\Routing\Abstracts\Controller;

/**
 * Class IndexController.
 */
class IndexController extends Controller
{
    /**
     * TODO: Method index Description
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        return $this->view('index');
    }
}
