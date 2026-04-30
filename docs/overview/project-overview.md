# Ikhtisar Project Portfolio Ulum

Status dokumen: `aktif`  
Tujuan: memberi gambaran umum project, stack utama, fitur inti, dan jalur setup awal.  
Dokumen terkait:

- [Panduan Setup Laravel](../guides/setup-laravel.md)
- [Panduan Setup React + Inertia](../guides/setup-react-inertia.md)
- [Analisis Project](../analysis/project-portfolio-laravel-analysis.md)

Project ini adalah website portfolio full-stack dengan blog dan dashboard admin, dibangun menggunakan Laravel 12, React, Inertia.js, TypeScript, dan Tailwind CSS.

## Ringkasan Stack

- Backend: Laravel 12
- Frontend aktif: React 18 + Inertia.js + TypeScript
- Styling: Tailwind CSS
- Build tool: Vite
- Autentikasi: Laravel Breeze
- Database utama yang didokumentasikan: MySQL atau MariaDB

## Fitur Inti

### Area Publik

- Landing page dengan featured project dan artikel terbaru
- Halaman portfolio dengan daftar dan detail project
- Blog dengan kategori, tag, pencarian, dan detail artikel
- Halaman about dengan profil, skill, dan experience
- Contact form untuk menyimpan pesan pengunjung

### Area Admin

- Dashboard statistik
- CRUD project
- CRUD blog post
- Manajemen kategori, tag, dan skill
- Manajemen experience
- Inbox contact message
- Pengaturan situs

## Struktur Project Singkat

Struktur utama yang paling relevan:

```text
app/
  Http/
  Models/
  Helpers/
database/
  migrations/
  seeders/
resources/
  ts/
  views/
  css/
routes/
  web.php
docs/
  overview/
  guides/
  analysis/
  checklists/
  standards/
  archive/
```

Catatan penting:

- Frontend aktif saat ini berada di `resources/ts/`.
- Repo masih menyimpan artefak Blade lama di `resources/views/`.
- Analisis lengkap kondisi hybrid repo tersedia di dokumen analisis.

## Kebutuhan Sistem

- PHP 8.3 atau lebih baru
- Composer
- Node.js dan NPM
- MySQL 5.7+ atau MariaDB 10.3+
- Git

## Jalur Setup Cepat

Untuk setup standar, gunakan alur berikut:

1. Install dependency PHP dan NPM.
2. Copy `.env.example` menjadi `.env`.
3. Generate application key.
4. Buat database dan isi kredensial di `.env`.
5. Jalankan migration dan seeder.
6. Buat storage symlink.
7. Jalankan `npm run dev` dan `php artisan serve`.

Panduan detail tersedia di:

- [Panduan Setup Laravel](../guides/setup-laravel.md)
- [Panduan Setup React + Inertia](../guides/setup-react-inertia.md)

## Kredensial Default

Kredensial admin default yang terdokumentasi:

- Email: `admin@example.com`
- Password: `password`

URL penting:

- Situs publik: `http://localhost:8000`
- Login admin: `http://localhost:8000/login`
- Dashboard admin: `http://localhost:8000/admin/dashboard`

⚠️ Ganti kredensial default sebelum dipakai di environment production.

## Perintah Umum

```bash
# Jalankan development server Laravel
php artisan serve

# Jalankan Vite dev server
npm run dev

# Build asset production
npm run build

# Jalankan migration dan seeder
php artisan migrate:fresh --seed

# Buat storage symlink
php artisan storage:link

# Jalankan test
php artisan test
```

## Catatan Penting

- Nama domain route `portofolio` dipertahankan sesuai kode project.
- Repo saat ini masih berada dalam kondisi transisi Blade ke Inertia React.
- Untuk penjelasan risiko, mismatch route, dependency, dan health check, lihat dokumen analisis.

## Referensi Lanjutan

- [Analisis Project](../analysis/project-portfolio-laravel-analysis.md)
- [Checklist Implementasi React + Inertia](../checklists/react-inertia-implementation-checklist.md)
- [Standar Dokumentasi](../standards/documentation-standards.md)
