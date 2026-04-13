@extends('admin.layout')

@section('content')
<h2 class="text-3xl font-bold mb-6">Dashboard Overview</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
        <p class="text-gray-500 uppercase text-xs font-bold">Total Modul</p>
        <p class="text-2xl font-semibold">{{ $stats['total_modules'] }}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
        <p class="text-gray-500 uppercase text-xs font-bold">Total Materi</p>
        <p class="text-2xl font-semibold">{{ $stats['total_materials'] }}</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
        <p class="text-gray-500 uppercase text-xs font-bold">Total Siswa</p>
        <p class="text-2xl font-semibold">{{ $stats['total_students'] }}</p>
    </div>
</div>
@endsection