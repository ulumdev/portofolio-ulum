<x-app-layout>
    <x-slot name="title">Portofolio</x-slot>

    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold mb-4">My Portofolio</h1>
            <p class="text-xl">A collection of my projects and work</p>
        </div>
    </section>

    <!-- Filter & Projects -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Filter by Skills -->
            @if($skills->count() > 0)
                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Filter by Technology:</h3>
                    <div class="flex flex-wrap gap-2">
                        <a href="{{ route('portofolio.index') }}"
                           class="px-4 py-2 rounded-lg {{ ! request('skill') ?  'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100' }}">
                            All
                        </a>
                        @foreach($skills as $skill)
                            <a href="{{ route('portofolio.index', ['skill' => $skill->id]) }}"
                               class="px-4 py-2 rounded-lg {{ request('skill') == $skill->id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100' }}">
                                {{ $skill->name }}
                            </a>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Projects Grid -->
            @if($projects->count() > 0)
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    @foreach($projects as $project)
                        <x-project-card :project="$project" />
                    @endforeach
                </div>

                <!-- Pagination -->
                <div class="mt-12">
                    {{ $projects->links() }}
                </div>
            @else
                <div class="text-center py-12">
                    <p class="text-gray-500 text-lg">No projects found. </p>
                </div>
            @endif
        </div>
    </section>
</x-app-layout>
