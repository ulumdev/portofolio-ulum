<x-app-layout>
    <x-slot name="title">Home - Portofolio</x-slot>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm {{ App\Models\Setting::get('site_name', 'Portofolio Ulum') }}
                </h1>
                <p class="text-xl md:text-2xl mb-8">
                    Full Stack Developer & Tech Enthusiast
                </p>
                <div class="flex justify-center space-x-4">
                    <a href="{{ route('portofolio.index') }}"
                       class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        View Portofolio
                    </a>
                    <a href="{{ route('contact.index') }}"
                       class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                <p class="text-gray-600">Check out some of my recent work</p>
            </div>

            @if($projects->count() > 0)
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($projects as $project)
                        <x-project-card :project="$project" />
                    @endforeach
                </div>

                <div class="text-center mt-12">
                    <a href="{{ route('portofolio.index') }}"
                       class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        View All Projects
                    </a>
                </div>
            @else
                <p class="text-center text-gray-500">No projects available yet. </p>
            @endif
        </div>
    </section>

    <!-- Latest Blog Posts Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
                <p class="text-gray-600">Thoughts, tutorials, and insights</p>
            </div>

            @if($posts->count() > 0)
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($posts as $post)
                        <x-blog-card :post="$post" />
                    @endforeach
                </div>

                <div class="text-center mt-12">
                    <a href="{{ route('blog.index') }}"
                       class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        View All Posts
                    </a>
                </div>
            @else
                <p class="text-center text-gray-500">No blog posts available yet.</p>
            @endif
        </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p class="text-xl mb-8">Have a project in mind? Let's discuss! </p>
            <a href="{{ route('contact.index') }}"
               class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get In Touch
            </a>
        </div>
    </section>
</x-app-layout>
