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

            // Frontend
            ['name' => 'HTML', 'icon' => '📄', 'proficiency' => 'expert', 'category' => 'frontend', 'order' => 1],
            ['name' => 'CSS', 'icon' => '🎨', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 2],
            ['name' => 'JavaScript', 'icon' => '⚡', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 3],
            ['name' => 'React', 'icon' => '⚛️', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 4],
            ['name' => 'Vue.js', 'icon' => '💚', 'proficiency' => 'intermediate', 'category' => 'frontend', 'order' => 5],
            ['name' => 'Tailwind CSS', 'icon' => '🌊', 'proficiency' => 'expert', 'category' => 'frontend', 'order' => 6],
            ['name' => 'Alpine.js', 'icon' => '🏔️', 'proficiency' => 'advanced', 'category' => 'frontend', 'order' => 7],

            // Database
            ['name' => 'MySQL', 'icon' => '🐬', 'proficiency' => 'expert', 'category' => 'database', 'order' => 1],
            ['name' => 'PostgreSQL', 'icon' => '🐘', 'proficiency' => 'advanced', 'category' => 'database', 'order' => 2],
            ['name' => 'MongoDB', 'icon' => '🍃', 'proficiency' => 'intermediate', 'category' => 'database', 'order' => 3],
            ['name' => 'Redis', 'icon' => '🔴', 'proficiency' => 'intermediate', 'category' => 'database', 'order' => 4],

            // Tools
            ['name' => 'Git', 'icon' => '📦', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 1],
            ['name' => 'GitHub', 'icon' => '🐙', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 2],
            ['name' => 'Docker', 'icon' => '🐳', 'proficiency' => 'intermediate', 'category' => 'tools', 'order' => 3],
            ['name' => 'VS Code', 'icon' => '💻', 'proficiency' => 'expert', 'category' => 'tools', 'order' => 4],
            ['name' => 'Postman', 'icon' => '📮', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 5],
            ['name' => 'Linux', 'icon' => '🐧', 'proficiency' => 'advanced', 'category' => 'tools', 'order' => 6],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }

        $this->command->info('✅ Skills seeded successfully! ');
    }
}
