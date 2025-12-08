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
                'content' => "This e-commerce platform is built using Laravel and React, providing a seamless shopping experience for customers.\n\nKey Features:\n- Product catalog with search and filtering\n- Shopping cart and wishlist\n- Secure payment integration (Stripe, PayPal)\n- Order tracking system\n- Admin dashboard for inventory management\n- Responsive design for all devices\n\nThe backend is powered by Laravel with RESTful API, while the frontend uses React for a dynamic user interface. The application follows best practices for security and performance optimization.",
                'demo_url' => 'https://demo-ecommerce.example.com',
                'github_url' => 'https://github.com/ulumdev/ecommerce',
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
                'github_url' => 'https://github.com/ulumdev/task-manager',
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
                'demo_url' => 'https://demo-social.example.com',
                'github_url' => 'https://github.com/ulumdev/social-dashboard',
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
                'github_url' => 'https://github.com/ulumdev/lms',
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
                'demo_url' => 'https://demo-realestate.example.com',
                'github_url' => 'https://github.com/ulumdev/real-estate-platform',
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
                'github_url' => 'https://github.com/ulumdev/inventory-system',
                'status' => 'draft',
                'order' => 6,
                'skills' => ['Laravel', 'Alpine.js', 'MySQL', 'Tailwind CSS'],
            ],
            [
                'title' => 'Restaurant Ordering System',
                'slug' => 'restaurant-ordering-system',
                'description' => 'Online food ordering platform with menu management and delivery tracking.',
                'content' => "A complete restaurant management and ordering system.\n\nFeatures:\n- Digital menu with images\n- Online ordering and payment\n- Table reservation system\n- Kitchen display system\n- Delivery tracking\n- Customer reviews and ratings\n- Loyalty program\n\nOptimized for fast food chains and local restaurants alike.",
                'demo_url' => 'https://demo-restaurant.example.com',
                'github_url' => 'https://github.com/ulumdev/restaurant-ordering',
                'status' => 'published',
                'published_at' => now()->subDays(20),
                'order' => 7,
                'skills' => ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Pusher'],
            ],
            [
                'title' => 'Hotel Booking System',
                'slug' => 'hotel-booking-system',
                'description' => 'Hotel reservation platform with room management and payment integration.',
                'content' => "A modern hotel booking system for hospitality businesses.\n\nKey Features:\n- Room availability calendar\n- Online booking and payment\n- Guest management\n- Housekeeping management\n- Reporting and analytics\n- Multi-language support\n- Email notifications\n\nIntegrated with major payment gateways and booking engines.",
                'demo_url' => 'https://demo-hotel.example.com',
                'github_url' => 'https://github.com/ulumdev/hotel-booking',
                'status' => 'published',
                'published_at' => now()->subDays(35),
                'order' => 8,
                'skills' => ['Laravel', 'React', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
            ],
            [
                'title' => 'Clinic Management System',
                'slug' => 'clinic-management-system',
                'description' => 'Healthcare management system with appointment scheduling and patient records.',
                'content' => "A comprehensive clinic management solution.\n\nFeatures:\n- Patient registration and records\n- Appointment scheduling\n- Electronic medical records (EMR)\n- Prescription management\n- Billing and invoicing\n- Doctor and staff management\n- Reports and analytics\n\nCompliant with healthcare data privacy regulations.",
                'demo_url' => 'https://demo-clinic.example.com',
                'github_url' => 'https://github.com/ulumdev/clinic-management',
                'status' => 'published',
                'published_at' => now()->subDays(50),
                'order' => 9,
                'skills' => ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'Docker'],
            ],
            [
                'title' => 'Gym Management System',
                'slug' => 'gym-management-system',
                'description' => 'Fitness center management with membership, attendance, and trainer scheduling.',
                'content' => "A complete gym and fitness center management platform.\n\nCapabilities:\n- Membership management\n- Attendance tracking\n- Trainer scheduling\n- Workout plans\n- Payment and billing\n- Equipment maintenance tracking\n- Member mobile app\n\nHelps gym owners streamline operations and improve member experience.",
                'demo_url' => 'https://demo-gym.example.com',
                'github_url' => 'https://github.com/ulumdev/gym-management',
                'status' => 'published',
                'published_at' => now()->subDays(25),
                'order' => 10,
                'skills' => ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
            ],
            [
                'title' => 'Blog Platform',
                'slug' => 'blog-platform',
                'description' => 'Modern blogging platform with markdown support and SEO optimization.',
                'content' => "A feature-rich blogging platform for content creators.\n\nFeatures:\n- Markdown editor\n- SEO optimization\n- Category and tag management\n- Comment system\n- Social media sharing\n- Newsletter integration\n- Analytics dashboard\n\nBuilt with performance and SEO best practices in mind.",
                'demo_url' => 'https://demo-blog.example.com',
                'github_url' => 'https://github.com/ulumdev/blog-platform',
                'status' => 'published',
                'published_at' => now()->subDays(70),
                'order' => 11,
                'skills' => ['Laravel', 'Blade', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
            ],
            [
                'title' => 'CRM System',
                'slug' => 'crm-system',
                'description' => 'Customer relationship management system with sales pipeline and lead tracking.',
                'content' => "A powerful CRM solution for sales teams.\n\nFeatures:\n- Lead and contact management\n- Sales pipeline visualization\n- Email integration\n- Task and calendar management\n- Reporting and forecasting\n- Team collaboration\n- Mobile responsive\n\nHelps businesses manage customer relationships and boost sales.",
                'demo_url' => 'https://demo-crm.example.com',
                'github_url' => 'https://github.com/ulumdev/crm-system',
                'status' => 'published',
                'published_at' => now()->subDays(40),
                'order' => 12,
                'skills' => ['Laravel', 'React', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
            ],
            [
                'title' => 'HR Management System',
                'slug' => 'hr-management-system',
                'description' => 'Human resources management with payroll, attendance, and leave management.',
                'content' => "An all-in-one HR management solution.\n\nKey Features:\n- Employee database\n- Attendance tracking\n- Leave management\n- Payroll processing\n- Performance reviews\n- Recruitment module\n- Document management\n\nStreamlines HR processes and improves employee engagement.",
                'demo_url' => 'https://demo-hrm.example.com',
                'github_url' => 'https://github.com/ulumdev/hr-management',
                'status' => 'published',
                'published_at' => now()->subDays(55),
                'order' => 13,
                'skills' => ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Docker'],
            ],
            [
                'title' => 'Event Management Platform',
                'slug' => 'event-management-platform',
                'description' => 'Event planning and ticketing platform with attendee management.',
                'content' => "A comprehensive event management solution.\n\nFeatures:\n- Event creation and management\n- Online ticketing\n- Attendee registration\n- QR code check-in\n- Email campaigns\n- Analytics and reporting\n- Multiple payment gateways\n\nPerfect for conferences, concerts, and corporate events.",
                'demo_url' => 'https://demo-events.example.com',
                'github_url' => 'https://github.com/ulumdev/event-management',
                'status' => 'published',
                'published_at' => now()->subDays(10),
                'order' => 14,
                'skills' => ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Stripe'],
            ],
            [
                'title' => 'Portfolio Builder',
                'slug' => 'portfolio-builder',
                'description' => 'Drag-and-drop portfolio website builder for creatives and professionals.',
                'content' => "An intuitive portfolio builder for showcasing work.\n\nFeatures:\n- Drag-and-drop editor\n- Multiple templates\n- Custom domain support\n- Project showcase\n- Contact forms\n- SEO optimization\n- Mobile responsive\n\nIdeal for designers, developers, photographers, and freelancers.",
                'github_url' => 'https://github.com/ulumdev/portfolio-builder',
                'status' => 'draft',
                'order' => 15,
                'skills' => ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'AWS S3'],
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
