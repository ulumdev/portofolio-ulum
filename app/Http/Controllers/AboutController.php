<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Education;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display about page
     */
    public function index()
    {
        $skills = Skill::orderBy('category')
            ->orderBy('proficiency', 'desc')
            ->get();

        $experiences = Experience::ordered()->get();
        
        $educations = Education::ordered()->get();

        // ⭐ Ambil semua settings
        $settings = Setting::pluck('value', 'key')->toArray();

        // Calculate dynamic stats directly from database CRUD
        $firstExp = Experience::orderBy('start_date', 'asc')->first();
        $yearsExperience = $firstExp ? (max(1, now()->diffInYears($firstExp->start_date)) . '+') : '3+';

        $stats = [
            'years_experience' => $yearsExperience,
            'projects_count' => Project::published()->count(),
            'skills_count' => $skills->count(),
            'experiences_count' => $experiences->count(),
        ];
        
        return Inertia::render('Public/About', [
            'skills' => $skills,
            'settings' => $settings,
            'experiences' => $experiences,
            'educations' => $educations,
            'stats' => $stats,
        ]);
    }
}
