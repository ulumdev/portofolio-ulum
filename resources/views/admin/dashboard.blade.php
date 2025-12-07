<x-admin-layout>
    <x-slot name="header">Dashboard</x-slot>

    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Projects -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm font-medium">Total Projects</p>
                    <p class="text-3xl font-bold text-gray-800 mt-2">{{ $stats['total_projects'] }}</p>
                    <p class="text-sm text-green-600 mt-1">{{ $stats['published_projects'] }} Published</p>
                </div>
                <div class="bg-blue-100 p-4 rounded-full">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Total Blog Posts -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm font-medium">Total Blog Posts</p>
                    <p class="text-3xl font-bold text-gray-800 mt-2">{{ $stats['total_posts'] }}</p>
                    <p class="text-sm text-green-600 mt-1">{{ $stats['published_posts'] }} Published</p>
                </div>
                <div class="bg-green-100 p-4 rounded-full">
                    <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Total Views -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm font-medium">Total Views</p>
                    <p class="text-3xl font-bold text-gray-800 mt-2">{{ number_format($stats['total_views']) }}</p>
                    <p class="text-sm text-gray-500 mt-1">Blog Post Views</p>
                </div>
                <div class="bg-purple-100 p-4 rounded-full">
                    <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3. 732 7.943 7. 523 5 12 5c4.478 0 8. 268 2.943 9. 542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8. 268-2.943-9. 542-7z"/>
                    </svg>
                </div>
            </div>
        </div>

        <!-- Messages -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-500 text-sm font-medium">Messages</p>
                    <p class="text-3xl font-bold text-gray-800 mt-2">{{ $stats['total_messages'] }}</p>
                    <p class="text-sm text-orange-600 mt-1">{{ $stats['unread_messages'] }} Unread</p>
                </div>
                <div class="bg-orange-100 p-4 rounded-full">
                    <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Recent Blog Posts -->
        <div class="bg-white rounded-lg shadow-md">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-800">Recent Blog Posts</h3>
                <a href="{{ route('admin.blog.index') }}" class="text-blue-600 hover:text-blue-800 text-sm">View All</a>
            </div>
            <div class="p-6">
                @if($recentPosts->count() > 0)
                    <div class="space-y-4">
                        @foreach($recentPosts as $post)
                            <div class="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
                                @if($post->featured_image)
                                    <img src="{{ asset('storage/' . $post->featured_image) }}"
                                         alt="{{ $post->title }}"
                                         class="w-16 h-16 rounded object-cover">
                                @else
                                    <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                        <span class="text-gray-500 font-bold">{{ substr($post->title, 0, 1) }}</span>
                                    </div>
                                @endif

                                <div class="flex-1 min-w-0">
                                    <a href="{{ route('admin.blog.edit', $post) }}" class="text-gray-800 font-medium hover:text-blue-600 block truncate">
                                        {{ $post->title }}
                                    </a>
                                    <p class="text-sm text-gray-500 mt-1">
                                        {{ $post->category->name }} • {{ $post->created_at->diffForHumans() }}
                                    </p>
                                    <span class="inline-block px-2 py-1 text-xs rounded mt-1 {{ $post->status == 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800' }}">
                                        {{ ucfirst($post->status) }}
                                    </span>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @else
                    <p class="text-gray-500 text-center py-8">No blog posts yet. </p>
                @endif
            </div>
        </div>

        <!-- Recent Messages -->
        <div class="bg-white rounded-lg shadow-md">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-800">Recent Messages</h3>
                <a href="{{ route('admin.messages.index') }}" class="text-blue-600 hover:text-blue-800 text-sm">View All</a>
            </div>
            <div class="p-6">
                @if($recentMessages->count() > 0)
                    <div class="space-y-4">
                        @foreach($recentMessages as $message)
                            <div class="pb-4 border-b border-gray-100 last:border-0">
                                <div class="flex items-start justify-between mb-2">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                            <span class="text-blue-600 font-bold">{{ substr($message->name, 0, 1) }}</span>
                                        </div>
                                        <div>
                                            <a href="{{ route('admin.messages.show', $message) }}" class="text-gray-800 font-medium hover:text-blue-600">
                                                {{ $message->name }}
                                            </a>
                                            <p class="text-sm text-gray-500">{{ $message->email }}</p>
                                        </div>
                                    </div>
                                    @if(! $message->is_read)
                                        <span class="bg-red-500 w-2 h-2 rounded-full"></span>
                                    @endif
                                </div>
                                <p class="text-sm text-gray-600 ml-13 truncate">{{ $message->message }}</p>
                                <p class="text-xs text-gray-500 ml-13 mt-1">{{ $message->created_at->diffForHumans() }}</p>
                            </div>
                        @endforeach
                    </div>
                @else
                    <p class="text-gray-500 text-center py-8">No messages yet.</p>
                @endif
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="{{ route('admin.projects.create') }}" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group">
            <div class="flex items-center">
                <div class="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                </div>
                <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">New Project</h4>
                    <p class="text-sm text-gray-500">Add a new project</p>
                </div>
            </div>
        </a>

        <a href="{{ route('admin.blog.create') }}" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group">
            <div class="flex items-center">
                <div class="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                </div>
                <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">New Blog Post</h4>
                    <p class="text-sm text-gray-500">Write a new article</p>
                </div>
            </div>
        </a>

        <a href="{{ route('admin.settings.index') }}" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group">
            <div class="flex items-center">
                <div class="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c. 426-1.756 2. 924-1.756 3. 35 0a1.724 1.724 0 002. 573 1.066c1. 543-.94 3.31. 826 2.37 2. 37a1.724 1. 724 0 001.065 2.572c1.756. 426 1.756 2. 924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1. 724 0 00-2. 573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1. 756-2.924 0-3.35a1.724 1.724 0 001. 066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
                <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Settings</h4>
                    <p class="text-sm text-gray-500">Manage site settings</p>
                </div>
            </div>
        </a>
    </div>
</x-admin-layout>
