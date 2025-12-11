<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortofolioController extends Controller
{
    /**
     * Display list of projects
     */
    // public function index(Request $request)
    // {
    //     $query = Project::published()->with('skills');

    //     // Filter by skill
    //     if ($request->has('skill') && $request->skill != '') {
    //         $query->whereHas('skills', function ($q) use ($request) {
    //             $q->where('skills.id', $request->skill);
    //         });
    //     }

    //     $projects = $query->latest('published_at')->get();
    //     // $skills = Skill::ordered()->get();
    //     $skills = Skill::orderBy('category')->orderBy('name')->get();

    //     // return view('portofolio.index', compact('projects', 'skills'));
    //     return Inertia::render('Public/Portofolio/Index', [
    //         'projects' => $projects,
    //         'skills' => $skills,
    //         'selectedSkill' => $request->skill,
    //     ]);
    // }
    public function index(Request $request)
    {
        $query = Project::with(['skills'])
            ->where('status', 'published')
            ->latest();

        // Filter by skill if provided
        if ($request->has('skill') && $request->skill !== 'all') {
            $query->whereHas('skills', function ($q) use ($request) {
                $q->where('name', $request->skill);
            });
        }

        // Paginate results - 9 items per page (3x3 grid)
        $projects = $query->paginate(6)->withQueryString();

        // Get all skills for filter
        $skills = Skill::orderBy('category')
            ->orderBy('name')
            ->get();

        return Inertia::render('Public/Portofolio/Index', [
            'projects' => $projects,
            'skills' => $skills,
            'selectedSkill' => $request->skill,
            'filters' => [
                'skill' => $request->skill ?? null,
            ],
        ]);
    }

    /**
     * Display single project
     */
    public function show(Project $project)
    {
        // // Only show published projects
        // if ($project->status !== 'published') {
        //     abort(404);
        // }

        // $project->load('skills', 'user');

        // // Get related projects (same skills)
        // $relatedProjects = Project::published()
        //     ->where('id', '!=', $project->id)
        //     ->whereHas('skills', function($q) use ($project) {
        //         $q->whereIn('skills.id', $project->skills->pluck('id'));
        //     })
        //     ->with('skills')
        //     ->take(3)
        //     ->get();

        // return view('portofolio.show', compact('project', 'relatedProjects'));

        // $project->load('skills');

        // return Inertia::render('Public/Portofolio/Show', [
        //     'project' => $project,
        // ]);

        $project = Project::with(['skills'])
            ->where('slug', $project->slug)
            ->where('status', 'published')
            ->firstOrFail();

        // Increment views
        // $project->increment('views_count');

        // Get related projects (same skills)
        $relatedProjects = Project::with(['skills'])
            ->where('id', '!=', $project->id)
            ->where('status', 'published')
            ->whereHas('skills', function ($query) use ($project) {
                $query->whereIn('skills.id', $project->skills->pluck('id'));
            })
            ->take(3)
            ->get();

        return Inertia::render('Public/Portofolio/Show', [
            'project' => $project,
            'relatedProjects' => $relatedProjects,
        ]);
    }
}
