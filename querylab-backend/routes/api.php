<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TheoryModuleController;
use App\Http\Controllers\Api\TheoryMaterialController;

// Route Public Login
Route::post('/admin/login', [AuthController::class, 'login']);

// Route Terproteksi (Hanya jika sudah login)
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    
    Route::post('/logout', [AuthController::class, 'logout']);

    // CRUD Modul & Materi
    Route::apiResource('modules', TheoryModuleController::class);
    Route::apiResource('materials', TheoryMaterialController::class);
    
});

/*
|--------------------------------------------------------------------------
| Public Routes (Akses untuk User/Siswa)
|--------------------------------------------------------------------------
*/

// Mendapatkan semua modul beserta daftar materinya
Route::get('/modules', [TheoryModuleController::class, 'index']);

// Mendapatkan detail satu modul berdasarkan slug
Route::get('/modules/{slug}', [TheoryModuleController::class, 'show']);

// Mendapatkan detail satu materi berdasarkan slug
Route::get('/materials/{slug}', [TheoryMaterialController::class, 'show']);


Route::post('/run-query', function (Request $request) {
    try {
        $query = $request->input('query');

        $result = DB::select(DB::raw($query));

        return response()->json([
            'success' => true,
            'data' => $result
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'error' => $e->getMessage()
        ]);
    }
});
/*
|--------------------------------------------------------------------------
| Admin Routes (Akses untuk Kelola Materi)
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

Route::get('/test', function () {
    return response()->json([
        'message' => 'QueryLab Backend is running 🚀'
    ]);
});



Route::prefix('admin')->group(function () {
    
    // CRUD Theory Modules
    Route::apiResource('modules', TheoryModuleController::class)->except(['index', 'show']);
    
    // CRUD Theory Materials
    Route::apiResource('materials', TheoryMaterialController::class)->except(['show']);
    
});

