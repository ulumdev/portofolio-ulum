<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Web Development',
                'slug' => 'web-development',
                'description' => 'Articles about web development, frameworks, and best practices.',
            ],
            [
                'name' => 'Mobile Development',
                'slug' => 'mobile-development',
                'description' => 'Mobile app development tutorials and tips.',
            ],
            [
                'name' => 'Tutorial',
                'slug' => 'tutorial',
                'description' => 'Step-by-step tutorials for various technologies.',
            ],
            [
                'name' => 'News & Updates',
                'slug' => 'news-updates',
                'description' => 'Latest news and updates in tech world.',
            ],
            [
                'name' => 'Tips & Tricks',
                'slug' => 'tips-tricks',
                'description' => 'Useful tips and tricks for developers.',
            ],
            [
                'name' => 'DevOps',
                'slug' => 'devops',
                'description' => 'DevOps practices, CI/CD, and deployment strategies.',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        $this->command->info('✅ Categories seeded successfully!');
    }
}
