<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return view('loginTemplate');
});

Route::get('/dashboard',function ()  {
    
    return view('layouts.layouts');
});