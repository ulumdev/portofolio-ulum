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
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Building RESTful APIs with Laravel',
            'slug' => 'building-restful-apis-with-laravel',
            'content' => '<p>RESTful APIs are the backbone of modern web applications. Learn how to build robust, scalable APIs using Laravel. </p><h2>Why Laravel for APIs?</h2><p>Laravel provides excellent tools for API development including API resources, rate limiting, and authentication.</p><h2>Getting Started</h2><p>First, install Laravel Sanctum for API authentication: <code>composer require laravel/sanctum</code></p><h2>Best Practices</h2><ul><li>Use API Resources for data transformation</li><li>Implement proper error handling</li><li>Add versioning to your API</li><li>Document your endpoints</li></ul>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Mastering Tailwind CSS',
            'slug' => 'mastering-tailwind-css',
            'content' => '<p>Tailwind CSS has revolutionized how we write CSS. This guide will help you master utility-first CSS. </p><h2>Why Tailwind CSS?</h2><p>Tailwind provides a comprehensive set of utility classes that make building custom designs faster and more maintainable.</p><h2>Installation</h2><p>Install via npm: <code>npm install tailwindcss</code></p><h2>Core Concepts</h2><ul><li>Utility-first approach</li><li>Responsive design</li><li>Custom configurations</li><li>Component extraction</li></ul><p>With Tailwind, you can build beautiful interfaces without leaving your HTML! </p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'React Hooks: A Complete Guide',
            'slug' => 'react-hooks-a-complete-guide',
            'content' => '<p>React Hooks changed how we write React components. Learn everything about hooks in this comprehensive guide.</p><h2>Introduction to Hooks</h2><p>Hooks let you use state and other React features without writing a class. </p><h2>Common Hooks</h2><ul><li>useState - Managing state</li><li>useEffect - Side effects</li><li>useContext - Context API</li><li>useReducer - Complex state logic</li></ul><h2>Custom Hooks</h2><p>Creating custom hooks allows you to extract component logic into reusable functions.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Database Optimization Techniques',
            'slug' => 'database-optimization-techniques',
            'content' => '<p>Database performance is crucial for application speed. Learn proven optimization techniques.</p><h2>Indexing Strategies</h2><p>Proper indexing can dramatically improve query performance.</p><h2>Query Optimization</h2><ul><li>Avoid N+1 queries</li><li>Use eager loading</li><li>Optimize JOINs</li><li>Cache frequently accessed data</li></ul><h2>Database Design</h2><p>Good database design prevents performance issues before they start.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Introduction to Docker for Developers',
            'slug' => 'introduction-to-docker-for-developers',
            'content' => '<p>Docker simplifies application deployment.  This guide covers Docker basics for developers.</p><h2>What is Docker?</h2><p>Docker is a platform for developing, shipping, and running applications in containers.</p><h2>Key Concepts</h2><ul><li>Images and Containers</li><li>Dockerfile</li><li>Docker Compose</li><li>Volumes and Networks</li></ul><h2>Getting Started</h2><p>Create your first Dockerfile and start containerizing your applications today!</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Vue.js 3 Composition API Deep Dive',
            'slug' => 'vuejs-3-composition-api-deep-dive',
            'content' => '<p>The Composition API is a game-changer for Vue.js.  Learn how to use it effectively.</p><h2>Why Composition API?</h2><p>Better logic reuse, improved TypeScript support, and more flexible code organization.</p><h2>Core Functions</h2><ul><li>ref and reactive</li><li>computed and watch</li><li>lifecycle hooks</li><li>composables</li></ul><p>The Composition API makes your Vue components more maintainable and testable.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Securing Your Web Applications',
            'slug' => 'securing-your-web-applications',
            'content' => '<p>Security should be a top priority.  Learn essential security practices for web applications.</p><h2>Common Vulnerabilities</h2><ul><li>SQL Injection</li><li>XSS Attacks</li><li>CSRF Attacks</li><li>Authentication flaws</li></ul><h2>Best Practices</h2><p>Implement proper input validation, use HTTPS, keep dependencies updated, and follow security guidelines.</p><h2>Tools and Resources</h2><p>Use security scanners and stay informed about the latest security threats.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Understanding JavaScript Closures',
            'slug' => 'understanding-javascript-closures',
            'content' => '<p>Closures are a fundamental concept in JavaScript. Master them to write better code.</p><h2>What are Closures?</h2><p>A closure is a function that has access to variables in its outer scope, even after the outer function has returned. </p><h2>Practical Examples</h2><p>Closures are used in callbacks, event handlers, and module patterns.</p><h2>Common Pitfalls</h2><p>Understanding closure scope can prevent memory leaks and unexpected behavior.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Modern PHP Development in 2025',
            'slug' => 'modern-php-development-in-2025',
            'content' => '<p>PHP has evolved significantly.  Discover modern PHP development practices.</p><h2>PHP 8.3 Features</h2><p>Readonly classes, typed constants, and more performance improvements.</p><h2>Modern Tools</h2><ul><li>Composer for dependency management</li><li>PHPUnit for testing</li><li>PHP CS Fixer for code style</li><li>PHPStan for static analysis</li></ul><h2>Frameworks</h2><p>Laravel, Symfony, and other modern frameworks make PHP development enjoyable.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Git Workflow Best Practices',
            'slug' => 'git-workflow-best-practices',
            'content' => '<p>Effective Git workflows improve team collaboration. Learn industry-standard practices.</p><h2>Branching Strategies</h2><ul><li>Git Flow</li><li>GitHub Flow</li><li>GitLab Flow</li></ul><h2>Commit Messages</h2><p>Write clear, descriptive commit messages that explain the "why" behind changes.</p><h2>Pull Request Guidelines</h2><p>Keep PRs small, focused, and well-documented for easier reviews.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Building Responsive Layouts with CSS Grid',
            'slug' => 'building-responsive-layouts-with-css-grid',
            'content' => '<p>CSS Grid revolutionized web layouts. Learn to create complex, responsive designs.</p><h2>Grid Basics</h2><p>Understanding grid containers, grid items, and grid tracks. </p><h2>Responsive Design</h2><p>Use auto-fit, auto-fill, and media queries for responsive grids.</p><h2>Practical Examples</h2><ul><li>Card layouts</li><li>Magazine-style layouts</li><li>Dashboard layouts</li></ul><p>CSS Grid makes complex layouts simple and maintainable.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'draft',
            'published_at' => null,
            'views' => 0,
            ],
            [
            'title' => 'Testing in Laravel: A Comprehensive Guide',
            'slug' => 'testing-in-laravel-comprehensive-guide',
            'content' => '<p>Testing is crucial for maintaining code quality. Learn how to write effective tests in Laravel.</p><h2>Types of Tests</h2><ul><li>Unit Tests</li><li>Feature Tests</li><li>Browser Tests</li></ul><h2>PHPUnit Basics</h2><p>Laravel comes with PHPUnit out of the box, making testing easy and intuitive.</p><h2>Best Practices</h2><p>Write tests before fixing bugs, maintain high code coverage, and use factories for test data.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Microservices Architecture Explained',
            'slug' => 'microservices-architecture-explained',
            'content' => '<p>Microservices offer scalability and flexibility. Learn the fundamentals of microservices architecture.</p><h2>What are Microservices?</h2><p>Small, independent services that work together to form a complete application.</p><h2>Benefits</h2><ul><li>Independent deployment</li><li>Technology flexibility</li><li>Better scalability</li><li>Fault isolation</li></ul><h2>Challenges</h2><p>Distributed system complexity, data consistency, and inter-service communication.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'TypeScript for JavaScript Developers',
            'slug' => 'typescript-for-javascript-developers',
            'content' => '<p>TypeScript adds static typing to JavaScript. Learn how to transition from JavaScript to TypeScript.</p><h2>Why TypeScript?</h2><p>Better IDE support, early error detection, and improved code documentation.</p><h2>Basic Types</h2><ul><li>string, number, boolean</li><li>Arrays and Tuples</li><li>Interfaces and Types</li><li>Generics</li></ul><h2>Migration Strategy</h2><p>Start small, gradually add types, and leverage TypeScript features progressively.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Exploring GraphQL APIs',
            'slug' => 'exploring-graphql-apis',
            'content' => '<p>GraphQL offers a flexible alternative to REST. Learn how to build GraphQL APIs.</p><h2>GraphQL vs REST</h2><p>GraphQL allows clients to request exactly the data they need.</p><h2>Core Concepts</h2><ul><li>Schemas and Types</li><li>Queries and Mutations</li><li>Resolvers</li><li>Subscriptions</li></ul><h2>Tools</h2><p>Apollo Server, GraphQL Playground, and various client libraries make development easier.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Redis Caching Strategies',
            'slug' => 'redis-caching-strategies',
            'content' => '<p>Redis improves application performance through caching. Learn effective Redis caching strategies.</p><h2>What is Redis?</h2><p>An in-memory data store that can be used as cache, database, or message broker.</p><h2>Caching Patterns</h2><ul><li>Cache-aside</li><li>Write-through</li><li>Write-behind</li><li>Refresh-ahead</li></ul><h2>Best Practices</h2><p>Set appropriate TTL, handle cache invalidation, and monitor cache hit rates.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Progressive Web Apps (PWA) Development',
            'slug' => 'progressive-web-apps-development',
            'content' => '<p>PWAs combine the best of web and mobile apps. Learn how to build progressive web applications.</p><h2>PWA Features</h2><ul><li>Offline functionality</li><li>Push notifications</li><li>Home screen installation</li><li>Fast loading</li></ul><h2>Core Technologies</h2><p>Service Workers, Web App Manifest, and HTTPS are essential for PWAs.</p><h2>Implementation</h2><p>Start with a responsive design, add service workers, and progressively enhance features.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'CI/CD Pipeline Best Practices',
            'slug' => 'cicd-pipeline-best-practices',
            'content' => '<p>Continuous Integration and Deployment streamline development. Learn how to build effective CI/CD pipelines.</p><h2>Pipeline Stages</h2><ul><li>Build</li><li>Test</li><li>Deploy</li><li>Monitor</li></ul><h2>Popular Tools</h2><p>GitHub Actions, GitLab CI, Jenkins, and CircleCI offer powerful automation.</p><h2>Best Practices</h2><p>Keep pipelines fast, run tests in parallel, and implement proper rollback strategies.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Node.js Performance Optimization',
            'slug' => 'nodejs-performance-optimization',
            'content' => '<p>Optimize your Node.js applications for better performance. Learn proven optimization techniques.</p><h2>Common Issues</h2><ul><li>Blocking the event loop</li><li>Memory leaks</li><li>Inefficient database queries</li><li>Unoptimized algorithms</li></ul><h2>Solutions</h2><p>Use async/await properly, implement caching, optimize database queries, and monitor application metrics.</p><h2>Tools</h2><p>Use profilers, monitoring tools, and load testing to identify bottlenecks.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Web Accessibility Guidelines',
            'slug' => 'web-accessibility-guidelines',
            'content' => '<p>Make your websites accessible to everyone. Learn WCAG guidelines and best practices.</p><h2>Why Accessibility?</h2><p>Accessibility ensures everyone can use your website, regardless of disabilities.</p><h2>Key Principles</h2><ul><li>Perceivable</li><li>Operable</li><li>Understandable</li><li>Robust</li></ul><h2>Implementation</h2><p>Use semantic HTML, provide alt text, ensure keyboard navigation, and test with screen readers.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Machine Learning Basics for Developers',
            'slug' => 'machine-learning-basics-for-developers',
            'content' => '<p>Get started with machine learning as a developer. Learn the fundamentals and practical applications.</p><h2>Core Concepts</h2><ul><li>Supervised Learning</li><li>Unsupervised Learning</li><li>Neural Networks</li><li>Model Training</li></ul><h2>Tools and Libraries</h2><p>TensorFlow, PyTorch, scikit-learn, and Keras make ML development accessible.</p><h2>Getting Started</h2><p>Start with simple projects, understand the math basics, and practice with real datasets.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'draft',
            'published_at' => null,
            'views' => 0,
            ],
            [
            'title' => 'Serverless Architecture with AWS Lambda',
            'slug' => 'serverless-architecture-aws-lambda',
            'content' => '<p>Serverless computing eliminates server management. Learn how to build serverless applications with AWS Lambda.</p><h2>Benefits</h2><ul><li>No server management</li><li>Automatic scaling</li><li>Pay per execution</li><li>Built-in fault tolerance</li></ul><h2>Use Cases</h2><p>API backends, data processing, scheduled tasks, and real-time file processing.</p><h2>Best Practices</h2><p>Keep functions small, optimize cold starts, and monitor function performance.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'MongoDB Best Practices',
            'slug' => 'mongodb-best-practices',
            'content' => '<p>MongoDB is a popular NoSQL database. Learn best practices for schema design and query optimization.</p><h2>Schema Design</h2><p>Design schemas based on your query patterns, not just data structure.</p><h2>Indexing</h2><ul><li>Single field indexes</li><li>Compound indexes</li><li>Text indexes</li><li>Geospatial indexes</li></ul><h2>Performance Tips</h2><p>Use aggregation pipelines efficiently, implement proper connection pooling, and monitor slow queries.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'WebSocket Real-Time Communication',
            'slug' => 'websocket-realtime-communication',
            'content' => '<p>WebSockets enable real-time bidirectional communication. Learn how to implement WebSocket connections.</p><h2>What are WebSockets?</h2><p>A protocol providing full-duplex communication channels over a single TCP connection.</p><h2>Use Cases</h2><ul><li>Chat applications</li><li>Live notifications</li><li>Collaborative editing</li><li>Gaming</li></ul><h2>Implementation</h2><p>Use Socket.io, native WebSocket API, or Laravel Broadcasting for easy integration.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
            ],
            [
            'title' => 'Kubernetes for Beginners',
            'slug' => 'kubernetes-for-beginners',
            'content' => '<p>Kubernetes orchestrates containerized applications. Learn Kubernetes fundamentals for deploying scalable applications.</p><h2>Core Concepts</h2><ul><li>Pods</li><li>Services</li><li>Deployments</li><li>ConfigMaps and Secrets</li></ul><h2>Architecture</h2><p>Master node, worker nodes, and various controllers work together to manage your cluster.</p><h2>Getting Started</h2><p>Use Minikube for local development and gradually move to production clusters.</p>',
            'category' => $categories->random()->name,
            'tags' => $tags->random(rand(2, 4))->pluck('name')->toArray(),
            'status' => 'published',
            'published_at' => now()->subDays(rand(1, 90)),
            'views' => rand(100, 500),
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
