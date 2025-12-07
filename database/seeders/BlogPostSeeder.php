<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first();
        $categories = Category::all();
        $tags = Tag::all();

        $posts = [
            [
            'title' => 'Getting Started with Laravel 12',
            'slug' => 'getting-started-with-laravel-12',
            'content' => '<p>Laravel 12 brings exciting new features and improvements to the framework. In this comprehensive guide, we\'ll explore everything you need to know to get started. </p><h2>What\'s New in Laravel 12</h2><p>Laravel 12 introduces several groundbreaking features including improved performance, better developer experience, and new security enhancements. </p><h2>Installation</h2><p>Getting started is easy.  Simply run: <code>composer create-project laravel/laravel my-app</code></p><h2>Key Features</h2><ul><li>Enhanced routing system</li><li>Improved Eloquent ORM</li><li>Better testing tools</li><li>Advanced queue management</li></ul><p>Stay tuned for more detailed tutorials on each of these features! </p>',
            'category' => 'Web Development',
            'tags' => ['Laravel', 'PHP', 'Tutorial'],
            'status' => 'published',
            'published_at' => now()->subDays(5),
            'views' => 245,
            ],
            [
            'title' => 'Building RESTful APIs with Laravel',
            'slug' => 'building-restful-apis-with-laravel',
            'content' => '<p>RESTful APIs are the backbone of modern web applications. Learn how to build robust, scalable APIs using Laravel. </p><h2>Why Laravel for APIs?</h2><p>Laravel provides excellent tools for API development including API resources, rate limiting, and authentication.</p><h2>Getting Started</h2><p>First, install Laravel Sanctum for API authentication: <code>composer require laravel/sanctum</code></p><h2>Best Practices</h2><ul><li>Use API Resources for data transformation</li><li>Implement proper error handling</li><li>Add versioning to your API</li><li>Document your endpoints</li></ul>',
            'category' => 'Tutorial',
            'tags' => ['Laravel', 'API', 'REST API', 'Backend'],
            'status' => 'published',
            'published_at' => now()->subDays(12),
            'views' => 189,
            ],
            [
            'title' => 'Mastering Tailwind CSS',
            'slug' => 'mastering-tailwind-css',
            'content' => '<p>Tailwind CSS has revolutionized how we write CSS. This guide will help you master utility-first CSS. </p><h2>Why Tailwind CSS?</h2><p>Tailwind provides a comprehensive set of utility classes that make building custom designs faster and more maintainable.</p><h2>Installation</h2><p>Install via npm: <code>npm install tailwindcss</code></p><h2>Core Concepts</h2><ul><li>Utility-first approach</li><li>Responsive design</li><li>Custom configurations</li><li>Component extraction</li></ul><p>With Tailwind, you can build beautiful interfaces without leaving your HTML! </p>',
            'category' => 'Web Development',
            'tags' => ['Tailwind CSS', 'CSS', 'Frontend', 'Tutorial'],
            'status' => 'published',
            'published_at' => now()->subDays(18),
            'views' => 312,
            ],
            [
            'title' => 'React Hooks: A Complete Guide',
            'slug' => 'react-hooks-a-complete-guide',
            'content' => '<p>React Hooks changed how we write React components. Learn everything about hooks in this comprehensive guide.</p><h2>Introduction to Hooks</h2><p>Hooks let you use state and other React features without writing a class. </p><h2>Common Hooks</h2><ul><li>useState - Managing state</li><li>useEffect - Side effects</li><li>useContext - Context API</li><li>useReducer - Complex state logic</li></ul><h2>Custom Hooks</h2><p>Creating custom hooks allows you to extract component logic into reusable functions.</p>',
            'category' => 'Tutorial',
            'tags' => ['React', 'JavaScript', 'Frontend', 'Tutorial'],
            'status' => 'published',
            'published_at' => now()->subDays(25),
            'views' => 278,
            ],
            [
            'title' => 'Database Optimization Techniques',
            'slug' => 'database-optimization-techniques',
            'content' => '<p>Database performance is crucial for application speed. Learn proven optimization techniques.</p><h2>Indexing Strategies</h2><p>Proper indexing can dramatically improve query performance.</p><h2>Query Optimization</h2><ul><li>Avoid N+1 queries</li><li>Use eager loading</li><li>Optimize JOINs</li><li>Cache frequently accessed data</li></ul><h2>Database Design</h2><p>Good database design prevents performance issues before they start.</p>',
            'category' => 'Tips & Tricks',
            'tags' => ['MySQL', 'PostgreSQL', 'Performance', 'Backend'],
            'status' => 'published',
            'published_at' => now()->subDays(32),
            'views' => 156,
            ],
            [
            'title' => 'Introduction to Docker for Developers',
            'slug' => 'introduction-to-docker-for-developers',
            'content' => '<p>Docker simplifies application deployment.  This guide covers Docker basics for developers.</p><h2>What is Docker?</h2><p>Docker is a platform for developing, shipping, and running applications in containers.</p><h2>Key Concepts</h2><ul><li>Images and Containers</li><li>Dockerfile</li><li>Docker Compose</li><li>Volumes and Networks</li></ul><h2>Getting Started</h2><p>Create your first Dockerfile and start containerizing your applications today!</p>',
            'category' => 'DevOps',
            'tags' => ['Docker', 'DevOps', 'Tutorial'],
            'status' => 'published',
            'published_at' => now()->subDays(40),
            'views' => 201,
            ],
            [
            'title' => 'Vue.js 3 Composition API Deep Dive',
            'slug' => 'vuejs-3-composition-api-deep-dive',
            'content' => '<p>The Composition API is a game-changer for Vue.js.  Learn how to use it effectively.</p><h2>Why Composition API?</h2><p>Better logic reuse, improved TypeScript support, and more flexible code organization.</p><h2>Core Functions</h2><ul><li>ref and reactive</li><li>computed and watch</li><li>lifecycle hooks</li><li>composables</li></ul><p>The Composition API makes your Vue components more maintainable and testable.</p>',
            'category' => 'Web Development',
            'tags' => ['Vue.js', 'JavaScript', 'Frontend', 'Tutorial'],
            'status' => 'published',
            'published_at' => now()->subDays(48),
            'views' => 167,
            ],
            [
            'title' => 'Securing Your Web Applications',
            'slug' => 'securing-your-web-applications',
            'content' => '<p>Security should be a top priority.  Learn essential security practices for web applications.</p><h2>Common Vulnerabilities</h2><ul><li>SQL Injection</li><li>XSS Attacks</li><li>CSRF Attacks</li><li>Authentication flaws</li></ul><h2>Best Practices</h2><p>Implement proper input validation, use HTTPS, keep dependencies updated, and follow security guidelines.</p><h2>Tools and Resources</h2><p>Use security scanners and stay informed about the latest security threats.</p>',
            'category' => 'Tips & Tricks',
            'tags' => ['Security', 'Backend', 'Best Practices'],
            'status' => 'published',
            'published_at' => now()->subDays(55),
            'views' => 223,
            ],
            [
            'title' => 'Understanding JavaScript Closures',
            'slug' => 'understanding-javascript-closures',
            'content' => '<p>Closures are a fundamental concept in JavaScript. Master them to write better code.</p><h2>What are Closures?</h2><p>A closure is a function that has access to variables in its outer scope, even after the outer function has returned. </p><h2>Practical Examples</h2><p>Closures are used in callbacks, event handlers, and module patterns.</p><h2>Common Pitfalls</h2><p>Understanding closure scope can prevent memory leaks and unexpected behavior.</p>',
            'category' => 'Tutorial',
            'tags' => ['JavaScript', 'Frontend', 'Tutorial'],
            'status' => 'published',
            'published_at' => now()->subDays(62),
            'views' => 189,
            ],
            [
            'title' => 'Modern PHP Development in 2025',
            'slug' => 'modern-php-development-in-2025',
            'content' => '<p>PHP has evolved significantly.  Discover modern PHP development practices.</p><h2>PHP 8.3 Features</h2><p>Readonly classes, typed constants, and more performance improvements.</p><h2>Modern Tools</h2><ul><li>Composer for dependency management</li><li>PHPUnit for testing</li><li>PHP CS Fixer for code style</li><li>PHPStan for static analysis</li></ul><h2>Frameworks</h2><p>Laravel, Symfony, and other modern frameworks make PHP development enjoyable.</p>',
            'category' => 'News & Updates',
            'tags' => ['PHP', 'Backend', 'Laravel'],
            'status' => 'published',
            'published_at' => now()->subDays(70),
            'views' => 145,
            ],
            [
            'title' => 'Git Workflow Best Practices',
            'slug' => 'git-workflow-best-practices',
            'content' => '<p>Effective Git workflows improve team collaboration. Learn industry-standard practices.</p><h2>Branching Strategies</h2><ul><li>Git Flow</li><li>GitHub Flow</li><li>GitLab Flow</li></ul><h2>Commit Messages</h2><p>Write clear, descriptive commit messages that explain the "why" behind changes.</p><h2>Pull Request Guidelines</h2><p>Keep PRs small, focused, and well-documented for easier reviews.</p>',
            'category' => 'Tips & Tricks',
            'tags' => ['Git', 'GitHub', 'Best Practices'],
            'status' => 'published',
            'published_at' => now()->subDays(77),
            'views' => 198,
            ],
            [
            'title' => 'Building Responsive Layouts with CSS Grid',
            'slug' => 'building-responsive-layouts-with-css-grid',
            'content' => '<p>CSS Grid revolutionized web layouts. Learn to create complex, responsive designs.</p><h2>Grid Basics</h2><p>Understanding grid containers, grid items, and grid tracks. </p><h2>Responsive Design</h2><p>Use auto-fit, auto-fill, and media queries for responsive grids.</p><h2>Practical Examples</h2><ul><li>Card layouts</li><li>Magazine-style layouts</li><li>Dashboard layouts</li></ul><p>CSS Grid makes complex layouts simple and maintainable.</p>',
            'category' => 'Tutorial',
            'tags' => ['CSS', 'Frontend', 'Tutorial'],
            'status' => 'draft',
            'views' => 0,
            ],
        ];

        foreach ($posts as $postData) {
            $category = Category::where('name', $postData['category'])->first();
            $tagNames = $postData['tags'];

            unset($postData['category'], $postData['tags']);

            $post = BlogPost::create(array_merge($postData, [
                'user_id' => $admin->id,
                'category_id' => $category->id,
                'meta_title' => $postData['title'],
            ]));

            // Attach tags
            $tagIds = Tag::whereIn('name', $tagNames)->pluck('id');
            $post->tags()->attach($tagIds);
        }

        $this->command->info('✅ Blog posts seeded successfully!');
    }
}
