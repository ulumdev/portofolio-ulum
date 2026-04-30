<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use App\Models\Skill;
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
     * Store a newly created skill
     */
    public function store(StoreSkillRequest $request)
    {
        Skill::create($request->validated());

        return redirect()->route('admin.skills.index')
            ->with('success', 'Skill created successfully!');
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
