<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <title>{{ seo('title') }}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="{{ seo('keywords') }}">
    <meta name="description" content="{{ seo('description') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/default/images/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" href="{{ asset('assets/default/images/favicon-32x32.png') }}" sizes="32x32">
    <link rel="icon" type="image/png" href="{{ asset('assets/default/images/favicon-16x16.png') }}" sizes="16x16">
    <link rel="manifest" href="{{ asset('assets/default/images/manifest.json') }}">
    <link rel="mask-icon" href="{{ asset('assets/default/images/safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#00a300">
    <meta name="msapplication-TileImage" content="{{ asset('assets/default/images/mstile-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <link href="{{ asset('assets/default/sheets/bootstrap.min.css') }}" rel="stylesheet">
    @section('sheets')@show
    <!--[if lt IE 9]>
    <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
@yield('content')
<script src="{{ asset('assets/default/scripts/jquery.1.11.3.min.js') }}"></script>
<script src="{{ asset('assets/default/scripts/bootstrap.min.js') }}"></script>
@section('script')@show
</body>