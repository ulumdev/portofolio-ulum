<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display homepage
     */
    public function index()
    {
        // Get featured projects (latest 3 published)
        $projects = Project::published()
            ->with('skills')
            ->ordered()
            ->take(3)
            ->get();

        // Get latest blog posts (latest 3 published)
        $posts = BlogPost::published()
            ->with('category', 'user')
            ->latest('published_at')
            ->take(3)
            ->get();

        // Get skills for tech ticker/showcase
        $skills = Skill::ordered()->get();

        return Inertia::render('Public/Home', [
            'featuredProjects' => $projects,
            'latestPosts' => $posts,
            'skills' => $skills,
        ]);
    }
}
