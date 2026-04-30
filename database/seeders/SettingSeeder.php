<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            'site_name' => 'Portofolio Ulum',
            'site_tagline' => 'Full Stack Developer building modern web experiences',
            'site_description' => 'I build scalable web applications with Laravel, React, and thoughtful user experience in mind.',
            'bio' => "Hello! I'm a passionate Full Stack Developer with expertise in building modern web applications using Laravel, React, and Vue.js. I love creating elegant solutions to complex problems and constantly learning new technologies.\n\nWith several years of experience in web development, I specialize in creating responsive, user-friendly applications that deliver exceptional user experiences. I'm proficient in both frontend and backend development, with a strong focus on writing clean, maintainable code.\n\nWhen I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies and frameworks.",
            'github_url' => 'https://github.com/ulumdev',
            'linkedin_url' => 'https://www.linkedin.com/in/moh-bahrul-ulum-463177355/',
            'twitter_url' => 'https://twitter.com/yourhandle',
            'instagram_url' => 'https://instagram.com/yourhandle',
            'email' => 'mohbahrululum150@gmail.com',
            'address' => 'Mojokerto, Indonesia',
            'phone' => '+62 812-3456-7890',
            'projects_completed' => '24',
            'years_experience' => '3+',
            'happy_clients' => '18',
            'privacy_policy_url' => '/privacy-policy',
            'terms_of_service_url' => '/terms-of-service',
        ];

        foreach ($settings as $key => $value) {
            Setting::create([
                'key' => $key,
                'value' => $value,
            ]);
        }

        $this->command->info('✅ Settings seeded successfully!');
    }
}
