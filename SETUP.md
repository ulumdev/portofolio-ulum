# 📖 Detailed Setup Guide

This guide provides step-by-step instructions for setting up the Portfolio Ulum project.

## Prerequisites

Before starting, ensure you have the following installed:

### Required Software

1. **PHP 8.3+**
   ```bash
   # Check PHP version
   php -v
   ```

2. **Composer**
   ```bash
   # Check Composer version
   composer -V
   ```

3. **Node.js & NPM**
   ```bash
   # Check versions
   node -v
   npm -v
   ```

4.  **MySQL 5.7+ or MariaDB 10.3+**
   ```bash
   # Check MySQL version
   mysql --version
   ```

5. **Git**
   ```bash
   # Check Git version
   git --version
   ```

## Step-by-Step Installation

### 1. Clone Repository

```bash
# Clone the repository
git clone https://github.com/UlumKtech/portofolio-my. git

# Navigate to project directory
cd portofolio-my
```

### 2. Install PHP Dependencies

```bash
composer install
```

**If you encounter errors:**
```bash
# Use this if platform requirements fail
composer install --ignore-platform-reqs

# Or update Composer first
composer self-update
```

### 3. Install Node Dependencies

```bash
npm install
```

**If you encounter errors:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### 4. Environment Setup

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 5. Configure Environment

Edit `.env` file with your settings:

```env
# Application
APP_NAME="Portfolio Ulum"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portofolio_ulum
DB_USERNAME=root
DB_PASSWORD=your_password

# Mail (Optional for development)
MAIL_MAILER=log
MAIL_FROM_ADDRESS="noreply@portfolio. test"
MAIL_FROM_NAME="${APP_NAME}"
```

### 6. Create Database

**Option A: Using MySQL Command Line**
```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE portofolio_ulum CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Verify database created
SHOW DATABASES;

# Exit
EXIT;
```

**Option B: Using phpMyAdmin**
1. Open phpMyAdmin in browser
2. Click "New" in left sidebar
3. Database name: `portofolio_ulum`
4.  Collation: `utf8mb4_unicode_ci`
5.  Click "Create"

### 7. Run Migrations

```bash
# Run migrations
php artisan migrate
```

**Expected output:**
```
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table (XX.XXms)
... 
```

### 8.  Seed Database

```bash
# Run all seeders
php artisan db:seed
```

**Expected output:**
```
Seeding: Database\Seeders\AdminUserSeeder
✅ Admin user created: admin@example.com / password
Seeded:  Database\Seeders\AdminUserSeeder (XX.XXms)
...
```

**Or do it all at once:**
```bash
php artisan migrate:fresh --seed
```

### 9. Create Storage Symlink

```bash
php artisan storage:link
```

**Expected output:**
```
The [public/storage] link has been connected to [storage/app/public]. 
```

**If you get "File already exists" error:**
```bash
# Remove existing symlink
rm public/storage

# Create new symlink
php artisan storage:link
```

### 10. Build Frontend Assets

**Development (with hot reload):**
```bash
npm run dev
```

**Production (optimized):**
```bash
npm run build
```

### 11. Start Development Server

```bash
php artisan serve
```

**Expected output:**
```
Starting Laravel development server: http://127.0.0.1:8000
```

**Custom host/port:**
```bash
php artisan serve --host=0.0.0.0 --port=8080
```

### 12. Access the Application

Open your browser and visit:
- **Public Site**: http://localhost:8000
- **Admin Login**: http://localhost:8000/login
- **Admin Dashboard**: http://localhost:8000/admin/dashboard

**Login credentials:**
- Email: `admin@example.com`
- Password: `password`

## Verification Checklist

After installation, verify everything works:

- [ ] Homepage loads successfully
- [ ] Can navigate to Portfolio page
- [ ] Can navigate to Blog page
- [ ] Can navigate to About page
- [ ] Can navigate to Contact page
- [ ] Can submit contact form
- [ ] Can login to admin dashboard
- [ ] Can view admin dashboard with statistics
- [ ] Can create/edit/delete projects
- [ ] Can create/edit/delete blog posts
- [ ] Images display correctly
- [ ] Tailwind CSS styles are working
- [ ] No console errors in browser

## Common Issues & Solutions

### Issue: "Class 'App\Models\Setting' not found"

**Solution:**
```bash
composer dump-autoload
php artisan config:clear
```

### Issue: Images not displaying

**Solution:**
```bash
# Create symlink
php artisan storage:link

# Check permissions
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

### Issue: CSS not loading

**Solution:**
```bash
# Rebuild assets
npm run build

# Clear cache
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

### Issue: "Access denied for user" (Database)

**Solution:**
1. Check `. env` database credentials
2. Verify MySQL is running
3. Test connection:
   ```bash
   mysql -u root -p
   ```

### Issue: "Vite manifest not found"

**Solution:**
```bash
# Make sure to run
npm run dev
# or
npm run build
```

### Issue: Migration errors

**Solution:**
```bash
# Fresh start
php artisan migrate:fresh --seed

# If still fails, drop database and recreate
DROP DATABASE portofolio_ulum;
CREATE DATABASE portofolio_ulum CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Then migrate again
php artisan migrate:fresh --seed
```

### Issue: Permission denied (Linux/Mac)

**Solution:**
```bash
# Fix permissions
sudo chown -R $USER:$USER . 
chmod -R 775 storage bootstrap/cache

# For web server
sudo chown -R www-data:www-data storage bootstrap/cache
```

## Development Tips

### Watch for file changes
```bash
# In one terminal
php artisan serve

# In another terminal
npm run dev
```

### Clear all caches
```bash
php artisan optimize:clear
```

### View routes
```bash
php artisan route:list
```

### Database inspection
```bash
php artisan tinker

# Then try:
>>> User::count()
>>> Project::count()
>>> BlogPost::count()
```

### Create new admin user
```bash
php artisan tinker

>>> use App\Models\User;
>>> User::create([
...   'name' => 'New Admin',
...   'email' => 'newadmin@example.com',
...   'password' => bcrypt('password'),
...   'role' => 'admin',
...    'email_verified_at' => now()
... ]);
```

## Next Steps

After successful installation:

1. **Change Default Credentials**
   - Login to admin dashboard
   - Go to Profile settings
   - Update email and password

2. **Customize Settings**
   - Navigate to Settings page
   - Update site name and bio
   - Upload profile photo
   - Add social media links

3.  **Add Your Content**
   - Add your own projects
   - Write blog posts
   - Update skills
   - Customize about page

4. **Customize Design**
   - Modify Tailwind colors in `tailwind.config.js`
   - Update layouts in `resources/views/layouts/`
   - Add custom CSS in `resources/css/app.css`

## Production Deployment

For production deployment, see the main `README.md` file, section "🚀 Deployment".

## Getting Help

If you encounter issues:

1. Check this guide's troubleshooting section
2. Review Laravel documentation: https://laravel.com/docs
3. Check GitHub issues
4. Contact: contact@portfolio-ulum.com

---

Happy coding! 🚀
