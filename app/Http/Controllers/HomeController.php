<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display homepage
     */
    public function index()
    {
        // Get featured projects (latest 6 published)
        $projects = Project::published()
            ->with('skills')
            ->ordered()
            ->take(6)
            ->get();

        // Get latest blog posts (latest 3 published)
        $posts = BlogPost::published()
            ->with('category', 'user')
            ->latest('published_at')
            ->take(3)
            ->get();

        // return view('home', compact('projects', 'posts'));

        return Inertia::render('Public/Home', [
            'featuredProjects' => $projects,
            'latestPosts' => $posts,
        ]);
    }
}
