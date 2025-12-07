@props(['skill'])

<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <!-- Icon -->
    {{-- @if($skill->icon)
        <div class="text-4xl mb-3">{{ $skill->icon }}</div>
    @else
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <span class="text-blue-600 font-bold text-xl">{{ substr($skill->name, 0, 1) }}</span>
        </div>
    @endif

    <!-- Skill Name -->
    <h4 class="text-lg font-semibold text-gray-800 mb-2">{{ $skill->name }}</h4> --}}

    <div class="flex items-center justify-between">
        <div class="flex flex-col gap-2">
            <!-- Icon -->
            @if($skill->icon)
                <div class="text-4xl">{{ $skill->icon }}</div>
            @else
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-blue-600 font-bold text-xl">{{ substr($skill->name, 0, 1) }}</span>
                </div>
            @endif

            <!-- Skill Name -->
            <h4 class="text-lg font-semibold text-gray-800">{{ $skill->name }}</h4>
        </div>

        <!-- Proficiency Level Badge -->
        @php
            $levels = [
                'beginner' => ['bg' => 'bg-gray-100', 'text' => 'text-gray-700', 'border' => 'border-gray-300', 'label' => 'Beginner'],
                'intermediate' => ['bg' => 'bg-yellow-100', 'text' => 'text-yellow-700', 'border' => 'border-yellow-300', 'label' => 'Intermediate'],
                'advanced' => ['bg' => 'bg-green-100', 'text' => 'text-green-700', 'border' => 'border-green-300', 'label' => 'Advanced'],
                'expert' => ['bg' => 'bg-blue-100', 'text' => 'text-blue-700', 'border' => 'border-blue-300', 'label' => 'Expert']
            ];
            $level = $levels[$skill->proficiency] ?? $levels['beginner'];
        @endphp

        <span class="{{ $level['bg'] }} {{ $level['text'] }} {{ $level['border'] }} border px-3 py-1 rounded-full text-sm font-medium">
            {{ $level['label'] }}
        </span>
    </div>

    <!-- Proficiency Percentage -->
    {{-- <p class="text-sm text-gray-600 text-right">{{ $skill->proficiency }}%</p> --}}
</div>
