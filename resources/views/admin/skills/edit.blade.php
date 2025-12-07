<x-admin-layout>
    <x-slot name="header">Edit Skill: {{ $skill->name }}</x-slot>

    <div class="max-w-2xl bg-white rounded-lg shadow-md p-6">
        <form action="{{ route('admin.skills.update', $skill) }}" method="POST">
            @csrf
            @method('PUT')

            <!-- Name -->
            <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Skill Name <span class="text-red-500">*</span>
                </label>
                <input type="text" id="name" name="name" value="{{ old('name', $skill->name) }}"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('name') border-red-500 @enderror"
                    required>
                @error('name')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Icon -->
            <div class="mb-6">
                <label for="icon" class="block text-sm font-medium text-gray-700 mb-2">
                    Icon (Emoji or Icon Class)
                </label>
                <input type="text" id="icon" name="icon" value="{{ old('icon', $skill->icon) }}"
                    placeholder="🚀 or fa-rocket"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('icon') border-red-500 @enderror">
                @error('icon')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Proficiency -->
            <div class="mb-6">
                <label for="proficiency" class="block text-sm font-medium text-gray-700 mb-2">
                    Proficiency Level <span class="text-red-500">*</span>
                </label>
                <select id="proficiency" name="proficiency"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('proficiency') border-red-500 @enderror"
                    required>
                    <option value="">Select Proficiency Level</option>
                    <option value="beginner" {{ old('proficiency', $skill->proficiency) == 'beginner' ? 'selected' : '' }}>Beginner</option>
                    <option value="intermediate" {{ old('proficiency', $skill->proficiency) == 'intermediate' ? 'selected' : '' }}>Intermediate</option>
                    <option value="advanced" {{ old('proficiency', $skill->proficiency) == 'advanced' ? 'selected' : '' }}>Advanced</option>
                    <option value="expert" {{ old('proficiency', $skill->proficiency) == 'expert' ? 'selected' : '' }}>Expert</option>
                </select>
                @error('proficiency')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Category -->
            <div class="mb-6">
                <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
                    Category
                </label>
                <select id="category" name="category"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('category') border-red-500 @enderror">
                    <option value="">Select Category</option>
                    <option value="frontend" {{ old('category', $skill->category) == 'frontend' ? 'selected' : '' }}>Frontend</option>
                    <option value="backend" {{ old('category', $skill->category) == 'backend' ? 'selected' : '' }}>Backend</option>
                    <option value="tools" {{ old('category', $skill->category) == 'tools' ? 'selected' : '' }}>Tools</option>
                    <option value="database" {{ old('category', $skill->category) == 'database' ? 'selected' : '' }}>Database</option>
                    <option value="other" {{ old('category', $skill->category) == 'other' ? 'selected' : '' }}>Other</option>
                </select>
                @error('category')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Order -->
            <div class="mb-6">
                <label for="order" class="block text-sm font-medium text-gray-700 mb-2">
                    Display Order
                </label>
                <input type="number" id="order" name="order" value="{{ old('order', $skill->order) }}" min="0"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 @error('order') border-red-500 @enderror">
                @error('order')
                    <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                @enderror
            </div>

            <!-- Buttons -->
            <div class="flex justify-end space-x-4">
                <a href="{{ route('admin.skills.index') }}"
                    class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    Cancel
                </a>
                <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Update Skill
                </button>
            </div>
        </form>
    </div>
</x-admin-layout>
