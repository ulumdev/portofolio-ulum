<x-app-layout>
    <x-slot name="title">{{ $project->title }} - Portofolio</x-slot>

    <!-- Project Header -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="mb-4">
                <a href="{{ route('portofolio.index') }}" class="text-white hover:underline">← Back to Portofolio</a>
            </nav>
            <h1 class="text-4xl font-bold mb-4">{{ $project->title }}</h1>
            <p class="text-xl">{{ $project->description }}</p>
        </div>
    </section>

    <!-- Project Content -->
    <section class="py-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Featured Image -->
            @if($project->featured_image)
                <div class="mb-8">
                    <img src="{{ asset('storage/' . $project->featured_image) }}"
                         alt="{{ $project->title }}"
                         class="w-full rounded-lg shadow-lg">
                </div>
            @endif

            <!-- Technologies Used -->
            @if($project->skills->count() > 0)
                <div class="mb-8">
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        @foreach($project->skills as $skill)
                            <span class="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium">
                                {{ $skill->name }}
                            </span>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Project Links -->
            <div class="mb-8 flex space-x-4">
                @if($project->demo_url)
                    <a href="{{ $project->demo_url }}"
                       target="_blank"
                       class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        Live Demo
                    </a>
                @endif

                @if($project->github_url)
                    <a href="{{ $project->github_url }}"
                       target="_blank"
                       class="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387. 599.111.793-.261. 793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-. 546-1.387-1. 333-1.756-1. 333-1.756-1. 089-.745.083-.729. 083-.729 1.205. 084 1.839 1. 237 1.839 1. 237 1.07 1. 834 2.807 1. 304 3.492.997. 107-.775.418-1. 305.762-1.604-2.665-.305-5. 467-1.334-5. 467-5.931 0-1.311.469-2. 381 1.236-3. 221-.124-.303-.535-1.524.117-3. 176 0 0 1. 008-.322 3.301 1.23.957-.266 1.983-.399 3. 003-.404 1.02. 005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319. 192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5. 373-12-12-12z"/>
                        </svg>
                        View on GitHub
                    </a>
                @endif
            </div>

            <!-- Project Content -->
            <div class="prose prose-lg max-w-none">
                {!! nl2br(e($project->content)) !!}
            </div>

            <!-- Related Projects -->
            @if($relatedProjects->count() > 0)
                <div class="mt-16">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">Related Projects</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        @foreach($relatedProjects as $related)
                            <x-project-card :project="$related" />
                        @endforeach
                    </div>
                </div>
            @endif
        </div>
    </section>
</x-app-layout>
