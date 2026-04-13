<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin QueryLab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex">
    <aside class="w-64 bg-slate-900 h-screen sticky top-0 text-white p-6 flex flex-col">
        <h1 class="text-2xl font-bold text-blue-400 mb-8">QueryLab</h1>
        
        <nav class="space-y-4 flex-1">
            <a href="{{ route('admin.dashboard') }}" 
               class="block py-2.5 px-4 rounded transition {{ request()->routeIs('admin.dashboard') ? 'bg-slate-800 border-l-4 border-blue-500' : 'hover:bg-slate-800' }}">
               Dashboard
            </a>
            <a href="#" class="block py-2.5 px-4 rounded transition hover:bg-slate-800">
               Kelola Modul
            </a>
            <a href="#" class="block py-2.5 px-4 rounded transition hover:bg-slate-800">
               Kelola Materi
            </a>
        </nav>

        <div class="pt-10 border-t border-slate-800">
            <form action="{{ route('admin.logout') }}" method="POST">
                @csrf
                <button type="submit" class="w-full text-left py-2.5 px-4 text-red-400 hover:bg-red-900/20 rounded transition flex items-center gap-2">
                    <span>Logout</span>
                </button>
            </form>
        </div>
    </aside>

    <main class="flex-1 p-8">
        @yield('content')
    </main>
</body>
</html>