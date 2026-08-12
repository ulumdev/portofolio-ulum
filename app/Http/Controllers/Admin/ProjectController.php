<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of projects
     */
    public function index(Request $request)
    {
        $query = Project::with('user', 'skills');

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Filter by status
        if ($request->has('status') && $request->status != '') {
            $query->where('status', $request->status);
        }

        $projects = $query->latest()->paginate(5);

        // return view('admin.projects.index', compact('projects'));
        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    /**
     * Show the form for creating a new project
     */
    public function create()
    {
        // $skills = Skill::ordered()->get();
        // return view('admin.projects.create', compact('skills'));

        $skills = Skill::ordered()->get();

        return Inertia::render('Admin/Projects/Create', [
            'skills' => $skills,
        ]);
    }

    /**
     * Store a newly created project
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        // $data['user_id'] = auth()->id();
        $data['user_id'] = Auth::id();

        // Handle image upload
        if ($request->hasFile('featured_image')) {
            $data['featured_image'] = $request->file('featured_image')
                ->store('projects', 'public');
        }

        // Set published_at if status is published
        if ($data['status'] === 'published' && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        if (empty($data['created_at'])) {
            unset($data['created_at']);
        }

        $project = Project::create($data);

        // Sync skills
        if ($request->has('skills')) {
            $project->skills()->sync($request->skills);
        }

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project created successfully! ');
    }

    /**
     * Show the form for editing the specified project
     */
    public function edit(Project $project)
    {
        $skills = Skill::orderBy('category')->orderBy('name')->get();
        $project->load('skills');

        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
            'skills' => $skills,
        ]);
    }

    /**
     * Update the specified project
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();

        // Handle image upload
        if ($request->hasFile('featured_image')) {
            // Delete old image
            if ($project->featured_image) {
                Storage::disk('public')->delete($project->featured_image);
            }

            $data['featured_image'] = $request->file('featured_image')
                ->store('projects', 'public');
        }

        // Set published_at if status is published
        if ($data['status'] === 'published' && empty($project->published_at)) {
            $data['published_at'] = now();
        }

        if (empty($data['created_at'])) {
            unset($data['created_at']);
        }

        $project->update($data);

        // Sync skills
        if ($request->has('skills')) {
            $project->skills()->sync($request->skills);
        } else {
            $project->skills()->detach();
        }

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project updated successfully!');
    }

    /**
     * Remove the specified project
     */
    public function destroy(Project $project)
    {
        // Delete image
        if ($project->featured_image) {
            Storage::disk('public')->delete($project->featured_image);
        }

        $project->delete();

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project deleted successfully!');
    }
}
