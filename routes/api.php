<?php

use Illuminate\Http\Request;
use App\Http\Controllers\SellerProductController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get('/catagory/list',[SellerProductController::class,'APIList']);
Route::post('/catagory/list-post',[SellerProductController::class,'APIPost'])->middleware('APIAuth');
Route::post('/product/create',[SellerProductController::class,'apiproductCreateSubmit'])->middleware('APIAuth');
Route::post('/login',[UserController::class,'apilogin'])->middleware('Cors');
Route::post('/logout',[UserController::class,'apilogout']); 
Route::post('/checkToken',[UserController::class,'apicheckTokenExpire']); 
Route::post('/registration',[UserController::class,'APIRegistration']); 
Route::post('/dash',[UserController::class,'APIDash'])->middleware('APIAuth');

