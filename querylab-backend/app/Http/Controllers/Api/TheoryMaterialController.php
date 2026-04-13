<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TheoryMaterial;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TheoryMaterialController extends Controller
{
    public function index()
    {
        $materials = TheoryMaterial::orderBy('module_id')
                        ->orderBy('order_number', 'asc')
                        ->get();
        
        return response()->json($materials);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'module_id' => 'required|exists:theory_modules,id',
            'title' => 'required|string|max:200',
            'content' => 'required|string',
            'estimated_read_time' => 'nullable|integer',
            'order_number' => 'nullable|integer',
            'is_published' => 'boolean'
        ]);

        // Tambahkan random string di slug agar unik jika judul sama antar modul
        $validated['slug'] = Str::slug($request->title) . '-' . Str::random(5);
        
        $material = TheoryMaterial::create($validated);

        return response()->json(['message' => 'Materi berhasil ditambahkan', 'data' => $material], 201);
    }

    public function show($slug)
    {
        $material = TheoryMaterial::where('slug', $slug)->firstOrFail();

        return response()->json($material);
    }

    public function update(Request $request, $id)
    {
        $material = TheoryMaterial::findOrFail($id);

        $validated = $request->validate([
            'module_id' => 'exists:theory_modules,id',
            'title' => 'string|max:200',
            'content' => 'string',
            'estimated_read_time' => 'integer',
            'order_number' => 'integer',
            'is_published' => 'boolean'
        ]);

        if ($request->has('title')) {
            $validated['slug'] = Str::slug($request->title) . '-' . Str::random(5);
        }

        $material->update($validated);

        return response()->json(['message' => 'Materi berhasil diperbarui', 'data' => $material]);
    }

    public function destroy($id)
    {
        $material = TheoryMaterial::findOrFail($id);
        $material->delete();

        return response()->json(['message' => 'Materi berhasil dihapus']);
    }
}