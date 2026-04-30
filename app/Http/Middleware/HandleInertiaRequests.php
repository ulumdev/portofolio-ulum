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
            ],
        ]);
    }
}
