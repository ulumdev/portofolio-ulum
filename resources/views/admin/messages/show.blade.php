<x-admin-layout>
    <x-slot name="header">Message from {{ $message->name }}</x-slot>

    <div class="max-w-4xl bg-white rounded-lg shadow-md p-8">
        <div class="border-b pb-6 mb-6">
            <div class="flex items-start justify-between">
                <div>
                    <h2 class="text-2xl font-bold text-gray-800">{{ $message->subject ?: 'No Subject' }}</h2>
                    <div class="mt-2 space-y-1 text-sm text-gray-600">
                        <p><span class="font-medium">From:</span> {{ $message->name }} ({{ $message->email }})</p>
                        <p><span class="font-medium">Date:</span> {{ $message->created_at->format('F d, Y \a\t H:i') }}
                        </p>
                    </div>
                </div>
                <span
                    class="px-3 py-1 text-sm rounded {{ $message->is_read ? 'bg-gray-100 text-gray-600' : 'bg-blue-100 text-blue-600' }}">
                    {{ $message->is_read ? 'Read' : 'Unread' }}
                </span>
            </div>
        </div>

        <div class="prose max-w-none">
            <p class="whitespace-pre-wrap">{{ $message->message }}</p>
        </div>

        <div class="mt-8 flex justify-between items-center pt-6 border-t">
            <a href="{{ route('admin.messages.index') }}" class="text-blue-600 hover:text-blue-800">
                ← Back to Messages
            </a>

            <div class="space-x-4">
                <a href="mailto:{{ $message->email }}? subject=Re: {{ $message->subject }}"
                    class="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Reply
                </a>

                <form action="{{ route('admin.messages.destroy', $message) }}" method="POST" class="inline"
                    onsubmit="return confirm('Are you sure?')">
                    @csrf
                    @method('DELETE')
                    <button type="submit"
                        class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                        Delete
                    </button>
                </form>
            </div>
        </div>
    </div>
</x-admin-layout>
