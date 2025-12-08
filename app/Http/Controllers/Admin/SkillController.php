<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    /**
     * Display a listing of skills
     */
    public function index()
    {
        // $skills = Skill::ordered()->paginate(15);
        // return view('admin.skills.index', compact('skills'));
        $skills = Skill::orderBy('category')->orderBy('name')->get();

        return Inertia::render('Admin/Skills/Index', [
            'skills' => $skills,
        ]);
    }

    /**
     * Show the form for creating a new skill
     */
    public function create()
    {
        // return view('admin.skills.create');
        return Inertia::render('Admin/Skills/Create');
    }

    /**
     * Store a newly created skill
     */
    public function store(StoreSkillRequest $request)
    {
        Skill::create($request->validated());

        return redirect()->route('admin.skills.index')
            ->with('success', 'Skill created successfully!');
    }

    /**
     * Display the specified skill
     */
    public function show(Skill $skill)
    {
        $skill->loadCount('projects');
        return view('admin.skills.show', compact('skill'));
    }

    /**
     * Show the form for editing the specified skill
     */
    public function edit(Skill $skill)
    {
        // return view('admin.skills.edit', compact('skill'));
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill,
        ]);
    }

    /**
     * Update the specified skill
     */
    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $skill->update($request->validated());

        return redirect()->route('admin.skills.index')
            ->with('success', 'Skill updated successfully!');
    }

    /**
     * Remove the specified skill
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();

        return redirect()->route('admin.skills.index')
            ->with('success', 'Skill deleted successfully!');
    }
}
