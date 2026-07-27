<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'role' => $request->user()->role,
                ] : null,
            ],
            'flash' => [
                'success' => fn() => $request->session()->get('success'),
                'error' => fn() => $request->session()->get('error'),
                'warning' => fn() => $request->session()->get('warning'),
                'info' => fn() => $request->session()->get('info'),
            ],
            'settings' => [
                'site_name' => Setting::get('site_name', config('app.name')),
                'site_tagline' => Setting::get('site_tagline', ''),
                'site_description' => Setting::get('site_description', ''),
                'bio' => Setting::get('bio', ''),
                'profile_photo' => Setting::get('profile_photo', ''),
                'github_url' => Setting::get('github_url', ''),
                'linkedin_url' => Setting::get('linkedin_url', ''),
                'twitter_url' => Setting::get('twitter_url', ''),
                'instagram_url' => Setting::get('instagram_url', ''),
                'email' => Setting::get('email', ''),
                'address' => Setting::get('address', ''),
                'phone' => Setting::get('phone', ''),
                'projects_completed' => Setting::get('projects_completed', ''),
                'years_experience' => Setting::get('years_experience', ''),
                'happy_clients' => Setting::get('happy_clients', ''),
                'privacy_policy_url' => Setting::get('privacy_policy_url', ''),
                'terms_of_service_url' => Setting::get('terms_of_service_url', ''),
                'cv_file' => Setting::get('cv_file', ''),
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
            ],
        ]);
    }
}
