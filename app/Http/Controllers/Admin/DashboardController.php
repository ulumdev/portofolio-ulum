<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\ContactMessage;
use App\Models\Project;

class DashboardController extends Controller
{
    /**
     * Display admin dashboard
     */
    public function index()
    {
        // Get statistics
        $stats = [
            'total_projects' => Project::count(),
            'published_projects' => Project::published()->count(),
            'total_posts' => BlogPost::count(),
            'published_posts' => BlogPost::published()->count(),
            'total_messages' => ContactMessage::count(),
            'unread_messages' => ContactMessage::unread()->count(),
            'total_views' => BlogPost::sum('views'),
        ];

        // Get recent blog posts
        $recentPosts = BlogPost::with('category', 'user')
            ->latest()
            ->take(5)
            ->get();

        // Get recent messages
        $recentMessages = ContactMessage::latest()
            ->take(5)
            ->get();

        return view('admin.dashboard', compact('stats', 'recentPosts', 'recentMessages'));
    }
}
