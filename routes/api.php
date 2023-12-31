<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// private routes.

// public routes.
Route::post('/user', [\App\Http\Controllers\Api\V1\UserController::class, 'store']);
Route::post('/test', function (Request $request) {
    event(new \App\Events\TestEvent('slaw'));
    return 'success';
})->middleware('auth:sanctum');
