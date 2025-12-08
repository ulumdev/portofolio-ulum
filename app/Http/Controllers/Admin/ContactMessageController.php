<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of contact messages
     */
    public function index(Request $request)
    {
        $query = ContactMessage::query();

        // Filter by read status
        if ($request->has('status')) {
            if ($request->status === 'unread') {
                $query->where('is_read', false);
            } elseif ($request->status === 'read') {
                $query->where('is_read', true);
            }
        }

        $messages = $query->latest()->paginate(15);

        // return view('admin.messages.index', compact('messages'));
        return Inertia::render('Admin/Messages/Index', [
            'messages' => $messages,
            'filters' => $request->only(['status']),
        ]);
    }

    /**
     * Display the specified message
     */
    public function show(ContactMessage $message)
    {
        // Mark as read
        if (! $message->is_read) {
            $message->markAsRead();
        }

        // return view('admin.messages.show', compact('message'));
        return Inertia::render('Admin/Messages/Show', [
            'message' => $message,
        ]);
    }

    /**
     * Remove the specified message
     */
    public function destroy(ContactMessage $message)
    {
        $message->delete();

        return redirect()->route('admin.messages.index')
            ->with('success', 'Message deleted successfully!');
    }
}
