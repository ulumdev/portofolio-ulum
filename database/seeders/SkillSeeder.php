<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the Database seeds.
     */
    public function run(): void
    {
        $skills = [
            // Backend
            ['name' => 'PHP', 'icon' => '🐘', 'proficiency' => 'expert', 'category' => 'Backend', 'order' => 1],
            ['name' => 'Laravel', 'icon' => '⚡', 'proficiency' => 'expert', 'category' => 'Backend', 'order' => 2],
            ['name' => 'Node.js', 'icon' => '🟢', 'proficiency' => 'advanced', 'category' => 'Backend', 'order' => 3],
            ['name' => 'Python', 'icon' => '🐍', 'proficiency' => 'intermediate', 'category' => 'Backend', 'order' => 4],
            ['name' => 'Express.js', 'icon' => '🚂', 'proficiency' => 'advanced', 'category' => 'Backend', 'order' => 5],
            ['name' => 'FastAPI', 'icon' => '⚡', 'proficiency' => 'intermediate', 'category' => 'Backend', 'order' => 6],
            ['name' => 'Django', 'icon' => '🎸', 'proficiency' => 'intermediate', 'category' => 'Backend', 'order' => 7],
            ['name' => 'REST API', 'icon' => '🔌', 'proficiency' => 'expert', 'category' => 'Backend', 'order' => 8],
            ['name' => 'GraphQL', 'icon' => '📊', 'proficiency' => 'intermediate', 'category' => 'Backend', 'order' => 9],

            // Frontend
            ['name' => 'HTML', 'icon' => '📄', 'proficiency' => 'expert', 'category' => 'Frontend', 'order' => 1],
            ['name' => 'CSS', 'icon' => '🎨', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 2],
            ['name' => 'JavaScript', 'icon' => '⚡', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 3],
            ['name' => 'TypeScript', 'icon' => '📘', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 4],
            ['name' => 'React', 'icon' => '⚛️', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 5],
            ['name' => 'Vue.js', 'icon' => '💚', 'proficiency' => 'intermediate', 'category' => 'Frontend', 'order' => 6],
            ['name' => 'Next.js', 'icon' => '▲', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 7],
            ['name' => 'Nuxt.js', 'icon' => '💚', 'proficiency' => 'intermediate', 'category' => 'Frontend', 'order' => 8],
            ['name' => 'Tailwind CSS', 'icon' => '🌊', 'proficiency' => 'expert', 'category' => 'Frontend', 'order' => 9],
            ['name' => 'Bootstrap', 'icon' => '🅱️', 'proficiency' => 'expert', 'category' => 'Frontend', 'order' => 10],
            ['name' => 'Alpine.js', 'icon' => '🏔️', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 11],
            ['name' => 'Livewire', 'icon' => '⚡', 'proficiency' => 'expert', 'category' => 'Frontend', 'order' => 12],
            ['name' => 'Inertia.js', 'icon' => '🚀', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 13],
            ['name' => 'SASS/SCSS', 'icon' => '💅', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 14],
            ['name' => 'jQuery', 'icon' => '💵', 'proficiency' => 'advanced', 'category' => 'Frontend', 'order' => 15],

            // Database
            ['name' => 'MySQL', 'icon' => '🐬', 'proficiency' => 'expert', 'category' => 'Database', 'order' => 1],
            ['name' => 'PostgreSQL', 'icon' => '🐘', 'proficiency' => 'advanced', 'category' => 'Database', 'order' => 2],
            ['name' => 'MongoDB', 'icon' => '🍃', 'proficiency' => 'intermediate', 'category' => 'Database', 'order' => 3],
            ['name' => 'Redis', 'icon' => '🔴', 'proficiency' => 'intermediate', 'category' => 'Database', 'order' => 4],
            ['name' => 'SQLite', 'icon' => '💾', 'proficiency' => 'advanced', 'category' => 'Database', 'order' => 5],
            ['name' => 'MariaDB', 'icon' => '🦭', 'proficiency' => 'advanced', 'category' => 'Database', 'order' => 6],
            ['name' => 'Elasticsearch', 'icon' => '🔍', 'proficiency' => 'intermediate', 'category' => 'Database', 'order' => 7],

            // Tools
            ['name' => 'Git', 'icon' => '📦', 'proficiency' => 'expert', 'category' => 'Tools', 'order' => 1],
            ['name' => 'GitHub', 'icon' => '🐙', 'proficiency' => 'expert', 'category' => 'Tools', 'order' => 2],
            ['name' => 'GitLab', 'icon' => '🦊', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 3],
            ['name' => 'Docker', 'icon' => '🐳', 'proficiency' => 'intermediate', 'category' => 'Tools', 'order' => 4],
            ['name' => 'VS Code', 'icon' => '💻', 'proficiency' => 'expert', 'category' => 'Tools', 'order' => 5],
            ['name' => 'Postman', 'icon' => '📮', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 6],
            ['name' => 'Linux', 'icon' => '🐧', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 7],
            ['name' => 'Nginx', 'icon' => '🌐', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 8],
            ['name' => 'Apache', 'icon' => '🪶', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 9],
            ['name' => 'Composer', 'icon' => '🎼', 'proficiency' => 'expert', 'category' => 'Tools', 'order' => 10],
            ['name' => 'NPM', 'icon' => '📦', 'proficiency' => 'expert', 'category' => 'Tools', 'order' => 11],
            ['name' => 'Yarn', 'icon' => '📦', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 12],
            ['name' => 'Webpack', 'icon' => '📦', 'proficiency' => 'intermediate', 'category' => 'Tools', 'order' => 13],
            ['name' => 'Vite', 'icon' => '⚡', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 14],
            ['name' => 'PHPUnit', 'icon' => '🧪', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 15],
            ['name' => 'Jest', 'icon' => '🃏', 'proficiency' => 'intermediate', 'category' => 'Tools', 'order' => 16],
            ['name' => 'Figma', 'icon' => '🎨', 'proficiency' => 'intermediate', 'category' => 'Tools', 'order' => 17],
            ['name' => 'Jira', 'icon' => '📋', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 18],
            ['name' => 'Trello', 'icon' => '📌', 'proficiency' => 'advanced', 'category' => 'Tools', 'order' => 19],
            ['name' => 'Slack', 'icon' => '💬', 'proficiency' => 'expert', 'category' => 'Tools', 'order' => 20],

            // Other
            ['name' => 'RESTful API Design', 'icon' => '🔗', 'proficiency' => 'expert', 'category' => 'Other', 'order' => 1],
            ['name' => 'API Development', 'icon' => '🔌', 'proficiency' => 'expert', 'category' => 'Other', 'order' => 2],
            ['name' => 'Agile/Scrum', 'icon' => '🏃', 'proficiency' => 'advanced', 'category' => 'Other', 'order' => 3],
            ['name' => 'CI/CD', 'icon' => '🔄', 'proficiency' => 'advanced', 'category' => 'Other', 'order' => 4],
            ['name' => 'Microservices', 'icon' => '🔧', 'proficiency' => 'intermediate', 'category' => 'Other', 'order' => 5],
            ['name' => 'WebSocket', 'icon' => '🔌', 'proficiency' => 'intermediate', 'category' => 'Other', 'order' => 6],
            ['name' => 'OAuth', 'icon' => '🔐', 'proficiency' => 'advanced', 'category' => 'Other', 'order' => 7],
            ['name' => 'JWT', 'icon' => '🎫', 'proficiency' => 'advanced', 'category' => 'Other', 'order' => 8],
            ['name' => 'Unit Testing', 'icon' => '🧪', 'proficiency' => 'advanced', 'category' => 'Other', 'order' => 9],
            ['name' => 'TDD', 'icon' => '✅', 'proficiency' => 'intermediate', 'category' => 'Other', 'order' => 10],
            ['name' => 'OOP', 'icon' => '🎯', 'proficiency' => 'expert', 'category' => 'Other', 'order' => 11],
            ['name' => 'Design Patterns', 'icon' => '🏗️', 'proficiency' => 'advanced', 'category' => 'Other', 'order' => 12],
            ['name' => 'MVC Architecture', 'icon' => '🏛️', 'proficiency' => 'expert', 'category' => 'Other', 'order' => 13],
            ['name' => 'SOLID Principles', 'icon' => '💎', 'proficiency' => 'advanced', 'category' => 'Other', 'order' => 14],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        $this->command->info('✅ Skills seeded successfully! ');
    }
}
