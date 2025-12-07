<x-app-layout>
    <x-slot name="title">
        @if(isset($category))
            {{ $category->name }} - Blog
        @elseif(isset($tag))
            {{ $tag->name }} - Blog
        @else
            Blog
        @endif
    </x-slot>

    <!-- Page Header -->
    <section class="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold mb-4">
                @if(isset($category))
                    {{ $category->name }}
                @elseif(isset($tag))
                    Posts tagged with "{{ $tag->name }}"
                @else
                    Blog
                @endif
            </h1>
            <p class="text-xl">
                @if(isset($category))
                    {{ $category->description ??  'Articles about ' . $category->name }}
                @elseif(isset($tag))
                    All posts tagged with {{ $tag->name }}
                @else
                    Articles, tutorials, and thoughts about web development
                @endif
            </p>
        </div>
    </section>

    <!-- Blog Content -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    @if($posts->count() > 0)
                        <div class="space-y-8">
                            @foreach($posts as $post)
                                <x-blog-card :post="$post" />
                            @endforeach
                        </div>

                        <!-- Pagination -->
                        <div class="mt-12">
                            {{ $posts->links() }}
                        </div>
                    @else
                        <div class="bg-white rounded-lg shadow-md p-12 text-center">
                            <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9. 172 16.172a4 4 0 015.656 0M9 10h. 01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-gray-500 text-lg">No blog posts found. </p>
                        </div>
                    @endif
                </div>

                <!-- Sidebar -->
                <div class="lg:col-span-1">
                    <!-- Search -->
                    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-4">Search</h3>
                        <form action="{{ route('blog.search') }}" method="GET">
                            <div class="flex">
                                <input type="text"
                                       name="search"
                                       placeholder="Search posts..."
                                       value="{{ request('search') }}"
                                       class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <button type="submit"
                                        class="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Categories -->
                    @if($categories->count() > 0)
                        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                            <ul class="space-y-2">
                                @foreach($categories as $cat)
                                    <li>
                                        <a href="{{ route('blog.category', $cat->slug) }}"
                                           class="flex items-center justify-between text-gray-700 hover:text-blue-600 py-2 {{ isset($category) && $category->id == $cat->id ? 'text-blue-600 font-semibold' : '' }}">
                                            <span>{{ $cat->name }}</span>
                                            <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                                                {{ $cat->blog_posts_count }}
                                            </span>
                                        </a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <!-- Popular Tags -->
                    @if($popularTags->count() > 0)
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Popular Tags</h3>
                            <div class="flex flex-wrap gap-2">
                                @foreach($popularTags as $popularTag)
                                    <a href="{{ route('blog.tag', $popularTag->slug) }}"
                                       class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition {{ isset($tag) && $tag->id == $popularTag->id ?  'bg-blue-100 text-blue-600' : '' }}">
                                        {{ $popularTag->name }} ({{ $popularTag->blog_posts_count }})
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </section>
</x-app-layout>
