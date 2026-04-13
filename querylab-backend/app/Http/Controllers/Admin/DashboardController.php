<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TheoryModule;
use App\Models\TheoryMaterial;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        // Mengambil statistik sederhana untuk ditampilkan di dashboard
        $stats = [
            'total_modules' => TheoryModule::count(),
            'total_materials' => TheoryMaterial::count(),
            'total_students' => User::where('role', 'student')->count(),
        ];

        return view('admin.dashboard', compact('stats'));
    }
}