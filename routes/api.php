<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\GraduatedStudentController;
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


Route::middleware('auth:sanctum')->group(function() {
  Route::get('/user', function (Request $request) {
    return $request->user();
  });
});

Route::prefix('siswa')->group(function() {
  Route::get('/{nisn}', [GraduatedStudentController::class, 'show'])->where('nisn', '[0-9]+')->name('api.siswa.show');
  Route::get('/', [GraduatedStudentController::class, 'all'])->middleware('auth:sanctum')->name('api.siswa.all');
});

Route::prefix('auth')->group(function() {
  Route::post('login', [AuthController::class, 'login'])->middleware('guest')->name('api.auth.login');
  Route::get('profile', [AuthController::class, 'profile'])->middleware('auth:sanctum')->name('api.auth.profile');
  Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum')->name('api.auth.logout');
});
