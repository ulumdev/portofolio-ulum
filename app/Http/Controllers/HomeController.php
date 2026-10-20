<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Setting;
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

        // Calculate dynamic stats directly from database CRUD
        $settings = Setting::pluck('value', 'key')->toArray();
        $firstExp = Experience::orderBy('start_date', 'asc')->first();
        $calculatedYears = $firstExp ? (abs((int) $firstExp->start_date->diffInYears(now())) . '+') : '3+';
        $yearsExperience = !empty($settings['years_experience']) ? $settings['years_experience'] : $calculatedYears;

        $stats = [
            'years_experience' => $yearsExperience,
            'projects_count' => Project::published()->count(),
            'skills_count' => Skill::count(),
            'posts_count' => BlogPost::published()->count(),
            'experiences_count' => Experience::count(),
        ];

        return Inertia::render('Public/Home', [
            'featuredProjects' => $projects,
            'latestPosts' => $posts,
            'skills' => $skills,
            'stats' => $stats,
        ]);
    }
}
