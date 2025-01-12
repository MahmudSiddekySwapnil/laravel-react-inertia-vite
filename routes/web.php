<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return view('mainfile');
});

Route::get('/dashboard',function ()  {
    
    return view('dashboard');
});