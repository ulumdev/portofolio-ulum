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
            [
            'name' => 'UI/UX Design',
            'slug' => 'ui-ux-design',
            'description' => 'User interface and user experience design principles.',
            ],
            [
            'name' => 'Database',
            'slug' => 'database',
            'description' => 'Database design, optimization, and management.',
            ],
            [
            'name' => 'Cloud Computing',
            'slug' => 'cloud-computing',
            'description' => 'Cloud services, architecture, and solutions.',
            ],
            [
            'name' => 'Artificial Intelligence',
            'slug' => 'artificial-intelligence',
            'description' => 'AI, machine learning, and deep learning topics.',
            ],
            [
            'name' => 'Security',
            'slug' => 'security',
            'description' => 'Cybersecurity, best practices, and secure coding.',
            ],
            [
            'name' => 'Data Science',
            'slug' => 'data-science',
            'description' => 'Data analysis, visualization, and analytics.',
            ],
            [
            'name' => 'API Development',
            'slug' => 'api-development',
            'description' => 'RESTful APIs, GraphQL, and API best practices.',
            ],
            [
            'name' => 'Programming Languages',
            'slug' => 'programming-languages',
            'description' => 'Deep dives into various programming languages.',
            ],
            [
            'name' => 'Software Architecture',
            'slug' => 'software-architecture',
            'description' => 'Design patterns, architecture, and system design.',
            ],
            [
            'name' => 'Testing & QA',
            'slug' => 'testing-qa',
            'description' => 'Software testing, quality assurance, and automation.',
            ],
            [
            'name' => 'Performance Optimization',
            'slug' => 'performance-optimization',
            'description' => 'Code optimization and performance tuning techniques.',
            ],
            [
            'name' => 'Open Source',
            'slug' => 'open-source',
            'description' => 'Open source projects, contributions, and community.',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        $this->command->info('✅ Categories seeded successfully!');
    }
}
