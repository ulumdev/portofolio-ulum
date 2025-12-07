<x-app-layout>
    <x-slot name="title">Contact Me</x-slot>

    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold mb-4">Get In Touch</h1>
            <p class="text-xl">Let's discuss your project or just say hi!</p>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <h2 class="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h2>

                    <form action="{{ route('contact.store') }}" method="POST">
                        @csrf

                        <!-- Name -->
                        <div class="mb-6">
                            <label for="name" class="block text-gray-700 font-medium mb-2">
                                Your Name <span class="text-red-500">*</span>
                            </label>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   value="{{ old('name') }}"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('name') border-red-500 @enderror"
                                   placeholder="John Doe"
                                   required>
                            @error('name')
                                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Email -->
                        <div class="mb-6">
                            <label for="email" class="block text-gray-700 font-medium mb-2">
                                Your Email <span class="text-red-500">*</span>
                            </label>
                            <input type="email"
                                   id="email"
                                   name="email"
                                   value="{{ old('email') }}"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('email') border-red-500 @enderror"
                                   placeholder="john@example.com"
                                   required>
                            @error('email')
                                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Subject -->
                        <div class="mb-6">
                            <label for="subject" class="block text-gray-700 font-medium mb-2">
                                Subject
                            </label>
                            <input type="text"
                                   id="subject"
                                   name="subject"
                                   value="{{ old('subject') }}"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('subject') border-red-500 @enderror"
                                   placeholder="Project Inquiry">
                            @error('subject')
                                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Message -->
                        <div class="mb-6">
                            <label for="message" class="block text-gray-700 font-medium mb-2">
                                Message <span class="text-red-500">*</span>
                            </label>
                            <textarea id="message"
                                      name="message"
                                      rows="6"
                                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('message') border-red-500 @enderror"
                                      placeholder="Tell me about your project..."
                                      required>{{ old('message') }}</textarea>
                            @error('message')
                                <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                            @enderror
                        </div>

                        <!-- Submit Button -->
                        <button type="submit"
                                class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div>
                    <div class="bg-white rounded-lg shadow-lg p-8 mb-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

                        @php
                            $email = App\Models\Setting::get('email', '');
                            $githubUrl = App\Models\Setting::get('github_url', '');
                            $linkedinUrl = App\Models\Setting::get('linkedin_url', '');
                            $twitterUrl = App\Models\Setting::get('twitter_url', '');
                        @endphp

                        <div class="space-y-4">
                            @if($email)
                                <div class="flex items-start">
                                    <div class="bg-blue-100 p-3 rounded-lg mr-4">
                                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Email</h4>
                                        <a href="mailto:{{ $email }}" class="text-blue-600 hover:underline">
                                            {{ $email }}
                                        </a>
                                    </div>
                                </div>
                            @endif

                            <div class="flex items-start">
                                <div class="bg-blue-100 p-3 rounded-lg mr-4">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4. 243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Location</h4>
                                    <p class="text-gray-600">Indonesia</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="bg-blue-100 p-3 rounded-lg mr-4">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Response Time</h4>
                                    <p class="text-gray-600">Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
                        <h2 class="text-2xl font-bold mb-4">Connect With Me</h2>
                        <p class="mb-6">Follow me on social media for updates and more!</p>

                        <div class="flex space-x-4">
                            @if($githubUrl)
                                <a href="{{ $githubUrl }}" target="_blank" class="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6. 626 0-12 5. 373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111. 793-.261.793-.577v-2.234c-3. 338.726-4.033-1.416-4.033-1.416-.546-1. 387-1.333-1. 756-1.333-1. 756-1.089-.745. 083-.729.083-.729 1.205. 084 1.839 1. 237 1.839 1. 237 1.07 1. 834 2.807 1. 304 3.492.997. 107-.775.418-1. 305.762-1.604-2.665-.305-5. 467-1.334-5. 467-5.931 0-1.311.469-2. 381 1.236-3. 221-.124-.303-.535-1.524.117-3. 176 0 0 1. 008-.322 3.301 1.23.957-.266 1.983-.399 3. 003-.404 1.02. 005 2.047.138 3.006.404 2. 291-1.552 3. 297-1.23 3. 297-1.23.653 1.653.242 2. 874.118 3.176. 77.84 1.235 1.911 1.235 3.221 0 4. 609-2.807 5. 624-5.479 5. 921.43.372.823 1.102.823 2. 222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            @endif

                            @if($linkedinUrl)
                                <a href="{{ $linkedinUrl }}" target="_blank" class="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1. 5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1. 75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3. 368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            @endif

                            @if($twitterUrl)
                                <a href="{{ $twitterUrl }}" target="_blank" class="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg transition">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11. 64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                    </svg>
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</x-app-layout>
