<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;

class PortofolioController extends Controller
{
    /**
     * Display list of projects
     */
    public function index(Request $request)
    {
        $query = Project::published()->with('skills');

        // Filter by skill
        if ($request->has('skill') && $request->skill != '') {
            $query->whereHas('skills', function($q) use ($request) {
                $q->where('skills.id', $request->skill);
            });
        }

        $projects = $query->ordered()->paginate(9);
        $skills = Skill::ordered()->get();

        return view('portofolio.index', compact('projects', 'skills'));
    }

    /**
     * Display single project
     */
    public function show(Project $project)
    {
        // Only show published projects
        if ($project->status !== 'published') {
            abort(404);
        }

        $project->load('skills', 'user');

        // Get related projects (same skills)
        $relatedProjects = Project::published()
            ->where('id', '!=', $project->id)
            ->whereHas('skills', function($q) use ($project) {
                $q->whereIn('skills.id', $project->skills->pluck('id'));
            })
            ->with('skills')
            ->take(3)
            ->get();

        return view('portofolio.show', compact('project', 'relatedProjects'));
    }
}
