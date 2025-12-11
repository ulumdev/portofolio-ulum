<?php

namespace Database\Seeders;

use App\Models\Experience;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $experiences = [
            [
                'position' => 'Freelance Programmer',
                'company' => 'Smartchipelago',
                'company_url' => 'https://smartchipelago.com',
                'location' => 'Remote',
                'employment_type' => 'freelance',
                'start_date' => '2024-11-01',
                'end_date' => null,
                'is_current' => true,
                'description' => 'Develop and improve any applications or websites for all smartchipelago clients',
                'responsibilities' => [
                    'Collaborated with teams and clients to gather requirements and deliver customized solutions',
                    'Enhanced user experience and application performance',
                    'Developed website using Laravel and MySQL (Smait-Smartchipelago)',
                    'Managed contents on the admin dashboard for landing page websites',
                ],
                'technologies' => ['Laravel', 'MySQL', 'PHP', 'JavaScript', 'Tailwind CSS'],
                'order' => 1,
                'is_featured' => true,
            ],
            [
                'position' => 'Software Engineer - Fullstack',
                'company' => 'PT. Pacific Data Jaya',
                'company_url' => null,
                'location' => 'Indonesia',
                'employment_type' => 'full-time',
                'start_date' => '2025-06-01',
                'end_date' => '2025-08-31',
                'is_current' => false,
                'description' => 'Develop and improve any applications or websites for all clients',
                'responsibilities' => [
                    'Collaborated with teams and clients to gather requirements and deliver customized solutions',
                    'Enhanced user experience and application performance',
                    'Developed websites using .NET, C# & Blazor',
                    'Developed mobile apps using Flutter',
                ],
                'technologies' => ['.NET', 'C#', 'Blazor', 'Flutter', 'Dart'],
                'order' => 2,
                'is_featured' => true,
            ],
            [
                'position' => 'Freelance Programmer',
                'company' => 'Freelance Project',
                'company_url' => null,
                'location' => 'Remote',
                'employment_type' => 'contract',
                'start_date' => '2024-12-01',
                'end_date' => '2025-01-31',
                'is_current' => false,
                'description' => 'Decision Support System for Scholarship Recipients Using the AHP Method',
                'responsibilities' => [
                    'Built a comprehensive Decision Support System',
                    'Implemented AHP (Analytic Hierarchy Process) methodology',
                    'Developed using Laravel framework and MySQL database',
                    'Created intuitive admin dashboard for data management',
                ],
                'technologies' => ['Laravel', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap'],
                'order' => 3,
                'is_featured' => false,
            ],
            [
                'position' => 'Software Engineer Intern',
                'company' => 'PT Mangli Djaya Raya',
                'company_url' => null,
                'location' => 'Indonesia',
                'employment_type' => 'internship',
                'start_date' => '2023-08-01',
                'end_date' => '2024-01-31',
                'is_current' => false,
                'description' => 'Collaborated with clients to gather requirements and deliver customized solutions',
                'responsibilities' => [
                    'Enhanced user experience and application performance',
                    'Developed supply chain management system for cigar production',
                    'Built system using VB.NET, Laravel, and Flutter',
                    'Developed Point Of Sale application with Bluetooth thermal printer integration',
                    'Implemented features to streamline purchase receipt printing',
                ],
                'technologies' => ['VB. NET', 'Laravel', 'Flutter', 'MySQL', 'PHP'],
                'order' => 4,
                'is_featured' => false,
            ],
        ];

        foreach ($experiences as $experience) {
            Experience::create($experience);
        }

        $this->command->info('✅ Experiences seeded successfully!');
    }
}
