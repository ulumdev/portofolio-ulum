<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ExperienceController extends Controller
{
    public function index(): Response
    {
        $experiences = Experience::ordered()->get();

        return Inertia::render('Admin/Experiences/Index', [
            'experiences' => $experiences,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Experiences/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'company_url' => 'nullable|url',
            'location' => 'nullable|string|max:255',
            'employment_type' => 'required|in:full-time,part-time,contract,freelance,internship',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'is_current' => 'boolean',
            'description' => 'required|string',
            'responsibilities' => 'nullable|array',
            'technologies' => 'nullable|array',
            'company_logo' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
        ]);

        // Handle is_current
        if ($request->has('is_current') && $request->is_current) {
            $validated['end_date'] = null;
        }

        // Handle company logo upload
        if ($request->hasFile('company_logo')) {
            $validated['company_logo'] = $request->file('company_logo')->store('experiences', 'public');
        }

        Experience::create($validated);

        return redirect()->route('admin.experiences.index')
            ->with('success', 'Experience created successfully.');
    }

    public function edit(Experience $experience): Response
    {
        return Inertia::render('Admin/Experiences/Edit', [
            'experience' => $experience,
        ]);
    }

    public function update(Request $request, Experience $experience): RedirectResponse
    {
        $validated = $request->validate([
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'company_url' => 'nullable|url',
            'location' => 'nullable|string|max:255',
            'employment_type' => 'required|in:full-time,part-time,contract,freelance,internship',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after: start_date',
            'is_current' => 'boolean',
            'description' => 'required|string',
            'responsibilities' => 'nullable|array',
            'technologies' => 'nullable|array',
            'company_logo' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
        ]);

        // Handle is_current
        if ($request->has('is_current') && $request->is_current) {
            $validated['end_date'] = null;
        }

        // Handle company logo upload
        if ($request->hasFile('company_logo')) {
            // Delete old logo
            if ($experience->company_logo) {
                Storage::disk('public')->delete($experience->company_logo);
            }
            $validated['company_logo'] = $request->file('company_logo')->store('experiences', 'public');
        }

        $experience->update($validated);

        return redirect()->route('admin.experiences.index')
            ->with('success', 'Experience updated successfully.');
    }

    public function destroy(Experience $experience): RedirectResponse
    {
        if ($experience->company_logo) {
            Storage::disk('public')->delete($experience->company_logo);
        }

        $experience->delete();

        return redirect()->route('admin.experiences.index')
            ->with('success', 'Experience deleted successfully.');
    }
}
