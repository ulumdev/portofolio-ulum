<x-app-layout>
    <x-slot name="title">About Me</x-slot>

    <!-- Page Header -->
    <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold mb-4">About Me</h1>
            <p class="text-xl">Get to know me better</p>
        </div>
    </section>

    <!-- About Content -->
    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Profile Section -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow-lg p-6 text-center sticky top-6">
                        @if($profilePhoto)
                            <img src="{{ asset('storage/' . $profilePhoto) }}"
                                 alt="Profile Photo"
                                 class="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-600">
                        @else
                            <div class="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span class="text-white text-6xl font-bold">
                                    {{ substr(App\Models\Setting::get('site_name', 'U'), 0, 1) }}
                                </span>
                            </div>
                        @endif

                        <h2 class="text-2xl font-bold text-gray-800 mb-2">
                            {{ App\Models\Setting::get('site_name', 'Portfolio Ulum') }}
                        </h2>
                        <p class="text-gray-600 mb-6">Full Stack Developer</p>

                        <!-- Social Links -->
                        <div class="flex justify-center space-x-4">
                            @php
                                $githubUrl = App\Models\Setting::get('github_url', '');
                                $linkedinUrl = App\Models\Setting::get('linkedin_url', '');
                                $twitterUrl = App\Models\Setting::get('twitter_url', '');
                                $email = App\Models\Setting::get('email', '');
                            @endphp

                            @if($githubUrl)
                                <a href="{{ $githubUrl }}" target="_blank" class="text-gray-600 hover:text-blue-600">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 . 319.192.694.801. 576 4.765-1. 589 8.199-6. 086 8.199-11. 386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            @endif

                            @if($linkedinUrl)
                                <a href="{{ $linkedinUrl }}" target="_blank" class="text-gray-600 hover:text-blue-600">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1. 5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1. 75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3. 368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2. 777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            @endif

                            @if($twitterUrl)
                                <a href="{{ $twitterUrl }}" target="_blank" class="text-gray-600 hover:text-blue-600">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                    </svg>
                                </a>
                            @endif

                            @if($email)
                                <a href="mailto:{{ $email }}" class="text-gray-600 hover:text-blue-600">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </a>
                            @endif
                        </div>
                    </div>
                </div>

                <!-- Bio & Skills Section -->
                <div class="lg:col-span-2">
                    <!-- Bio -->
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">About Me</h3>
                        <div class="prose prose-lg max-w-none text-gray-700">
                            @if($bio)
                                {!! nl2br(e($bio)) !!}
                            @else
                                <p>Hello! I'm a passionate full-stack developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and constantly learning new technologies. </p>
                            @endif
                        </div>
                    </div>

                    <!-- Skills -->
                    @if($skills->count() > 0)
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">My Skills</h3>

                            @foreach($skills as $category => $categorySkills)
                                <div class="mb-8 last:mb-0">
                                    <h4 class="text-lg font-semibold text-gray-700 mb-4 capitalize">
                                        {{ $category ?: 'Other Skills' }}
                                    </h4>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        @foreach($categorySkills as $skill)
                                            <x-skill-badge :skill="$skill" />
                                        @endforeach
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p class="text-xl mb-8">Let's create something amazing! </p>
            <a href="{{ route('contact.index') }}"
               class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get In Touch
            </a>
        </div>
    </section>
</x-app-layout>
