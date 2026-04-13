<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TheoryModule;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TheoryModuleController extends Controller
{
    public function index()
    {
        $modules = TheoryModule::with(['materials' => function($query) {
                        $query->where('is_published', true);
                    }])
                    ->orderBy('order_number')
                    ->get();

        return response()->json($modules);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'description' => 'nullable|string',
            'order_number' => 'nullable|integer',
            'is_published' => 'boolean'
        ]);

        $validated['slug'] = Str::slug($request->title);
        
        $module = TheoryModule::create($validated);

        return response()->json(['message' => 'Modul berhasil dibuat', 'data' => $module], 201);
    }

    public function show($slug)
    {
        $module = TheoryModule::with('materials')
                    ->where('slug', $slug)
                    ->firstOrFail();

        return response()->json($module);
    }

    public function update(Request $request, $id)
    {
        $module = TheoryModule::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'string|max:200',
            'description' => 'nullable|string',
            'order_number' => 'integer',
            'is_published' => 'boolean'
        ]);

        if ($request->has('title')) {
            $validated['slug'] = Str::slug($request->title);
        }

        $module->update($validated);

        return response()->json(['message' => 'Modul berhasil diperbarui', 'data' => $module]);
    }

    public function destroy($id)
    {
        $module = TheoryModule::findOrFail($id);
        $module->delete();

        return response()->json(['message' => 'Modul berhasil dihapus']);
    }
}