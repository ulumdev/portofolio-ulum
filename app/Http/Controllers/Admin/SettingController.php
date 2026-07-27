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
            'instagram_url' => Setting::get('instagram_url', ''),
            'email' => Setting::get('email', ''),
            'phone' => Setting::get('phone', ''),
            'address' => Setting::get('address', ''),
            'cv_file' => Setting::get('cv_file', ''),
            'privacy_policy_url' => Setting::get('privacy_policy_url', ''),
            'terms_of_service_url' => Setting::get('terms_of_service_url', ''),
            'home_hero_title' => Setting::get('home_hero_title', "Hi, I'm Moh. Bahrul 'Ulum"),
            'home_hero_gradient' => Setting::get('home_hero_gradient', "Full Stack Developer"),
            'home_hero_subtitle' => Setting::get('home_hero_subtitle', "Crafting beautiful digital experiences with robust backend architectures. Focused on creating user-centric solutions that perform at scale."),
            'about_hero_title' => Setting::get('about_hero_title', "I build digital experiences that matter."),
            'about_hire_status' => Setting::get('about_hire_status', "Available for hire"),
            'portfolio_hero_title' => Setting::get('portfolio_hero_title', "Explore My"),
            'portfolio_hero_gradient' => Setting::get('portfolio_hero_gradient', "Portofolio"),
            'portfolio_hero_subtitle' => Setting::get('portfolio_hero_subtitle', "Showcasing expertise across various technologies and domains"),
            'blog_hero_title' => Setting::get('blog_hero_title', "Thoughts &"),
            'blog_hero_gradient' => Setting::get('blog_hero_gradient', "Insights"),
            'blog_hero_subtitle' => Setting::get('blog_hero_subtitle', "Articles, tutorials, and thoughts on web development, design, and technology"),
            'contact_hero_title' => Setting::get('contact_hero_title', "Get In"),
            'contact_hero_gradient' => Setting::get('contact_hero_gradient', "Touch"),
            'contact_hero_subtitle' => Setting::get('contact_hero_subtitle', "Have a project in mind? Let's discuss how I can help bring your ideas to life with clean code and modern design."),
            'contact_freelance_status' => Setting::get('contact_freelance_status', "AVAILABLE FOR FREELANCE"),
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
            'instagram_url' => 'nullable|url',
            'email' => 'nullable|email',
            'phone' => 'nullable|string|max:50',
            'address' => 'nullable|string|max:255',
            'cv_file' => 'nullable|mimes:pdf|max:5120',
            'privacy_policy_url' => 'nullable|string',
            'terms_of_service_url' => 'nullable|string',
            'home_hero_title' => 'nullable|string',
            'home_hero_gradient' => 'nullable|string',
            'home_hero_subtitle' => 'nullable|string',
            'about_hero_title' => 'nullable|string',
            'about_hire_status' => 'nullable|string',
            'portfolio_hero_title' => 'nullable|string',
            'portfolio_hero_gradient' => 'nullable|string',
            'portfolio_hero_subtitle' => 'nullable|string',
            'blog_hero_title' => 'nullable|string',
            'blog_hero_gradient' => 'nullable|string',
            'blog_hero_subtitle' => 'nullable|string',
            'contact_hero_title' => 'nullable|string',
            'contact_hero_gradient' => 'nullable|string',
            'contact_hero_subtitle' => 'nullable|string',
            'contact_freelance_status' => 'nullable|string',
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
        Setting::set('instagram_url', $request->instagram_url);
        Setting::set('email', $request->email);
        Setting::set('phone', $request->phone);
        Setting::set('address', $request->address);
        Setting::set('privacy_policy_url', $request->privacy_policy_url);
        Setting::set('terms_of_service_url', $request->terms_of_service_url);
        Setting::set('home_hero_title', $request->home_hero_title);
        Setting::set('home_hero_gradient', $request->home_hero_gradient);
        Setting::set('home_hero_subtitle', $request->home_hero_subtitle);
        Setting::set('about_hero_title', $request->about_hero_title);
        Setting::set('about_hire_status', $request->about_hire_status);
        Setting::set('portfolio_hero_title', $request->portfolio_hero_title);
        Setting::set('portfolio_hero_gradient', $request->portfolio_hero_gradient);
        Setting::set('portfolio_hero_subtitle', $request->portfolio_hero_subtitle);
        Setting::set('blog_hero_title', $request->blog_hero_title);
        Setting::set('blog_hero_gradient', $request->blog_hero_gradient);
        Setting::set('blog_hero_subtitle', $request->blog_hero_subtitle);
        Setting::set('contact_hero_title', $request->contact_hero_title);
        Setting::set('contact_hero_gradient', $request->contact_hero_gradient);
        Setting::set('contact_hero_subtitle', $request->contact_hero_subtitle);
        Setting::set('contact_freelance_status', $request->contact_freelance_status);

        // Handle CV upload
        if ($request->hasFile('cv_file')) {
            // Delete old CV
            $oldCv = Setting::get('cv_file');
            if ($oldCv) {
                Storage::disk('public')->delete($oldCv);
            }

            $path = $request->file('cv_file')->store('settings', 'public');
            Setting::set('cv_file', $path);
        }

        return redirect()->route('admin.settings.index')
            ->with('success', 'Settings updated successfully!');
    }
}
