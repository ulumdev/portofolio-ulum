# Panduan Setup React + Inertia

Status dokumen: `aktif`  
Tujuan: panduan setup stack React + TypeScript + Inertia yang digunakan di frontend aktif.  
Dokumen terkait:

- [Ikhtisar Project](../overview/project-overview.md)
- [Panduan Setup Laravel](setup-laravel.md)
- [Analisis Project](../analysis/project-portfolio-laravel-analysis.md)

Panduan ini berfokus pada sisi frontend aktif project, yaitu React, TypeScript, dan Inertia.js.

## Prasyarat

- PHP 8.2+
- Composer
- Node.js 18+
- MySQL atau MariaDB

## Langkah Instalasi

### 1. Pastikan branch yang benar

Jika Anda bekerja pada branch khusus React, checkout branch yang sesuai:

```bash
git checkout react-version
```

Jika project aktif Anda sudah berada di branch yang benar, langkah ini bisa dilewati.

### 2. Install dependency

```bash
# Dependency PHP
composer install

# Dependency JavaScript
npm install
```

### 3. Siapkan environment

```bash
cp .env.example .env
php artisan key:generate
```

Contoh konfigurasi minimum:

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

### 4. Siapkan database

```bash
# Buat database
mysql -u root -p -e "CREATE DATABASE portofolio_ulum CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Jalankan migration dan seeder
php artisan migrate:fresh --seed
```

### 5. Buat storage link

```bash
php artisan storage:link
```

### 6. Jalankan asset frontend

```bash
# Development, dengan hot reload
npm run dev

# Production build
npm run build
```

### 7. Jalankan server aplikasi

```bash
php artisan serve
```

URL akses:

- Situs publik: `http://localhost:8000`
- Login admin: `http://localhost:8000/login`
- Dashboard admin: `http://localhost:8000/admin/dashboard`

## Kredensial Default

- Email: `admin@example.com`
- Password: `password`

## Struktur Frontend Aktif

```text
resources/ts/
├── Components/
│   ├── Common/        # Komponen UI yang dapat dipakai ulang
│   ├── Admin/         # Komponen khusus admin
│   └── Public/        # Komponen area publik
├── Layouts/
│   ├── AdminLayout.tsx
│   ├── PublicLayout.tsx
│   └── GuestLayout.tsx
├── Pages/
│   ├── Admin/         # Halaman admin
│   ├── Public/        # Halaman publik
│   └── Auth/          # Halaman autentikasi
├── types/             # Definisi tipe TypeScript
└── app.tsx            # Entrypoint utama aplikasi
```

## Perintah Development

```bash
# Jalankan Vite dev server
npm run dev

# Build asset production
npm run build

# Type checking TypeScript
npx tsc --noEmit

# Bersihkan cache Laravel
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

## Fitur Frontend yang Sudah Diimplementasikan

### Dashboard Admin

- Card statistik
- Recent posts dan recent messages
- Sidebar navigation
- Layout admin responsif

### Manajemen Konten

- CRUD project dengan upload gambar
- Blog post CRUD
- Categories dan tags
- Skill management
- Contact messages
- Site settings

### Halaman Publik

- Home page
- Portfolio index dan detail
- Blog index, detail, category, dan tag
- About page
- Contact page

### Pengalaman UI

- Styling berbasis Tailwind CSS
- Headless UI component
- Toast notification
- Modal dialog
- Loading state
- Responsive navigation

## Troubleshooting

### Gambar tidak tampil

```bash
php artisan storage:link
```

### Error TypeScript

```bash
npm install
npx tsc --noEmit
```

### Vite tidak hot reload

```bash
npm run dev
```

Jika perlu, hentikan proses lalu jalankan ulang.

### Masalah database

```bash
php artisan migrate:fresh --seed
```

## Langkah Lanjut

1. Update site settings dari admin panel.
2. Tambahkan project dan blog post Anda.
3. Upload foto profil dan media visual project.
4. Sesuaikan warna atau layout bila diperlukan.
5. Jalankan build production sebelum deploy.

## Referensi Tambahan

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

Dibuat menggunakan React, TypeScript, dan Inertia.js.
