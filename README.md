# 🎨 Portfolio Ulum - Laravel Portfolio Website

A complete full-stack portfolio website with blog and admin dashboard built with Laravel 12, React, Inertia.js, and Tailwind CSS. 

![Laravel](https://img.shields.io/badge/Laravel-12-red)
![PHP](https://img.shields.io/badge/PHP-8.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3. 0-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Features

### 🌐 Public Features
- **Landing Page** - Hero section with featured projects and latest blog posts
- **Portfolio Showcase** - Project gallery with filtering by technology/skills
- **Blog System** - Articles with categories, tags, search, and pagination
- **About Page** - Professional bio with skills showcase
- **Contact Form** - Direct message system with email notifications
- **Responsive Design** - Mobile-first design that works on all devices
- **SEO Optimized** - Meta tags, semantic HTML, and clean URLs

### 🔐 Admin Dashboard
- **Dashboard Overview** - Statistics and quick actions
- **Project Management** - Full CRUD for portfolio projects
- **Blog Management** - Rich text editor for creating articles
- **Category & Tag Management** - Organize blog content
- **Skills Management** - Showcase your technical skills
- **Contact Messages** - View and manage incoming messages
- **Site Settings** - Configure site information and social media links
- **Image Upload** - Easy image management for projects and posts

## 🛠️ Tech Stack

- **Backend**: Laravel 12
- **Frontend**: React 18, Inertia.js, TypeScript, Tailwind CSS
- **Authentication**: Laravel Breeze
- **Database**: MySQL
- **Asset Bundler**: Vite
- **Icons**: Heroicons (via Tailwind)

## 📦 Requirements

- PHP 8.3 or higher
- Composer
- Node.js & NPM
- MySQL 5.7+ or MariaDB 10.3+
- Git

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/UlumKtech/portofolio-my.git
cd portofolio-my
```

### 2. Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install NPM dependencies
npm install
```

### 3. Environment Configuration

```bash
# Copy environment file
cp .env.example . env

# Generate application key
php artisan key:generate
```

### 4. Configure Database

Edit `.env` file:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portofolio_ulum
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 5. Create Database

```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE portofolio_ulum CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### 6. Run Migrations & Seeders

```bash
php artisan migrate:fresh --seed
```

This will create all tables and populate with sample data including:
- 1 Admin user
- 6 Blog categories
- 30+ Tags
- 21 Skills
- 6 Sample projects
- 12 Blog posts
- 7 Contact messages
- Site settings

### 7. Create Storage Symlink

```bash
php artisan storage:link
```

### 8. Build Assets

```bash
# Development
npm run dev

# Production
npm run build
```

### 9. Start Development Server

```bash
php artisan serve
```

Visit: `http://localhost:8000`

## 🔑 Default Credentials

**Admin Access:**
- Email: `admin@example.com`
- Password: `password`

**Admin Dashboard**: `http://localhost:8000/admin/dashboard`

⚠️ **Important**: Change these credentials immediately in production!

## 📂 Project Structure

```
portofolio-my/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Admin/          # Admin controllers
│   │   │   ├── HomeController.php
│   │   │   ├── PortfolioController.php
│   │   │   ├── BlogController.php
│   │   │   ├── AboutController.php
│   │   │   └── ContactController.php
│   │   ├── Middleware/
│   │   │   └── IsAdmin.php     # Admin middleware
│   │   └── Requests/           # Form requests
│   ├── Models/                 # Eloquent models
│   ├── Traits/
│   │   └── HandlesFileUploads. php
│   └── Helpers/
│       └── helpers.php         # Helper functions
├── database/
│   ├── migrations/             # Database migrations
│   └── seeders/                # Database seeders
├── resources/
│   ├── views/
│   │   ├── layouts/            # Layouts (app, admin, guest)
│   │   ├── components/         # Blade components
│   │   ├── admin/              # Admin views
│   │   ├── portfolio/          # Portfolio views
│   │   ├── blog/               # Blog views
│   │   ├── home. blade.php
│   │   ├── about.blade.php
│   │   └── contact.blade.php
│   └── css/
│       └── app. css             # Tailwind CSS
├── routes/
│   └── web.php                 # Web routes
└── public/
    └── storage/                # Symlinked storage
```

## 🎯 Key Features Explained

### Soft Deletes
All models use soft deletes, so data is never permanently lost immediately:
```php
// Restore deleted item
$project->restore();

// Permanently delete
$project->forceDelete();

// Query with trashed
Project::withTrashed()->get();
```

### Image Uploads
Images are stored in `storage/app/public/` and accessible via `/storage/`:
```php
// In controller
$path = $request->file('image')->store('projects', 'public');

// In view
<img src="{{ asset('storage/' . $path) }}">
```

### Helper Functions
```php
// Get setting value
setting('site_name', 'Default Name');

// Generate excerpt
excerpt($content, 150);

// Format numbers
format_number(1500); // "1.5K"

// Calculate reading time
reading_time($content); // "5 min read"
```

### Auto Slug Generation
Projects and Blog posts automatically generate slugs from titles:
```php
// Manual slug
$project->slug = 'my-custom-slug';

// Auto-generated
$project->slug = null; // Will auto-generate from title
```

## 🔧 Common Commands

```bash
# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Run migrations
php artisan migrate
php artisan migrate:fresh --seed

# Create new admin user
php artisan tinker
>>> User::create(['name' => 'Admin', 'email' => 'admin@test.com', 'password' => bcrypt('password'), 'role' => 'admin']);

# Queue worker (if using queues)
php artisan queue:work

# Run tests
php artisan test
```

## 📝 Usage Guide

### Adding a New Project
1. Login to admin dashboard
2. Navigate to "Projects" → "New Project"
3. Fill in project details
4. Upload featured image
5. Select technologies/skills
6. Set status to "Published"
7. Click "Create Project"

### Writing a Blog Post
1. Go to "Blog Posts" → "New Post"
2. Write title and content (use rich text editor)
3. Select category and tags
4. Upload featured image
5. Add SEO meta data (optional)
6. Set status and publish date
7. Click "Create Post"

### Managing Contact Messages
1. Navigate to "Messages"
2. Click on any message to view details
3. Message is automatically marked as read
4. Click "Reply" to respond via email
5. Delete spam messages

### Updating Site Settings
1. Go to "Settings"
2. Update site name and bio
3. Upload profile photo
4. Add social media links
5. Click "Save Settings"

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',  // Change primary color
        secondary: '#8B5CF6', // Change secondary color
      }
    }
  }
}
```

### Modify Layouts
Edit layout files in `resources/views/layouts/`:
- `app.blade.php` - Public layout
- `admin.blade.php` - Admin layout
- `guest.blade.php` - Auth layout

### Add New Skill Categories
Edit `SkillSeeder. php` or add directly in admin dashboard. 

## 🐛 Troubleshooting

### Images not displaying
```bash
php artisan storage:link
```

### CSS not loading
```bash
npm run build
php artisan config:clear
```

### Permission errors
```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### Migration errors
```bash
php artisan migrate:fresh --seed
```

