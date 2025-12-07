@props(['post'])

<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <!-- Featured Image -->
    @if($post->featured_image)
        <a href="{{ route('blog.show', $post->slug) }}">
            <img src="{{ asset('storage/' . $post->featured_image) }}"
                 alt="{{ $post->title }}"
                 class="w-full h-48 object-cover">
        </a>
    @else
        <a href="{{ route('blog.show', $post->slug) }}">
            <div class="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <span class="text-white text-4xl font-bold">{{ substr($post->title, 0, 1) }}</span>
            </div>
        </a>
    @endif

    <!-- Post Content -->
    <div class="p-6">
        <!-- Category -->
        <a href="{{ route('blog.category', $post->category->slug) }}"
           class="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-3 hover:bg-blue-200">
            {{ $post->category->name }}
        </a>

        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-800 mb-2">
            <a href="{{ route('blog.show', $post->slug) }}" class="hover:text-blue-600">
                {{ $post->title }}
            </a>
        </h3>

        <!-- Excerpt -->
        <p class="text-gray-600 mb-4 line-clamp-3">
            {{ $post->excerpt }}
        </p>

        <!-- Meta Info -->
        <div class="flex items-center justify-between text-sm text-gray-500">
            <div class="flex items-center space-x-4">
                <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ $post->published_at->format('M d, Y') }}
                </span>

                <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2. 458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    {{ $post->views }} views
                </span>
            </div>

            <a href="{{ route('blog.show', $post->slug) }}"
               class="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
            </a>
        </div>
    </div>
</article>
