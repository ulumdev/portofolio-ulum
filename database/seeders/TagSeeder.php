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
            // Programming Languages
            ['name' => 'PHP', 'slug' => 'php'],
            ['name' => 'JavaScript', 'slug' => 'javascript'],
            ['name' => 'TypeScript', 'slug' => 'typescript'],
            ['name' => 'Python', 'slug' => 'python'],
            ['name' => 'Java', 'slug' => 'java'],
            ['name' => 'C#', 'slug' => 'c-sharp'],
            ['name' => 'C++', 'slug' => 'c-plus-plus'],
            ['name' => 'Go', 'slug' => 'go'],
            ['name' => 'Rust', 'slug' => 'rust'],
            ['name' => 'Swift', 'slug' => 'swift'],
            ['name' => 'Kotlin', 'slug' => 'kotlin'],
            ['name' => 'Ruby', 'slug' => 'ruby'],
            ['name' => 'Scala', 'slug' => 'scala'],
            ['name' => 'Dart', 'slug' => 'dart'],

            // Frontend Frameworks & Libraries
            ['name' => 'React', 'slug' => 'react'],
            ['name' => 'Vue.js', 'slug' => 'vuejs'],
            ['name' => 'Angular', 'slug' => 'angular'],
            ['name' => 'Svelte', 'slug' => 'svelte'],
            ['name' => 'Next.js', 'slug' => 'nextjs'],
            ['name' => 'Nuxt.js', 'slug' => 'nuxtjs'],
            ['name' => 'Gatsby', 'slug' => 'gatsby'],
            ['name' => 'Alpine.js', 'slug' => 'alpinejs'],
            ['name' => 'jQuery', 'slug' => 'jquery'],
            ['name' => 'Ember.js', 'slug' => 'emberjs'],

            // Backend Frameworks
            ['name' => 'Laravel', 'slug' => 'laravel'],
            ['name' => 'Symfony', 'slug' => 'symfony'],
            ['name' => 'CodeIgniter', 'slug' => 'codeigniter'],
            ['name' => 'Yii', 'slug' => 'yii'],
            ['name' => 'Express.js', 'slug' => 'expressjs'],
            ['name' => 'NestJS', 'slug' => 'nestjs'],
            ['name' => 'FastAPI', 'slug' => 'fastapi'],
            ['name' => 'Django', 'slug' => 'django'],
            ['name' => 'Flask', 'slug' => 'flask'],
            ['name' => 'Spring Boot', 'slug' => 'spring-boot'],
            ['name' => 'ASP.NET', 'slug' => 'aspnet'],
            ['name' => 'Ruby on Rails', 'slug' => 'ruby-on-rails'],

            // CSS Frameworks & Tools
            ['name' => 'Tailwind CSS', 'slug' => 'tailwind-css'],
            ['name' => 'Bootstrap', 'slug' => 'bootstrap'],
            ['name' => 'Material UI', 'slug' => 'material-ui'],
            ['name' => 'Bulma', 'slug' => 'bulma'],
            ['name' => 'Foundation', 'slug' => 'foundation'],
            ['name' => 'Sass', 'slug' => 'sass'],
            ['name' => 'LESS', 'slug' => 'less'],
            ['name' => 'Styled Components', 'slug' => 'styled-components'],
            ['name' => 'CSS Modules', 'slug' => 'css-modules'],

            // Databases
            ['name' => 'MySQL', 'slug' => 'mysql'],
            ['name' => 'PostgreSQL', 'slug' => 'postgresql'],
            ['name' => 'MongoDB', 'slug' => 'mongodb'],
            ['name' => 'Redis', 'slug' => 'redis'],
            ['name' => 'SQLite', 'slug' => 'sqlite'],
            ['name' => 'MariaDB', 'slug' => 'mariadb'],
            ['name' => 'Oracle', 'slug' => 'oracle'],
            ['name' => 'SQL Server', 'slug' => 'sql-server'],
            ['name' => 'Elasticsearch', 'slug' => 'elasticsearch'],
            ['name' => 'Cassandra', 'slug' => 'cassandra'],

            // API & Architecture
            ['name' => 'REST API', 'slug' => 'rest-api'],
            ['name' => 'GraphQL', 'slug' => 'graphql'],
            ['name' => 'gRPC', 'slug' => 'grpc'],
            ['name' => 'WebSocket', 'slug' => 'websocket'],
            ['name' => 'Microservices', 'slug' => 'microservices'],
            ['name' => 'Serverless', 'slug' => 'serverless'],
            ['name' => 'Monolithic', 'slug' => 'monolithic'],
            ['name' => 'Event-Driven', 'slug' => 'event-driven'],
            ['name' => 'SOAP', 'slug' => 'soap'],

            // DevOps & Tools
            ['name' => 'Docker', 'slug' => 'docker'],
            ['name' => 'Kubernetes', 'slug' => 'kubernetes'],
            ['name' => 'Jenkins', 'slug' => 'jenkins'],
            ['name' => 'GitHub Actions', 'slug' => 'github-actions'],
            ['name' => 'GitLab CI', 'slug' => 'gitlab-ci'],
            ['name' => 'Terraform', 'slug' => 'terraform'],
            ['name' => 'Ansible', 'slug' => 'ansible'],
            ['name' => 'Vagrant', 'slug' => 'vagrant'],
            ['name' => 'Nginx', 'slug' => 'nginx'],
            ['name' => 'Apache', 'slug' => 'apache'],

            // Version Control
            ['name' => 'Git', 'slug' => 'git'],
            ['name' => 'GitHub', 'slug' => 'github'],
            ['name' => 'GitLab', 'slug' => 'gitlab'],
            ['name' => 'Bitbucket', 'slug' => 'bitbucket'],
            ['name' => 'SVN', 'slug' => 'svn'],

            // Development Practices
            ['name' => 'Frontend', 'slug' => 'frontend'],
            ['name' => 'Backend', 'slug' => 'backend'],
            ['name' => 'Full Stack', 'slug' => 'full-stack'],
            ['name' => 'Testing', 'slug' => 'testing'],
            ['name' => 'TDD', 'slug' => 'tdd'],
            ['name' => 'BDD', 'slug' => 'bdd'],
            ['name' => 'Unit Testing', 'slug' => 'unit-testing'],
            ['name' => 'Integration Testing', 'slug' => 'integration-testing'],
            ['name' => 'E2E Testing', 'slug' => 'e2e-testing'],
            ['name' => 'Security', 'slug' => 'security'],
            ['name' => 'Performance', 'slug' => 'performance'],
            ['name' => 'Optimization', 'slug' => 'optimization'],
            ['name' => 'Design Patterns', 'slug' => 'design-patterns'],
            ['name' => 'Clean Code', 'slug' => 'clean-code'],
            ['name' => 'SOLID', 'slug' => 'solid'],
            ['name' => 'DRY', 'slug' => 'dry'],
            ['name' => 'KISS', 'slug' => 'kiss'],
            ['name' => 'Refactoring', 'slug' => 'refactoring'],

            // Methodologies
            ['name' => 'Agile', 'slug' => 'agile'],
            ['name' => 'Scrum', 'slug' => 'scrum'],
            ['name' => 'Kanban', 'slug' => 'kanban'],
            ['name' => 'Waterfall', 'slug' => 'waterfall'],
            ['name' => 'DevOps', 'slug' => 'devops'],
            ['name' => 'CI/CD', 'slug' => 'ci-cd'],

            // Cloud & Services
            ['name' => 'AWS', 'slug' => 'aws'],
            ['name' => 'Azure', 'slug' => 'azure'],
            ['name' => 'Google Cloud', 'slug' => 'google-cloud'],
            ['name' => 'Firebase', 'slug' => 'firebase'],
            ['name' => 'Heroku', 'slug' => 'heroku'],
            ['name' => 'DigitalOcean', 'slug' => 'digitalocean'],
            ['name' => 'Vercel', 'slug' => 'vercel'],
            ['name' => 'Netlify', 'slug' => 'netlify'],

            // Mobile Development
            ['name' => 'React Native', 'slug' => 'react-native'],
            ['name' => 'Flutter', 'slug' => 'flutter'],
            ['name' => 'Ionic', 'slug' => 'ionic'],
            ['name' => 'Android', 'slug' => 'android'],
            ['name' => 'iOS', 'slug' => 'ios'],

            // Other Technologies
            ['name' => 'WebRTC', 'slug' => 'webrtc'],
            ['name' => 'PWA', 'slug' => 'pwa'],
            ['name' => 'SPA', 'slug' => 'spa'],
            ['name' => 'SSR', 'slug' => 'ssr'],
            ['name' => 'SEO', 'slug' => 'seo'],
            ['name' => 'Accessibility', 'slug' => 'accessibility'],
            ['name' => 'Responsive Design', 'slug' => 'responsive-design'],
            ['name' => 'UI/UX', 'slug' => 'ui-ux'],
            ['name' => 'Figma', 'slug' => 'figma'],
            ['name' => 'Adobe XD', 'slug' => 'adobe-xd'],
        ];

        foreach ($tags as $tag) {
            Tag::create($tag);
        }

        // foreach ($tags as $tag) {
        //     Tag::create([
        //         'name' => $tag,
        //         'slug' => \Illuminate\Support\Str::slug($tag),
        //     ]);
        // }

        $this->command->info('✅ Tags seeded successfully!');
    }
}
