<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Run seeders in order (important for foreign keys)
        $this->call([
            AdminUserSeeder::class,
            CategorySeeder::class,
            TagSeeder::class,
            SkillSeeder::class,
            SettingSeeder::class,
            ExperienceSeeder::class,
            ProjectSeeder::class,
            BlogPostSeeder::class,
            ContactMessageSeeder::class,
        ]);
    }
}
