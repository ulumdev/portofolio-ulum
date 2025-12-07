<x-admin-layout>
    <x-slot name="header">Site Settings</x-slot>

    <div class="max-w-4xl bg-white rounded-lg shadow-md p-8">
        <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <!-- Site Name -->
            <div class="mb-6">
                <label for="site_name" class="block text-sm font-medium text-gray-700 mb-2">
                    Site Name <span class="text-red-500">*</span>
                </label>
                <input type="text" id="site_name" name="site_name"
                    value="{{ old('site_name', $settings['site_name']) }}"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('site_name') border-red-500 @enderror"
                    required>
                @error('site_name')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Bio -->
            <div class="mb-6">
                <label for="bio" class="block text-sm font-medium text-gray-700 mb-2">
                    About Me / Bio
                </label>
                <textarea id="bio" name="bio" rows="6"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('bio') border-red-500 @enderror">{{ old('bio', $settings['bio']) }}</textarea>
                @error('bio')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Profile Photo -->
            <div class="mb-6">
                <label for="profile_photo" class="block text-sm font-medium text-gray-700 mb-2">
                    Profile Photo
                </label>
                @if ($settings['profile_photo'])
                    <div class="mb-4">
                        <img src="{{ asset('storage/' . $settings['profile_photo']) }}" alt="Profile"
                            class="w-32 h-32 rounded-full object-cover">
                    </div>
                @endif
                <input type="file" id="profile_photo" name="profile_photo" accept="image/*"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('profile_photo') border-red-500 @enderror">
                @error('profile_photo')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Social Media Links -->
            <div class="border-t pt-6 mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Social Media Links</h3>

                <!-- GitHub -->
                <div class="mb-4">
                    <label for="github_url" class="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
                    <input type="url" id="github_url" name="github_url"
                        value="{{ old('github_url', $settings['github_url']) }}"
                        placeholder="https://github.com/username"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('github_url') border-red-500 @enderror">
                    @error('github_url')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- LinkedIn -->
                <div class="mb-4">
                    <label for="linkedin_url" class="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                    <input type="url" id="linkedin_url" name="linkedin_url"
                        value="{{ old('linkedin_url', $settings['linkedin_url']) }}"
                        placeholder="https://linkedin.com/in/username"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('linkedin_url') border-red-500 @enderror">
                    @error('linkedin_url')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Twitter -->
                <div class="mb-4">
                    <label for="twitter_url" class="block text-sm font-medium text-gray-700 mb-2">Twitter/X URL</label>
                    <input type="url" id="twitter_url" name="twitter_url"
                        value="{{ old('twitter_url', $settings['twitter_url']) }}"
                        placeholder="https://twitter.com/username"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('twitter_url') border-red-500 @enderror">
                    @error('twitter_url')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Email -->
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Public Email</label>
                    <input type="email" id="email" name="email" value="{{ old('email', $settings['email']) }}"
                        placeholder="your@email.com"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('email') border-red-500 @enderror">
                    @error('email')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                    @enderror
                </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
                <button type="submit"
                    class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    Save Settings
                </button>
            </div>
        </form>
    </div>
</x-admin-layout>
