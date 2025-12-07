<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\Skill;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    /**
     * Display about page
     */
    public function index()
    {
        $bio = Setting::get('bio', '');
        $profilePhoto = Setting::get('profile_photo', '');

        // Get skills grouped by category
        $skills = Skill::ordered()->get()->groupBy('category');

        return view('about', compact('bio', 'profilePhoto', 'skills'));
    }
}
