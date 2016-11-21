<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>安装 - Notadd</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Notadd安装页面">
    <meta name="keyword" content="Notadd,安装,install">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="{{ asset('assets/install/sheets/bootstrap.min.css') }}" rel="stylesheet">
    @yield('sheets')
</head>
<body>@yield('content')</body>
<script src="{{ asset('assets/install/scripts/jquery-1.11.1.min.js') }}"></script>
<script src="{{ asset('assets/install/scripts/bootstrap.min.js') }}"></script>
@yield('script')
</html>