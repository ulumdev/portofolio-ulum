<x-admin-layout>
    <x-slot name="header">Contact Messages</x-slot>

    <div class="bg-white rounded-lg shadow-md">
        <!-- Filter -->
        <div class="px-6 py-4 border-b">
            <form method="GET" class="flex space-x-2">
                <select name="status"
                    class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="">All Messages</option>
                    <option value="unread" {{ request('status') == 'unread' ? 'selected' : '' }}>Unread</option>
                    <option value="read" {{ request('status') == 'read' ? 'selected' : '' }}>Read</option>
                </select>
                <button type="submit"
                    class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Filter</button>
            </form>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="bg-gray-50 border-b">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">From</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y">
                    @forelse($messages as $message)
                        <tr class="hover:bg-gray-50 {{ !$message->is_read ? 'bg-blue-50' : '' }}">
                            <td class="px-6 py-4">
                                @if (!$message->is_read)
                                    <span class="w-2 h-2 bg-blue-600 rounded-full inline-block"></span>
                                @endif
                            </td>
                            <td class="px-6 py-4">
                                <div class="font-medium text-gray-900">{{ $message->name }}</div>
                                <div class="text-sm text-gray-500">{{ $message->email }}</div>
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500">{{ $message->subject ?: 'No Subject' }}</td>
                            <td class="px-6 py-4 text-sm text-gray-500">{{ $message->created_at->format('M d, Y H:i') }}
                            </td>
                            <td class="px-6 py-4 text-right text-sm space-x-2">
                                <a href="{{ route('admin.messages.show', $message) }}"
                                    class="text-blue-600 hover:text-blue-900">View</a>
                                <form action="{{ route('admin.messages.destroy', $message) }}" method="POST"
                                    class="inline" onsubmit="return confirm('Are you sure?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="text-red-600 hover:text-red-900">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="px-6 py-12 text-center text-gray-500">No messages found. </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if ($messages->hasPages())
            <div class="px-6 py-4 border-t">
                {{ $messages->links() }}
            </div>
        @endif
    </div>
</x-admin-layout>