### Composer errors
```bash
composer install --ignore-platform-reqs
```

## 🚀 Deployment

### Production Checklist
- [ ] Change `APP_ENV` to `production` in `.env`
- [ ] Set `APP_DEBUG` to `false`
- [ ] Change default admin credentials
- [ ] Configure proper database
- [ ] Setup mail configuration
- [ ] Run `php artisan config:cache`
- [ ] Run `php artisan route:cache`
- [ ] Run `php artisan view:cache`
- [ ] Run `npm run build`
- [ ] Setup SSL certificate
- [ ] Configure backups
- [ ] Setup monitoring

### Environment Variables for Production
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Use strong database password
DB_PASSWORD=strong_random_password

# Configure mail
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
```

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

## 👨‍💻 Author

**Ulum Ktech**
- GitHub: [@UlumKtech](https://github.com/UlumKtech)
- Email: contact@portfolio-ulum.com

## 🙏 Acknowledgments

- [Laravel](https://laravel.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Laravel Breeze](https://laravel.com/docs/starter-kits#laravel-breeze)
- [Heroicons](https://heroicons.com)

## 📸 Screenshots

### Public Homepage
![Homepage](screenshots/homepage.png)

### Admin Dashboard
![Dashboard](screenshots/dashboard.png)

### Blog Management
![Blog](screenshots/blog.png)

---

Made with ❤️ using Laravel & Tailwind CSS
