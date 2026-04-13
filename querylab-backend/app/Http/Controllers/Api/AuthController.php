<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            // Proteksi: Hanya Admin yang boleh masuk
            if ($user->role !== 'admin') {
                Auth::logout();
                return response()->json([
                    'message' => 'Akses ditolak. Anda bukan Admin.'
                ], 403);
            }

            $token = $user->createToken('admin_token')->plainTextToken;

            return response()->json([
                'message' => 'Login Berhasil',
                'token' => $token,
                'user' => [
                    'name' => $user->name,
                    'role' => $user->role
                ]
            ]);
        }

        return response()->json(['message' => 'Email atau Password salah'], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}