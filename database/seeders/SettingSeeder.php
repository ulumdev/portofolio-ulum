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
            'bio' => "Hello! I'm a passionate Full Stack Developer with expertise in building modern web applications using Laravel, React, and Vue.js. I love creating elegant solutions to complex problems and constantly learning new technologies.\n\nWith several years of experience in web development, I specialize in creating responsive, user-friendly applications that deliver exceptional user experiences. I'm proficient in both frontend and backend development, with a strong focus on writing clean, maintainable code.\n\nWhen I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies and frameworks.",
            'github_url' => 'https://github.com/ulumdev',
            'linkedin_url' => 'https://www.linkedin.com/in/moh-bahrul-ulum-463177355/',
            'twitter_url' => 'https://twitter.com/yourhandle',
            'email' => 'mohbahrululum150@gmail.com',
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
