<!DOCTYPE html>
<html >
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
</head>
<body >
    @yield('content')
</body>
<!--   JS Files   -->
<script src="{{ asset('js/app.js') }}"></script>
</html>