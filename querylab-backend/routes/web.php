<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;

// 1. Redirect Root ke Login Admin
// Jadi pas buka 127.0.0.1:8000 langsung dilempar ke login admin
Route::get('/', function () {
    return redirect()->route('login');
});

// 2. --- KELOMPOK ADMIN (Murni Blade) ---
Route::prefix('admin')->group(function () {
    // Tambahkan middleware 'guest' agar kalau sudah login tidak bisa balik ke halaman login lagi
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login')->middleware('guest');
    Route::post('/login', [AuthController::class, 'login'])->middleware('guest');
    
    Route::middleware(['auth'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
        Route::post('/logout', [AuthController::class, 'logout'])->name('admin.logout');
        
        // Pastikan Controller ModuleController sudah di-import di atas jika ingin digunakan
        // Route::get('/modules', [ModuleController::class, 'index'])->name('admin.modules.index');
    });
});

// 3. --- KELOMPOK USER (Murni React) ---
// Kita ubah prefix-nya, misal kalau mau buka frontend react harus lewat /app atau /home
// Agar tidak bentrok dengan halaman login admin di root
Route::get('/main/{any}', function () {
    return view('app'); 
})->where('any', '.*');