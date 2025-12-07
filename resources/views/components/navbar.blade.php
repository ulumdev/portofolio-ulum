<nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <!-- Logo / Brand -->
            <div class="flex items-center">
                <a href="{{ route('home') }}" class="text-2xl font-bold text-gray-800">
                    {{ config('app.name', 'Portofolio') }}
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex md:items-center md:space-x-8">
                <a href="{{ route('home') }}" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium {{ request()->routeIs('home') ? 'text-blue-600 border-b-2 border-blue-600' : '' }}">
                    Home
                </a>
                <a href="{{ route('portofolio.index') }}" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium {{ request()->routeIs('portofolio.*') ? 'text-blue-600 border-b-2 border-blue-600' : '' }}">
                    Portofolio
                </a>
                <a href="{{ route('blog.index') }}" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium {{ request()->routeIs('blog.*') ? 'text-blue-600 border-b-2 border-blue-600' : '' }}">
                    Blog
                </a>
                <a href="{{ route('about') }}" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium {{ request()->routeIs('about') ? 'text-blue-600 border-b-2 border-blue-600' : '' }}">
                    About
                </a>
                <a href="{{ route('contact.index') }}" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium {{ request()->routeIs('contact.*') ? 'text-blue-600 border-b-2 border-blue-600' : '' }}">
                    Contact
                </a>

                @auth
                    @if(auth()->user()->isAdmin())
                        <a href="{{ route('admin.dashboard') }}" class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                            Admin
                        </a>
                    @endif
                @endauth
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button type="button" class="text-gray-700 hover:text-blue-600 focus:outline-none" id="mobile-menu-button">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="{{ route('home') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">Home</a>
            <a href="{{ route('portofolio.index') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">Portofolio</a>
            <a href="{{ route('blog.index') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">Blog</a>
            <a href="{{ route('about') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">About</a>
            <a href="{{ route('contact.index') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md">Contact</a>
            @auth
                @if(auth()->user()->isAdmin())
                    <a href="{{ route('admin.dashboard') }}" class="block px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-md">Admin</a>
                @endif
            @endauth
        </div>
    </div>
</nav>

<script>
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        document.getElementById('mobile-menu'). classList.toggle('hidden');
    });
</script>
