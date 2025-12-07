<x-app-layout>
    <x-slot name="title">{{ $post->meta_title ??  $post->title }} - Blog</x-slot>

    <!-- Meta Tags for SEO -->
    @if($post->meta_description)
        <meta name="description" content="{{ $post->meta_description }}">
    @endif

    <!-- Page Header -->
    <section class="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="mb-4">
                <a href="{{ route('blog.index') }}" class="text-white hover:underline">← Back to Blog</a>
            </nav>

            <!-- Category -->
            <a href="{{ route('blog.category', $post->category->slug) }}"
               class="inline-block px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full mb-4 hover:bg-opacity-30">
                {{ $post->category->name }}
            </a>

            <!-- Title -->
            <h1 class="text-4xl font-bold mb-4">{{ $post->title }}</h1>

            <!-- Meta Info -->
            <div class="flex items-center space-x-6 text-white text-opacity-90">
                <span class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    {{ $post->user->name }}
                </span>

                <span class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {{ $post->published_at->format('F d, Y') }}
                </span>

                <span class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3. 732 7.943 7. 523 5 12 5c4.478 0 8. 268 2.943 9. 542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8. 268-2.943-9. 542-7z"/>
                    </svg>
                    {{ $post->views }} views
                </span>
            </div>
        </div>
    </section>

    <!-- Post Content -->
    <article class="py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Featured Image -->
            @if($post->featured_image)
                <div class="mb-8">
                    <img src="{{ asset('storage/' . $post->featured_image) }}"
                         alt="{{ $post->title }}"
                         class="w-full rounded-lg shadow-lg">
                </div>
            @endif

            <!-- Post Content -->
            <div class="prose prose-lg max-w-none mb-8">
                {!! $post->content !!}
            </div>

            <!-- Tags -->
            @if($post->tags->count() > 0)
                <div class="border-t border-b border-gray-200 py-6 mb-8">
                    <h3 class="text-sm font-semibold text-gray-700 mb-3">Tags:</h3>
                    <div class="flex flex-wrap gap-2">
                        @foreach($post->tags as $tag)
                            <a href="{{ route('blog.tag', $tag->slug) }}"
                               class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition">
                                #{{ $tag->name }}
                            </a>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Share Buttons -->
            <div class="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Share this post:</h3>
                <div class="flex space-x-4">
                    <a href="https://twitter.com/intent/tweet?url={{ urlencode(route('blog.show', $post->slug)) }}&text={{ urlencode($post->title) }}"
                       target="_blank"
                       class="flex items-center bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10. 9 10.9 0 01-3.14 1. 53 4.48 4. 48 0 00-7. 86 3v1A10. 66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                        Twitter
                    </a>

                    <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(route('blog.show', $post->slug)) }}"
                       target="_blank"
                       class="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4. 388 10.954 10. 125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3. 007 1.792-4. 669 4.533-4. 669 1.312 0 2.686.235 2. 686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                    </a>

                    <a href="https://www.linkedin.com/shareArticle?mini=true&url={{ urlencode(route('blog.show', $post->slug)) }}&title={{ urlencode($post->title) }}"
                       target="_blank"
                       class="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>

            <!-- Author Info -->
            <div class="bg-gray-50 rounded-lg p-6 mb-8">
                <div class="flex items-center">
                    @if($post->user->avatar)
                        <img src="{{ asset('storage/' . $post->user->avatar) }}"
                             alt="{{ $post->user->name }}"
                             class="w-16 h-16 rounded-full mr-4">
                    @else
                        <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                            {{ substr($post->user->name, 0, 1) }}
                        </div>
                    @endif

                    <div>
                        <h4 class="text-lg font-semibold text-gray-800">{{ $post->user->name }}</h4>
                        @if($post->user->bio)
                            <p class="text-gray-600">{{ $post->user->bio }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <!-- Related Posts -->
            @if($relatedPosts->count() > 0)
                <div class="mt-12">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">Related Posts</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        @foreach($relatedPosts as $related)
                            <x-blog-card :post="$related" />
                        @endforeach
                    </div>
                </div>
            @endif
        </div>
    </article>
</x-app-layout>
