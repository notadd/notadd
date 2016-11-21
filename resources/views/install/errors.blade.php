@extends('install::layout')
@section('content')
    <div class="main-viewport test-error">
        <header>
            <div class="container">
                <img class="success-logo" src="{{ asset('assets/install/images/test-error.svg') }}" alt="">
                <h1 class="error-title">环境检测</h1>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="error-panel">
                    @foreach($errors as $error)
                    <div class="error-box">
                        <div class="error-detail">
                            <span class="btn btn-default btn-error">错误提示</span>
                            <div class="detail">
                                <p>{{ $error['message'] }}</p>
                            </div>
                        </div>
                        <div class="error-fix">
                            <span class="btn btn-default btn-fix">解决办法</span>
                            <div class="detail">
                                <p>{{ $error['detail'] }}</p>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </main>
    </div>
@endsection
@section('sheets')
    <link href="{{ asset('assets/install/sheets/install.css') }}" rel="stylesheet">
@endsection