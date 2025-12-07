<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'Laravel', 'PHP', 'JavaScript', 'React', 'Vue.js', 'Node.js',
            'Tailwind CSS', 'Bootstrap', 'MySQL', 'PostgreSQL', 'MongoDB',
            'API', 'REST API', 'GraphQL', 'Docker', 'Git', 'GitHub',
            'Frontend', 'Backend', 'Full Stack', 'Testing', 'Security',
            'Performance', 'Optimization', 'Design Patterns', 'Clean Code',
            'Agile', 'Scrum', 'TypeScript', 'Python', 'Java',
        ];

        foreach ($tags as $tag) {
            Tag::create([
                'name' => $tag,
                'slug' => \Illuminate\Support\Str::slug($tag),
            ]);
        }

        $this->command->info('✅ Tags seeded successfully!');
    }
}
