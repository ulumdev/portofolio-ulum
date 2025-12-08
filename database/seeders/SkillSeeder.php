<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            // Backend
            ['name' => 'PHP', 'icon' => '🐘', 'proficiency' => 'expert', 'category' => 'backend', 'order' => 1],
            ['name' => 'Laravel', 'icon' => '⚡', 'proficiency' => 'expert', 'category' => 'backend', 'order' => 2],
            ['name' => 'Node.js', 'icon' => '🟢', 'proficiency' => 'advanced', 'category' => 'backend', 'order' => 3],
            ['name' => 'Python', 'icon' => '🐍', 'proficiency' => 'intermediate', 'category' => 'backend', 'order' => 4],
            ['name' => 'Express.js', 'icon' => '🚂', 'proficiency' => 'advanced', 'category' => 'backend', 'order' => 5],
            ['name' => 'FastAPI', 'icon' => '⚡', 'proficiency' => 'intermediate', 'category' => 'backend', 'order' => 6],
            ['name' => 'Django', 'icon' => '🎸', 'proficiency' => 'intermediate', 'category' => 'backend', 'order' => 7],
            ['name' => 'REST API', 'icon' => '🔌', 'proficiency' => 'expert', 'category' => 'backend', 'order' => 8],
            ['name' => 'GraphQL', 'icon' => '📊', 'proficiency' => 'intermediate', 'category' => 'backend', 'order' => 9],

            // Frontend
            ['name' => 'HTML', 'icon' => '📄', 'proficiency' => 'expert', 'category' => 'frontend', 'order' => 1],
            ['name' => 'CSS', 'icon' => '🎨', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 2],
            ['name' => 'JavaScript', 'icon' => '⚡', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 3],
            ['name' => 'TypeScript', 'icon' => '📘', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 4],
            ['name' => 'React', 'icon' => '⚛️', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 5],
            ['name' => 'Vue.js', 'icon' => '💚', 'proficiency' => 'intermediate', 'category' => 'frontend', 'order' => 6],
            ['name' => 'Next.js', 'icon' => '▲', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 7],
            ['name' => 'Nuxt.js', 'icon' => '💚', 'proficiency' => 'intermediate', 'category' => 'frontend', 'order' => 8],
            ['name' => 'Tailwind CSS', 'icon' => '🌊', 'proficiency' => 'expert', 'category' => 'frontend', 'order' => 9],
            ['name' => 'Bootstrap', 'icon' => '🅱️', 'proficiency' => 'expert', 'category' => 'frontend', 'order' => 10],
            ['name' => 'Alpine.js', 'icon' => '🏔️', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 11],
            ['name' => 'Livewire', 'icon' => '⚡', 'proficiency' => 'expert', 'category' => 'frontend', 'order' => 12],
            ['name' => 'Inertia.js', 'icon' => '🚀', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 13],
            ['name' => 'SASS/SCSS', 'icon' => '💅', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 14],
            ['name' => 'jQuery', 'icon' => '💵', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 15],

            // Database
            ['name' => 'MySQL', 'icon' => '🐬', 'proficiency' => 'expert', 'category' => 'database', 'order' => 1],
            ['name' => 'PostgreSQL', 'icon' => '🐘', 'proficiency' => 'advanced', 'category' => 'database', 'order' => 2],
            ['name' => 'MongoDB', 'icon' => '🍃', 'proficiency' => 'intermediate', 'category' => 'database', 'order' => 3],
            ['name' => 'Redis', 'icon' => '🔴', 'proficiency' => 'intermediate', 'category' => 'database', 'order' => 4],
            ['name' => 'SQLite', 'icon' => '💾', 'proficiency' => 'advanced', 'category' => 'database', 'order' => 5],
            ['name' => 'MariaDB', 'icon' => '🦭', 'proficiency' => 'advanced', 'category' => 'database', 'order' => 6],
            ['name' => 'Elasticsearch', 'icon' => '🔍', 'proficiency' => 'intermediate', 'category' => 'database', 'order' => 7],

            // Tools
            ['name' => 'Git', 'icon' => '📦', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 1],
            ['name' => 'GitHub', 'icon' => '🐙', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 2],
            ['name' => 'GitLab', 'icon' => '🦊', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 3],
            ['name' => 'Docker', 'icon' => '🐳', 'proficiency' => 'intermediate', 'category' => 'tools', 'order' => 4],
            ['name' => 'VS Code', 'icon' => '💻', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 5],
            ['name' => 'Postman', 'icon' => '📮', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 6],
            ['name' => 'Linux', 'icon' => '🐧', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 7],
            ['name' => 'Nginx', 'icon' => '🌐', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 8],
            ['name' => 'Apache', 'icon' => '🪶', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 9],
            ['name' => 'Composer', 'icon' => '🎼', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 10],
            ['name' => 'NPM', 'icon' => '📦', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 11],
            ['name' => 'Yarn', 'icon' => '📦', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 12],
            ['name' => 'Webpack', 'icon' => '📦', 'proficiency' => 'intermediate', 'category' => 'tools', 'order' => 13],
            ['name' => 'Vite', 'icon' => '⚡', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 14],
            ['name' => 'PHPUnit', 'icon' => '🧪', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 15],
            ['name' => 'Jest', 'icon' => '🃏', 'proficiency' => 'intermediate', 'category' => 'tools', 'order' => 16],
            ['name' => 'Figma', 'icon' => '🎨', 'proficiency' => 'intermediate', 'category' => 'tools', 'order' => 17],
            ['name' => 'Jira', 'icon' => '📋', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 18],
            ['name' => 'Trello', 'icon' => '📌', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 19],
            ['name' => 'Slack', 'icon' => '💬', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 20],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        $this->command->info('✅ Skills seeded successfully! ');
    }
}
