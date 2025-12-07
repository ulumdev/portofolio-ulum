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
                'email' => 'john. doe@example.com',
                'subject' => 'Website Development Inquiry',
                'message' => 'Hi! I came across your portfolio and I\'m impressed with your work. I have a project in mind and would love to discuss it with you. Are you available for a consultation?',
                'is_read' => false,
                'created_at' => now()->subDays(2),
            ],
            [
                'name' => 'Sarah Johnson',
                'email' => 'sarah.j@company.com',
                'subject' => 'Collaboration Opportunity',
                'message' => 'Hello! I represent a tech startup and we\'re looking for a skilled Laravel developer to join our team on a contract basis. Your portfolio shows exactly the kind of expertise we need.  Let\'s connect!',
                'is_read' => false,
                'created_at' => now()->subDays(5),
            ],
            [
                'name' => 'Michael Chen',
                'email' => 'michael.chen@email. com',
                'subject' => 'Question about your blog post',
                'message' => 'Thanks for the great article on Laravel APIs! I have a question about authentication implementation. Could you provide more details on handling JWT tokens? ',
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
                'message' => 'Our agency frequently needs Laravel developers for various client projects. Would you be interested in a partnership arrangement?  We can discuss terms and ongoing collaboration.',
                'is_read' => true,
                'created_at' => now()->subDays(20),
            ],
            [
                'name' => 'Alex Martinez',
                'email' => 'alex.m@example.com',
                'subject' => 'Quick Question',
                'message' => 'Love your work!  Quick question - which code editor do you use and what are your must-have extensions? Thanks!',
                'is_read' => true,
                'created_at' => now()->subDays(25),
            ],
        ];

        foreach ($messages as $message) {
            ContactMessage::create($message);
        }

        $this->command->info('✅ Contact messages seeded successfully!');
    }
}
