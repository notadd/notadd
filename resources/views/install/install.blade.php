@extends('install::layout')
@section('content')
    <div class="main-viewport test-success">
        <header>
            <div class="container">
                <img class="success-logo" src="{{ asset('assets/install/images/test-success.svg') }}">
                <h1 class="error-title">安装信息</h1>
            </div>
        </header>
        <div class="container">
            <div class="error-panel">
                <form action="{{ url('/') }}" class="form-horizontal" id="install-form" method="post">
                    <fieldset>
                        <div class="content">
                            <div class="form-group">
                                <label for="toggle1" class="col-xs-6 control-label webp-label">Webp图片模式</label>
                                <div class="togglebutton" id="toggle1">
                                    <label><input name="image_engine" type="checkbox" checked></label>
                                </div>
                            </div>
                            <div class="form-group label-floating">
                                <label class="control-label">你的网站名称</label>
                                <input class="form-control" type="text" name="website">
                            </div>
                            <ul class="sql-group">
                                <input type="hidden" name="driver" value="mysql">
                                <li id="mysql" class="active"><a href="javascript:void(0)" class="btn-sql">MySQL</a></li>
                                <li id="pgsql"><a href="javascript:void(0)" class="btn-sql">PostgreSQL</a></li>
                                <li id="sqlite"><a href="javascript:void(0)" class="btn-sql">SQLite3</a></li>
                            </ul>
                            <div class="data" id="data">
                                <div class="form-group label-floating">
                                    <label class="control-label">数据库地址</label>
                                    <input class="form-control" name="database_host" type="text">
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">数据库名</label>
                                    <input class="form-control" name="database" type="text">
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">数据库用户名</label>
                                    <input class="form-control" name="database_username" type="text">
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">数据库密码</label>
                                    <input class="form-control" name="database_password" type="password">
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">表前缀(如：pre_)</label>
                                    <input class="form-control" name="database_prefix" type="text" value="pre_">
                                </div>
                            </div>
                            <div class="user">
                                <div class="form-group label-floating">
                                    <label class="control-label">管理员账号</label>
                                    <input class="form-control" name="admin_account" type="text">
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">管理员邮箱</label>
                                    <input class="form-control" name="admin_email" type="text">
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">管理员密码</label>
                                    <input class="form-control" name="admin_password" type="password">
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">再次输入密码</label>
                                    <input class="form-control" name="admin_password_confirmation" type="password">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input class="submit" type="submit" value="安装">
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('sheets')
    <link href="{{ asset('assets/install/sheets/bootstrap-material-design.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/install/sheets/ripples.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/install/sheets/install.css') }}" rel="stylesheet">
@endsection
@section('script')
    <script src="{{ asset('assets/install/scripts/material.min.js') }}"></script>
    <script src="{{ asset('assets/install/scripts/ripples.min.js') }}"></script>
    <script src="{{ asset('assets/install/scripts/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('assets/install/scripts/messages_zh.js') }}"></script>
    <script>
        $(document).ready(function () {
            $("#sqlite").click(function () {
                $(this).parent("ul").find("input[name=driver]").val("sqlite");
                $(this).parent("ul").find("li").removeClass("active");
                $(this).addClass("active");
                $("#data").fadeOut();
            });
            $("#mysql").click(function () {
                $(this).parent("ul").find("input[name=driver]").val("mysql");
                $(this).parent("ul").find("li").removeClass("active");
                $(this).addClass("active");
                $("#data").fadeIn("slow");
            });
            $("#pgsql").click(function () {
                $(this).parent("ul").find("input[name=driver]").val("pgsql");
                $(this).parent("ul").find("li").removeClass("active");
                $(this).addClass("active");
                $("#data").fadeIn("slow");
            });
        });
        $.material.init();
        $.validator.setDefaults({});
        $().ready(function () {
            jQuery.validator.addMethod("noSpace", function (value, element) {
                return value.indexOf(" ") < 0 && value != "";
            }, $.validator.format("请勿输入空白字符"));
        });
        $().ready(function () {
            $('#install-form').validate(
                {
                    rules: {
                        website: {
                            required: true,
                            noSpace: true
                        },
                        database_host: {
                            required: true,
                            noSpace: true
                        },
                        database_username: {
                            required: true,
                            noSpace: true
                        },
                        database_password: {
                            required: true,
                            noSpace: true,
                            minlength: 6
                        },
                        database: {
                            required: true,
                            noSpace: true
                        },
                        database_prefix: {
                            required: true,
                            noSpace: true
                        },
                        admin_account: {
                            required: true,
                            noSpace: true
                        },
                        admin_email: {
                            required: true,
                            noSpace: true,
                            email: true
                        },
                        admin_password: {
                            required: true,
                            noSpace: true,
                            minlength: 6
                        },
                        admin_password_confirmation: {
                            required: true,
                            noSpace: true,
                            minlength: 6,
                            equalTo: "input[name=admin_password]"
                        },
                        success: "valid",
                        errorClass: "error",
                        errorPlacement: function (error, element) {
                            error.appendTo(element.parent());
                        }
                    },
                    messages: {
                        website: {
                            required: "请输入网站名称",
                            noSpace: "请勿输入空白字符"
                        },
                        database_host: {
                            required: "请输入数据库地址",
                            noSpace: "请勿输入空白字符"
                        },
                        database_username: {
                            required: "请输入数据库地址",
                            noSpace: "请勿输入空白字符"
                        },
                        database_password: {
                            required: "请输入数据库密码",
                            minlength: "数据库密码至少为6位",
                            noSpace: "请勿输入空白字符"
                        },
                        database: {
                            required: "请输入数据名",
                            noSpace: "请勿输入空白字符"
                        },
                        database_prefix: {
                            required: "请输入数据表前缀",
                            noSpace: "请勿输入空白字符"
                        },
                        admin_account: {
                            required: "请输入管理员账号",
                            noSpace: "请勿输入空白字符"
                        },
                        admin_email: {
                            required: "请输入管理员邮箱",
                            emaill: "请输入正确的管理员邮箱",
                            noSpace: "请勿输入空白字符"
                        },
                        admin_password: {
                            noSpace: "请勿输入空白字符",
                            required: "请输入管理员密码",
                            minlength: "管理员密码至少为6位"
                        },
                        admin_password_confirmation: {
                            noSpace: "请勿输入空白字符",
                            required: "请再次输入管理员密码",
                            minlength: "管理员密码至少为6位",
                            equalTo: "与上面输入的密码不一致"
                        }
                    }
                });
        });
    </script>
@endsection