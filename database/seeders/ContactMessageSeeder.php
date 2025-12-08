<?php

namespace Database\Seeders;

use App\Models\ContactMessage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $messages = [
            [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'subject' => 'Website Development Inquiry',
            'message' => 'Hi! I came across your portfolio and I\'m impressed with your work. I have a project in mind and would love to discuss it with you. Are you available for a consultation?',
            'is_read' => false,
            'created_at' => now()->subDays(2),
            ],
            [
            'name' => 'Sarah Johnson',
            'email' => 'sarah.j@company.com',
            'subject' => 'Collaboration Opportunity',
            'message' => 'Hello! I represent a tech startup and we\'re looking for a skilled Laravel developer to join our team on a contract basis. Your portfolio shows exactly the kind of expertise we need. Let\'s connect!',
            'is_read' => false,
            'created_at' => now()->subDays(5),
            ],
            [
            'name' => 'Michael Chen',
            'email' => 'michael.chen@email.com',
            'subject' => 'Question about your blog post',
            'message' => 'Thanks for the great article on Laravel APIs! I have a question about authentication implementation. Could you provide more details on handling JWT tokens?',
            'is_read' => true,
            'created_at' => now()->subDays(8),
            ],
            [
            'name' => 'Emily Rodriguez',
            'email' => 'emily.r@startup.io',
            'subject' => 'Freelance Project',
            'message' => 'We need someone to build a custom CMS for our content team. Based on your portfolio, you seem like the perfect fit. Can we schedule a call to discuss requirements and timeline?',
            'is_read' => true,
            'created_at' => now()->subDays(12),
            ],
            [
            'name' => 'David Kim',
            'email' => 'david.kim@tech.com',
            'subject' => 'Technical Consultation',
            'message' => 'I\'m working on optimizing our Laravel application and noticed your article on database optimization. Would you be available for a paid consultation session?',
            'is_read' => true,
            'created_at' => now()->subDays(15),
            ],
            [
            'name' => 'Lisa Thompson',
            'email' => 'lisa.t@agency.com',
            'subject' => 'Partnership Proposal',
            'message' => 'Our agency frequently needs Laravel developers for various client projects. Would you be interested in a partnership arrangement? We can discuss terms and ongoing collaboration.',
            'is_read' => true,
            'created_at' => now()->subDays(20),
            ],
            [
            'name' => 'Alex Martinez',
            'email' => 'alex.m@example.com',
            'subject' => 'Quick Question',
            'message' => 'Love your work! Quick question - which code editor do you use and what are your must-have extensions? Thanks!',
            'is_read' => true,
            'created_at' => now()->subDays(25),
            ],
            [
            'name' => 'Jessica Brown',
            'email' => 'jessica.brown@corp.com',
            'subject' => 'E-commerce Project',
            'message' => 'We\'re launching an online store and need a Laravel developer to build custom features. Your e-commerce projects in your portfolio look impressive. Can we discuss this further?',
            'is_read' => false,
            'created_at' => now()->subDays(1),
            ],
            [
            'name' => 'Robert Wilson',
            'email' => 'robert.w@business.com',
            'subject' => 'API Integration Help',
            'message' => 'I need help integrating third-party APIs into our Laravel application. Are you available for a short-term contract work?',
            'is_read' => false,
            'created_at' => now()->subDays(3),
            ],
            [
            'name' => 'Amanda Lee',
            'email' => 'amanda.lee@digital.com',
            'subject' => 'Mobile App Backend',
            'message' => 'We\'re developing a mobile app and need a robust Laravel backend with REST API. Your experience seems perfect for this. Interested?',
            'is_read' => false,
            'created_at' => now()->subDays(4),
            ],
            [
            'name' => 'James Anderson',
            'email' => 'james.a@enterprise.com',
            'subject' => 'Code Review Request',
            'message' => 'Would you be available to review our Laravel codebase? We\'re looking for best practices recommendations and security audit.',
            'is_read' => true,
            'created_at' => now()->subDays(7),
            ],
            [
            'name' => 'Patricia Garcia',
            'email' => 'patricia.g@solutions.com',
            'subject' => 'Long-term Contract',
            'message' => 'Our company is looking for a Laravel expert for a 6-month contract. Multiple projects lined up. Can we discuss rates and availability?',
            'is_read' => true,
            'created_at' => now()->subDays(10),
            ],
            [
            'name' => 'Kevin Taylor',
            'email' => 'kevin.t@startup.tech',
            'subject' => 'SaaS Development',
            'message' => 'Building a SaaS platform from scratch. Need someone experienced with multi-tenancy in Laravel. Are you interested in this challenge?',
            'is_read' => true,
            'created_at' => now()->subDays(14),
            ],
            [
            'name' => 'Rachel White',
            'email' => 'rachel.w@education.org',
            'subject' => 'Learning Management System',
            'message' => 'We need a custom LMS built with Laravel for our online courses. Your previous educational projects caught our attention. Let\'s talk!',
            'is_read' => true,
            'created_at' => now()->subDays(18),
            ],
            [
            'name' => 'Daniel Harris',
            'email' => 'daniel.h@finance.com',
            'subject' => 'Payment Gateway Integration',
            'message' => 'Need help integrating multiple payment gateways into our Laravel platform. Do you have experience with Stripe and PayPal?',
            'is_read' => true,
            'created_at' => now()->subDays(22),
            ],
            [
            'name' => 'Sophie Martin',
            'email' => 'sophie.m@media.com',
            'subject' => 'Content Platform Development',
            'message' => 'Creating a content publishing platform similar to Medium. Looking for a Laravel developer who can handle high traffic. Interested?',
            'is_read' => true,
            'created_at' => now()->subDays(28),
            ],
            [
            'name' => 'Christopher Moore',
            'email' => 'chris.moore@health.com',
            'subject' => 'Healthcare Portal',
            'message' => 'Developing a patient management system. Need someone with Laravel and HIPAA compliance knowledge. Can we schedule a meeting?',
            'is_read' => true,
            'created_at' => now()->subDays(30),
            ],
            [
            'name' => 'Michelle Clark',
            'email' => 'michelle.c@nonprofit.org',
            'subject' => 'Pro Bono Work Inquiry',
            'message' => 'We\'re a nonprofit organization looking for volunteer developers. Would you be interested in contributing to a meaningful cause?',
            'is_read' => true,
            'created_at' => now()->subDays(35),
            ],
            [
            'name' => 'Brian Lewis',
            'email' => 'brian.l@realestate.com',
            'subject' => 'Property Listing Platform',
            'message' => 'Building a real estate listing website with advanced search features. Your portfolio shows similar work. Let\'s connect!',
            'is_read' => true,
            'created_at' => now()->subDays(40),
            ],
            [
            'name' => 'Angela Walker',
            'email' => 'angela.w@events.com',
            'subject' => 'Event Management System',
            'message' => 'Need a ticketing and event management platform built with Laravel. Timeline is 3 months. Are you available?',
            'is_read' => true,
            'created_at' => now()->subDays(45),
            ],
        ];

        foreach ($messages as $message) {
            ContactMessage::create($message);
        }

        $this->command->info('✅ Contact messages seeded successfully!');
    }
}
