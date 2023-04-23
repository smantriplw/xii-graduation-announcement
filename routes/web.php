<?php

use App\Http\Controllers\Dashboard\GraduatedStudentController;
use App\Http\Controllers\Dashboard\KelulusanSettingsController;
use Carbon\Carbon;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/dashboard/kelulusan', function() {
        $settings = KelulusanSettingsController::get_active_settings();
        return Inertia::render('Kelulusan', $settings);
    })->name('dashboard.kelulusan');

    Route::post('/dashboard/kelulusan/settings',
        [KelulusanSettingsController::class, 'create']
    )->name('dashboard.kelulusan.settings');
    Route::post('/dashboard/kelulusan/settings/{id}',
        [KelulusanSettingsController::class, 'update']
    )->name('dashboard.kelulusan.update_setting');
    Route::post('/dashboard/kelulusan/settings/{id}/enable',
        [KelulusanSettingsController::class, 'enableSetting']
    )->where('id', '[0-9]+')->name('dashboard.kelulusan.enable_setting');
    Route::delete('/dashboard/kelulusan/settings/{id}',
        [KelulusanSettingsController::class, 'destroy']
    )->where('id', '[0-9]+')->name('dashboard.kelulusan.delete_setting');

    Route::post('/dashboard/kelulusan/excel',
        [GraduatedStudentController::class, 'excelUpsert']
    )->name('dashboard.kelulusan.excel');
    Route::post('/dashboard/kelulusan/students/{nisn}/photo',
        [GraduatedStudentController::class, 'uploadPhoto']
    )->name('dashboard.kelulusan.students.photo');
});

