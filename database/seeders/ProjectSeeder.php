<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first();

        $projects = [
            [
                'title' => 'E-Commerce Platform',
                'slug' => 'e-commerce-platform',
                'description' => 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
                'content' => "This e-commerce platform is built using Laravel and React, providing a seamless shopping experience for customers.\n\nKey Features:\n- Product catalog with search and filtering\n- Shopping cart and wishlist\n- Secure payment integration (Stripe, PayPal)\n- Order tracking system\n- Admin dashboard for inventory management\n- Responsive design for all devices\n\nThe backend is powered by Laravel with RESTful API, while the frontend uses React for a dynamic user interface.  The application follows best practices for security and performance optimization.",
                'demo_url' => 'https://demo-ecommerce.example.com',
                'github_url' => 'https://github.com/UlumKtech/ecommerce',
                'status' => 'published',
                'published_at' => now()->subDays(30),
                'order' => 1,
                'skills' => ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Node.js'],
            ],
            [
                'title' => 'Task Management System',
                'slug' => 'task-management-system',
                'description' => 'A collaborative task management application with real-time updates and team collaboration features.',
                'content' => "A comprehensive task management system designed for teams to collaborate effectively.\n\nFeatures:\n- Create and assign tasks\n- Real-time notifications\n- Kanban board view\n- Team collaboration tools\n- Time tracking\n- File attachments\n- Progress reports\n\nBuilt with Laravel backend and Vue.js frontend, utilizing WebSockets for real-time updates.",
                'demo_url' => 'https://demo-tasks.example.com',
                'github_url' => 'https://github.com/UlumKtech/task-manager',
                'status' => 'published',
                'published_at' => now()->subDays(45),
                'order' => 2,
                'skills' => ['Laravel', 'Vue.js', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
            ],
            [
                'title' => 'Social Media Dashboard',
                'slug' => 'social-media-dashboard',
                'description' => 'Analytics dashboard for managing multiple social media accounts in one place.',
                'content' => "A powerful social media management dashboard that helps businesses manage their online presence.\n\nCapabilities:\n- Connect multiple social accounts\n- Schedule posts across platforms\n- Analytics and insights\n- Engagement tracking\n- Content calendar\n- Team collaboration\n\nIntegrated with major social media APIs including Twitter, Facebook, Instagram, and LinkedIn.",
                'demo_url' => 'https://demo-social. example.com',
                'github_url' => 'https://github.com/UlumKtech/social-dashboard',
                'status' => 'published',
                'published_at' => now()->subDays(60),
                'order' => 3,
                'skills' => ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Docker'],
            ],
            [
                'title' => 'Learning Management System',
                'slug' => 'learning-management-system',
                'description' => 'Online learning platform with course management, video streaming, and progress tracking.',
                'content' => "An LMS platform for educators to create and manage online courses.\n\nFeatures:\n- Course creation and management\n- Video hosting and streaming\n- Quiz and assignment system\n- Student progress tracking\n- Discussion forums\n- Certificate generation\n- Payment integration\n\nBuilt with scalability in mind, supporting thousands of concurrent users.",
                'demo_url' => 'https://demo-lms.example.com',
                'github_url' => 'https://github.com/UlumKtech/lms',
                'status' => 'published',
                'published_at' => now()->subDays(90),
                'order' => 4,
                'skills' => ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Docker'],
            ],
            [
                'title' => 'Real Estate Listing Platform',
                'slug' => 'real-estate-listing-platform',
                'description' => 'Property listing and management system with advanced search and map integration.',
                'content' => "A modern real estate platform connecting buyers, sellers, and agents.\n\nHighlights:\n- Advanced property search\n- Interactive map integration\n- Virtual tours\n- Agent profiles and ratings\n- Mortgage calculator\n- Saved searches and alerts\n- Mobile responsive design\n\nIntegrated with Google Maps API and various MLS systems.",
                'status' => 'published',
                'published_at' => now()->subDays(15),
                'order' => 5,
                'skills' => ['Laravel', 'React', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
            ],
            [
                'title' => 'Inventory Management System',
                'slug' => 'inventory-management-system',
                'description' => 'Comprehensive inventory tracking system with barcode scanning and reporting.',
                'content' => "An enterprise-level inventory management solution.\n\nCore Features:\n- Real-time inventory tracking\n- Barcode/QR code scanning\n- Multi-warehouse support\n- Low stock alerts\n- Purchase order management\n- Supplier management\n- Detailed reports and analytics\n\nDesigned for businesses of all sizes with scalable architecture.",
                'status' => 'draft',
                'order' => 6,
                'skills' => ['Laravel', 'Alpine.js', 'MySQL', 'Tailwind CSS'],
            ],
        ];

        foreach ($projects as $projectData) {
            $skills = $projectData['skills'];
            unset($projectData['skills']);

            $project = Project::create(array_merge($projectData, [
                'user_id' => $admin->id,
            ]));

            // Attach skills
            $skillIds = Skill::whereIn('name', $skills)->pluck('id');
            $project->skills()->attach($skillIds);
        }

        $this->command->info('✅ Projects seeded successfully!');
    }
}
