# 🎨 Portfolio Ulum - React TypeScript Edition

Modern portfolio website with admin dashboard built with Laravel 12, React 18, TypeScript, and Inertia.js. 

![Laravel](https://img.shields.io/badge/Laravel-12-red)
![React](https://img. shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Inertia.js](https://img. shields.io/badge/Inertia.js-2.0-purple)

## 🚀 Quick Start

```bash
# Install dependencies
composer install
npm install

# Setup environment
cp .env.example . env
php artisan key:generate

# Setup database
php artisan migrate:fresh --seed
php artisan storage:link

# Start development
npm run dev         # Terminal 1
php artisan serve   # Terminal 2
```

Visit: http://localhost:8000

**Default Admin:**
- Email: admin@example. com
- Password: password

## 📦 Tech Stack

- **Backend:** Laravel 12 (PHP 8.2+)
- **Frontend:** React 18 with TypeScript
- **Bridge:** Inertia.js 2.0
- **Styling:** Tailwind CSS 3
- **UI Components:** Headless UI
- **Icons:** Heroicons
- **Build Tool:** Vite 7

## ✨ Features

### Admin Dashboard
- 📊 Statistics overview
- 📁 Projects management (CRUD)
- 📝 Blog management
- 🏷️ Categories & tags
- 💪 Skills showcase
- 📧 Contact messages
- ⚙️ Site settings
- 🖼️ Image uploads

### Public Area
- 🏠 Modern homepage
- 💼 Portfolio showcase
- 📖 Blog with search
- 👤 About page
- 📬 Contact form
- 🔍 SEO optimized

## 📁 Project Structure

```
├── app/
│   └── Http/Controllers/    # Laravel controllers
├── resources/
│   ├── ts/                  # TypeScript/React code
│   │   ├── Components/      # React components
│   │   ├── Layouts/         # Page layouts
│   │   ├── Pages/           # Page components
│   │   └── types/           # TypeScript types
│   └── css/                 # Stylesheets
├── routes/web.php           # Routes
└── database/
    ├── migrations/          # Database migrations
    └── seeders/             # Database seeders
```

## 🛠️ Development

```bash
# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Type checking
npx tsc --noEmit

# Laravel commands
php artisan migrate
php artisan  db:seed
php artisan storage:link
```

## 📸 Screenshots

### Admin Dashboard
Modern, clean interface with statistics and quick actions. 

### Public Homepage
Responsive design with hero section and featured content.

## 🔒 Security

- Authentication via Laravel Breeze
- Admin middleware protection
- CSRF protection
- Input validation
- XSS prevention

## 🌐 Deployment

See [SETUP-REACT.md](SETUP-REACT.md) for detailed deployment instructions.

## 📄 License

MIT License

## 🤝 Contributing

Contributions welcome! Please open an issue or PR. 

## 👨‍💻 Author

**Ulum Ktech**
- GitHub: [@ulumdev](https://github.com/ulumdev)

---

Built with ❤️ using Laravel + React + TypeScript
```
