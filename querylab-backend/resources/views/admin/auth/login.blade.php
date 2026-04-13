<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin QueryLab</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-blue-600">QueryLab</h1>
            <p class="text-gray-500">Admin Panel Authentication</p>
        </div>

        @if ($errors->any())
            <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                {{ $errors->first() }}
            </div>
        @endif

        <form action="{{ url('/admin/login') }}" method="POST" class="space-y-6">
            @csrf
            <div>
                <label class="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" required 
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="admin@querylab.com" value="{{ old('email') }}">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" required 
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••">
            </div>

            <button type="submit" 
                class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                Sign In
            </button>
        </form>
    </div>
</body>
</html>