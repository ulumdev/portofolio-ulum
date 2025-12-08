# 🚀 React TypeScript + Inertia.js Setup Guide

## Prerequisites
- PHP 8.2+
- Composer
- Node. js 18+
- MySQL/MariaDB

## Installation Steps

### 1.  Clone & Checkout Branch
```bash
git checkout react-version
```

### 2. Install Dependencies
```bash
# PHP dependencies
composer install

# JavaScript dependencies
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env
php artisan key:generate
```

Configure your `. env`:
```env
APP_NAME="Portfolio Ulum"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portofolio_ulum
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 4. Database Setup
```bash
# Create database
mysql -u root -p -e "CREATE DATABASE portofolio_ulum CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Run migrations & seeders
php artisan migrate:fresh --seed
```

### 5. Storage Link
```bash
php artisan storage:link
```

### 6. Build Assets
```bash
# Development (with hot reload)
npm run dev

# Production
npm run build
```

### 7. Start Server
```bash
php artisan serve
```

Visit: http://localhost:8000

## Default Credentials
- **Email:** admin@example.com
- **Password:** password

## Project Structure

```
resources/ts/
├── Components/
│   ├── Common/        # Reusable UI components
│   ├── Admin/         # Admin-specific components
│   └── Public/        # Public-facing components
├── Layouts/
│   ├── AdminLayout.tsx
│   ├── PublicLayout.tsx
│   └── GuestLayout.tsx
├── Pages/
│   ├── Admin/         # Admin pages
│   ├── Public/        # Public pages
│   └── Auth/          # Authentication pages
├── types/             # TypeScript type definitions
└── app.tsx            # Main app entry
```

## Development Commands

```bash
# Run dev server with hot reload
npm run dev

# Build for production
npm run build

# TypeScript type checking
npx tsc --noEmit

# Clear cache
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

## Features Implemented

### ✅ Admin Dashboard
- Statistics overview with cards
- Recent posts & messages
- Modern sidebar navigation
- Responsive design

### ✅ Content Management
- Projects (CRUD with image upload)
- Blog Posts (CRUD with rich content)
- Categories & Tags
- Skills management
- Contact messages
- Site settings

### ✅ Public Pages
- Home page with hero section
- Portfolio showcase with filtering
- Blog with search & pagination
- Category & tag pages
- About page with skills
- Contact form

### ✅ Modern UI/UX
- Tailwind CSS styling
- Headless UI components
- Toast notifications
- Modal dialogs
- Loading states
- Responsive navigation
- Image upload with preview

## Troubleshooting

### Images not displaying
```bash
php artisan storage:link
```

### TypeScript errors
```bash
npm install
npx tsc --noEmit
```

### Vite not hot reloading
```bash
# Stop dev server and restart
npm run dev
```

### Database issues
```bash
php artisan migrate:fresh --seed
```

## Next Steps

1. **Customize Content:**
   - Update site settings in admin
   - Add your projects and blog posts
   - Upload your profile photo

2. **Styling:**
   - Modify colors in `tailwind.config.js`
   - Update layouts as needed

3. **Deployment:**
   - Build production assets: `npm run build`
   - Configure web server (Nginx/Apache)
   - Setup SSL certificate
   - Configure environment variables

## Additional Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang. org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

Made with ❤️ using React TypeScript + Inertia.js
```
