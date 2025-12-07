<x-admin-layout>
    <x-slot name="header">Skills Management</x-slot>

    <div class="bg-white rounded-lg shadow-md">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-800">All Skills</h3>
            <a href="{{ route('admin.skills.create') }}"
                class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Add New Skill
            </a>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="bg-gray-50 border-b">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        {{-- <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Icon</th> --}}
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase text-center">Proficiency</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    @forelse($skills as $skill)
                        <tr class="hover:bg-gray-50">
                            <td class="px-6 py-4 font-medium text-gray-900">{{ $skill->name }}</td>
                            {{-- <td class="px-6 py-4 text-sm text-gray-500">
                                <i class="{{ $skill->icon }}"></i>
                            </td> --}}
                            <td class="px-6 py-4 text-sm text-gray-500 text-center">
                                @php
                                    $badgeColors = [
                                        'beginner' => 'border-gray-400 text-gray-700 bg-gray-100',
                                        'intermediate' => 'border-yellow-400 text-yellow-700 bg-yellow-100',
                                        'advanced' => 'border-green-400 text-green-700 bg-green-100',
                                        'expert' => 'border-blue-400 text-blue-700 bg-blue-100'
                                    ];
                                    $colorClass = $badgeColors[$skill->proficiency] ?? 'border-gray-400 text-gray-700 bg-gray-100';
                                @endphp
                                <span class="px-3 py-1 border-2 {{ $colorClass }} rounded-full text-xs font-medium capitalize">
                                    {{ $skill->proficiency }}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">{{ $skill->category }}</td>
                            <td class="px-6 py-4 text-sm text-gray-500">{{ $skill->order }}</td>
                            <td class="px-6 py-4 text-sm text-gray-500">{{ $skill->created_at->format('M d, Y') }}
                            </td>
                            <td class="px-6 py-4 text-right text-sm space-x-2">
                                <a href="{{ route('admin.skills.edit', $skill) }}"
                                    class="text-blue-600 hover:text-blue-900">Edit</a>
                                <form action="{{ route('admin.skills.destroy', $skill) }}" method="POST"
                                    class="inline" onsubmit="return confirm('Are you sure?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="px-6 py-12 text-center text-gray-500">No skills found.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if ($skills->hasPages())
            <div class="px-6 py-4 border-t">
                {{ $skills->links() }}
            </div>
        @endif
    </div>
</x-admin-layout>
