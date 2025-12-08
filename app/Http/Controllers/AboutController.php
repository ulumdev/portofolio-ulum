<?php

namespace App\Http\Controllers;

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
        // $bio = Setting::get('bio', '');
        // $profilePhoto = Setting::get('profile_photo', '');

        // // Get skills grouped by category
        // $skills = Skill::ordered()->get()->groupBy('category');

        // return view('about', compact('bio', 'profilePhoto', 'skills'));

        $skills = Skill::orderBy('category')
            ->orderBy('proficiency', 'desc')
            ->get();

        $settings = [
            'profile_photo' => setting('profile_photo'),
            'site_description' => setting('site_description'),
        ];

        return Inertia::render('Public/About', [
            'skills' => $skills,
            'settings' => $settings,
        ]);
    }
}
