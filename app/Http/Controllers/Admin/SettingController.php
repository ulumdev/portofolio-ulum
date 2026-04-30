<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Display settings form
     */
    public function index()
    {
        $settings = [
            'site_name' => Setting::get('site_name', 'Portfolio Ulum'),
            'site_tagline' => Setting::get('site_tagline', ''),
            'site_description' => Setting::get('site_description', ''),
            'bio' => Setting::get('bio', ''),
            'profile_photo' => Setting::get('profile_photo', ''),
            'github_url' => Setting::get('github_url', ''),
            'linkedin_url' => Setting::get('linkedin_url', ''),
            'twitter_url' => Setting::get('twitter_url', ''),
            'email' => Setting::get('email', ''),
        ];

        // return view('admin.settings.index', compact('settings'));
        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
        ]);
    }

    /**
     * Update settings
     */
    public function update(Request $request)
    {
        $request->validate([
            'site_name' => 'required|string|max:255',
            'site_tagline' => 'nullable|string|max:255',
            'site_description' => 'nullable|string',
            'bio' => 'nullable|string',
            'profile_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'github_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
            'twitter_url' => 'nullable|url',
            'email' => 'nullable|email',
        ]);

        // Update site name
        Setting::set('site_name', $request->site_name);
        Setting::set('site_tagline', $request->site_tagline);
        Setting::set('site_description', $request->site_description);

        // Update bio
        Setting::set('bio', $request->bio);

        // Handle profile photo upload
        if ($request->hasFile('profile_photo')) {
            // Delete old photo
            $oldPhoto = Setting::get('profile_photo');
            if ($oldPhoto) {
                Storage::disk('public')->delete($oldPhoto);
            }

            $path = $request->file('profile_photo')->store('settings', 'public');
            Setting::set('profile_photo', $path);
        }

        // Update social media links
        Setting::set('github_url', $request->github_url);
        Setting::set('linkedin_url', $request->linkedin_url);
        Setting::set('twitter_url', $request->twitter_url);
        Setting::set('email', $request->email);

        return redirect()->route('admin.settings.index')
            ->with('success', 'Settings updated successfully!');
    }
}
