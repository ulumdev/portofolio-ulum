<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\Education;
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
        
        return Inertia::render('Public/About', [
            'skills' => $skills,
            'settings' => $settings,
            'experiences' => $experiences,
            'educations' => $educations,
        ]);
    }
}
