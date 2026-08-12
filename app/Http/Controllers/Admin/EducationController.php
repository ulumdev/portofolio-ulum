<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Education;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class EducationController extends Controller
{
    public function index(): Response
    {
        $educations = Education::ordered()->get();

        return Inertia::render('Admin/Educations/Index', [
            'educations' => $educations,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Educations/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'is_current' => 'boolean',
            'grade' => 'nullable|string|max:255',
            'activities' => 'nullable|string',
            'description' => 'nullable|string',
            'institution_logo' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
        ]);

        // Handle is_current
        if ($request->has('is_current') && $request->is_current) {
            $validated['end_date'] = null;
        }

        // Handle institution logo upload
        if ($request->hasFile('institution_logo')) {
            $validated['institution_logo'] = $request->file('institution_logo')->store('educations', 'public');
        }

        Education::create($validated);

        return redirect()->route('admin.educations.index')
            ->with('success', 'Education created successfully.');
    }

    public function edit(Education $education): Response
    {
        return Inertia::render('Admin/Educations/Edit', [
            'education' => $education,
        ]);
    }

    public function update(Request $request, Education $education): RedirectResponse
    {
        $validated = $request->validate([
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'is_current' => 'boolean',
            'grade' => 'nullable|string|max:255',
            'activities' => 'nullable|string',
            'description' => 'nullable|string',
            'institution_logo' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
        ]);

        // Handle is_current
        if ($request->has('is_current') && $request->is_current) {
            $validated['end_date'] = null;
        }

        // Handle institution logo upload
        if ($request->hasFile('institution_logo')) {
            // Delete old logo
            if ($education->institution_logo) {
                Storage::disk('public')->delete($education->institution_logo);
            }
            $validated['institution_logo'] = $request->file('institution_logo')->store('educations', 'public');
        }

        $education->update($validated);

        return redirect()->route('admin.educations.index')
            ->with('success', 'Education updated successfully.');
    }

    public function destroy(Education $education): RedirectResponse
    {
        if ($education->institution_logo) {
            Storage::disk('public')->delete($education->institution_logo);
        }

        $education->delete();

        return redirect()->route('admin.educations.index')
            ->with('success', 'Education deleted successfully.');
    }
}
