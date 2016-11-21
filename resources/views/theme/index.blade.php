@extends('theme::layout')
@section('content')
    <div class="home">
        <header class="header">
            <div class="container">
                <nav class="navbar navbar-default navbar-fixed-top" style="background: rgb(27, 201, 168);z-index:11111;">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="{{ url('/') }}"> <img src="{{ asset('assets/default/images/logo.png') }}" alt="NotAdd"> </a>
                            <ul class="nav nav-pills">
                                <li role="presentation" class="active"><a href="{{ url('') }}">首页</a></li>
                                @if(auth()->guest())
                                    <li role="presentation"><a href="{{ url('login') }}">登陆</a></li>
                                @else
                                    <li role="presentation"><a href="{{ url('logout') }}">退出</a></li>
                                @endif
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="focus-info">
                    <h2>NotAdd</h2>
                    <h2>无所复加 / 无以复加</h2>
                    <h3>CMS/商城/论坛/微信平台 统一平台，无限拓展</h3>
                    <a href="https://download.ibenchu.com/notadd/Notadd_Alpha_3.zip">立即下载</a>
                </div>
                <div class="computer">
                    <img src="{{ asset('assets/default/images/computer.png') }}" alt="" class="img-responsive">
                </div>
            </div>
        </header>
        <div class="introduction">
            <div class="title alike-title area_1">
                <h2>Notadd是什么？</h2>
                <p>what is Notadd?</p>
            </div>
            <div class="content">
                <p>Notadd是基于Laravel的一款开源CMS/商城/微信/论坛，原生支持PHP7</p>
                <p>Notadd不仅完全面向对象，且代码简洁、优雅，是为开发者而生，也是为艺术家而存</p>
                <p>此外，Notadd还引入了许多新的特性，诸如webp支持，更加灵活的插件模板机制，使得你可以快速构建出自己所想</p>
                <p>使用Compeser管理相关依赖，对于一个生命周期超过3年的项目来说，Notadd再合适不过</p>
                <p>总之，使用Notadd构建Web程序将带给开发者一场绝妙非凡的体验</p>
            </div>
        </div>
        <div class="function" style="text-align: center;">
            <div class="container1">
                <div class="title alike-title area_2">
                    <h2>让开发更简单 更高效</h2>
                    <p>Simpler and more efficient</p>
                </div>
                <div class="content" style="display: inline-block">
                    <ul class="flex-container">
                        <li class="flex-item">
                            <div class="title">
                                <h3>社群与支持</h3>
                            </div>
                            <div class="content">
                                <h4>PHP</h4>
                                <p>全球500大网站中，82%有使用php</p>
                                <p>PHP能帮人们高效解决问题快速实现想法</p>
                                <h4 class="last">Laravel</h4>
                                <p>全球最流行的PHP框架，没有之一</p>
                                <p>为WEB艺术家而生</p>
                            </div>
                        </li>
                        <li class="flex-item">
                            <div class="title">
                                <h3>性能与体验</h3>
                            </div>
                            <div class="content">
                                <h4>PHP5.5+</h4>
                                <p>Notadd最低支持PHP5.5，推荐PHP7.0</p>
                                <p>PHP7性能是目前广泛使用5.2/5.3的8-10倍</p>
                                <h4 class="last">优秀特性</h4>
                                <p>Webp图片支持，网站访问更快</p>
                                <p>后台无刷新，体验更好</p>
                            </div>
                        </li>
                        <li class="flex-item">
                            <div class="title">
                                <h3>开源与自由</h3>
                            </div>
                            <div class="content">
                                <h4>免费开源</h4>
                                <p>Notadd基于Apache2.0协议开源</p>
                                <p>且商用友好，你不必为此支付任何费用</p>
                                <h4 class="last">开放生态</h4>
                                <p>开放已经存在于Notadd的基因中</p>
                                <p>让我们共同构建国内开源生态</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="quick-start">
            <div class="title alike-title area_3">
                <h2>快速开始</h2>
                <p>Quick Start</p>
            </div>
            <div class="content">
                <ul class="clearfix" data-toggle="tabchang">
                    <li>
                        <div class="out-bg"></div>
                        <div class="in-border"><a href="https://docs.notadd.com/Environment.html" target="_blank">01/ -环境要求</a></div>
                    </li>
                    <li>
                        <div class="out-bg"></div>
                        <div class="in-border"><a href="https://docs.notadd.com/FirstInstalled.html" target="_blank">02/ -开发文档</a></div>
                    </li>
                    <li>
                        <div class="out-bg"></div>
                        <div class="in-border"><a href="https://docs.notadd.com/" target="_blank">03/ -安装指南</a></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="use-case">
            <div class="container1">
                <div class="title">
                </div>
                <div class="content">
                    <h2 class="use-case-title">使用案例</h2>
                    <p class="use-case-decri">Use Cases</p>
                    <div class="case-list container">
                        <ul class="clearfix">
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_3.jpg') }}" class="img-responsive" alt="example-image">
                                    <figcaption>
                                        <h3>西部传媒 </h3>
                                        <p>陕西西部广告传媒有限公司官方网站</p>
                                    </figcaption>
                                    <a href="http://www.westernmedia.cn/" target="_blank"></a>
                                </figure>
                            </li>
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_1.jpg') }}" class="img-responsive" alt="example-image">
                                    <figcaption>
                                        <h3>大圣保险</h3>
                                        <p>专业物流保险平台</p>
                                    </figcaption>
                                    <a href="http://www.baoxian72.com/" target="_blank"></a>
                                </figure>
                            </li>
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_4.jpg') }}" class="img-responsive" alt="example-image">
                                    <figcaption>
                                        <h3>美林数据</h3>
                                        <p>美林数据股份有限公司 专注数据价值发掘</p>
                                    </figcaption>
                                    <a href="http://www.meritdata.com.cn/" target="_blank"></a>
                                </figure>
                            </li>
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_5.jpg') }}" alt="example-image">
                                    <figcaption>
                                        <h3>清风游戏</h3>
                                        <p>我们是游戏圈里的一缕清风</p>
                                    </figcaption>
                                    <a href="http://www.9vf.com/" target="_blank"></a>
                                </figure>
                            </li>
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_6.jpg') }}" alt="example-image">
                                    <figcaption>
                                        <h3>人文社科系</h3>
                                        <p> 西安交通大学城市学院人文社科系</p>
                                    </figcaption>
                                    <a href="http://www.rwskx.com/" target="_blank"></a>
                                </figure>
                            </li>
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_8.jpg') }}" alt="example-image">
                                    <figcaption>
                                        <h3>教育基金会 </h3>
                                        <p>西安交通大学城市学院教育基金会官网</p>
                                    </figcaption>
                                    <a href="http://www.xjtuccef.com/" target="_blank"></a>
                                </figure>
                            </li>
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_7.jpg') }}" alt="example-image">
                                    <figcaption>
                                        <h3>沐威快修 </h3>
                                        <p>沐威手机、电脑、家电快修平台</p>
                                    </figcaption>
                                    <a href="javascript:;" target="_blank"></a>
                                </figure>
                            </li>
                            <li>
                                <figure class="imghvr-shutter-in-out-vert">
                                    <img src="{{ asset('assets/default/images/img_2.jpg') }}" class="img-responsive" alt="example-image">
                                    <figcaption>
                                        <h3>唐鼎砖雕</h3>
                                        <p>陕西唐鼎古砖雕工程有限公司官网</p>
                                    </figcaption>
                                    <a href="javascript:;" target="_blank"></a>
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="good-information">
            <div class="container">
                <div class="recommend-content common-content">
                    <div class="other-title">
                        <h3>推荐内容</h3>
                        <p>Recommend content</p>
                    </div>
                    <ul class="common-list">
                        <li class="list-icon"><a href="{{ url('/') }}" target="_blank">notadd插件开发</a></li>
                        <li class="list-icon"><a href="{{ url('/') }}" target="_blank">notadd插件开发</a></li>
                        <li class="list-icon"><a href="{{ url('/') }}" target="_blank">notadd插件开发</a></li>
                        <li class="list-icon"><a href="{{ url('/') }}" target="_blank">notadd插件开发</a></li>
                        <li class="list-icon"><a href="{{ url('/') }}" target="_blank">notadd插件开发</a></li>
                    </ul>
                </div>
                <div class="announcement common-content">
                    <div class="other-title">
                        <h3>公告</h3>
                        <p>Announcement</p>
                    </div>
                    <ul class="common-list">
                        <li class="list-icon"><a href="https://bbs.notadd.com/d/7" target="_blank">Notadd Atlantia Beta 版本说明</a></li>
                        <li class="list-icon"><a href="https://bbs.notadd.com/d/2" target="_blank">Notadd Alpha3 发布</a></li>
                        <li class="list-icon"><a href="https://bbs.notadd.com/d/5" target="_blank">Notadd Alpha2 发布</a></li>
                        <li class="list-icon"><a href="https://bbs.notadd.com/d/6" target="_blank">Notadd Alpha1 发布</a></li>
                        <li class="list-icon"><a href="{{ url('/') }}">敬请期待</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div>©2016 Notadd 陕西本初网络科技有限公司版权所有<br>陕ICP备15001926号-10</div>
        </footer>
    </div>
@endsection
@section('script')
    <script src="{{ asset('assets/default/scripts/index.js') }}"></script>
@endsection
@section('sheets')
    <link href="{{ asset('assets/default/sheets/index.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/default/sheets/imagehover.css') }}" rel="stylesheet">
@endsection