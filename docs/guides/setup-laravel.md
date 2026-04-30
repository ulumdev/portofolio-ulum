# Panduan Setup Laravel

Status dokumen: `aktif`  
Tujuan: panduan instalasi project untuk alur Laravel utama.  
Dokumen terkait:

- [Ikhtisar Project](../overview/project-overview.md)
- [Panduan Setup React + Inertia](setup-react-inertia.md)
- [Analisis Project](../analysis/project-portfolio-laravel-analysis.md)

Panduan ini menjelaskan langkah setup project Portfolio Ulum secara bertahap untuk environment lokal.

## Prasyarat

Pastikan software berikut sudah tersedia:

- PHP 8.3 atau lebih baru
- Composer
- Node.js dan NPM
- MySQL atau MariaDB
- Git

Perintah cek versi:

```bash
php -v
composer -V
node -v
npm -v
mysql --version
git --version
```

## Langkah Instalasi

### 1. Clone repository

```bash
git clone https://github.com/UlumKtech/portofolio-my.git
cd portofolio-my
```

### 2. Install dependency PHP

```bash
composer install
```

Jika terjadi masalah requirement:

```bash
composer install --ignore-platform-reqs
```

### 3. Install dependency frontend

```bash
npm install
```

Jika perlu:

```bash
npm cache clean --force
npm install
```

### 4. Siapkan file environment

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Konfigurasi `.env`

Contoh minimum:

```env
APP_NAME="Portfolio Ulum"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portofolio_ulum
DB_USERNAME=root
DB_PASSWORD=your_password

MAIL_MAILER=log
MAIL_FROM_ADDRESS="noreply@portfolio.test"
MAIL_FROM_NAME="${APP_NAME}"
```

### 6. Buat database

Via MySQL command line:

```bash
mysql -u root -p
```

Lalu jalankan:

```sql
CREATE DATABASE portofolio_ulum CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### 7. Jalankan migration dan seeder

```bash
php artisan migrate:fresh --seed
```

Data awal yang umumnya dibuat:

- admin user
- kategori blog
- tag
- skill
- project
- blog post
- experience
- contact message
- site settings

### 8. Buat storage symlink

```bash
php artisan storage:link
```

Jika symlink lama sudah ada:

```bash
rm public/storage
php artisan storage:link
```

### 9. Jalankan asset development

```bash
npm run dev
```

Atau build production:

```bash
npm run build
```

### 10. Jalankan server aplikasi

```bash
php artisan serve
```

URL penting:

- Situs publik: `http://localhost:8000`
- Login admin: `http://localhost:8000/login`
- Dashboard admin: `http://localhost:8000/admin/dashboard`

## Kredensial Default

- Email: `admin@example.com`
- Password: `password`

## Checklist Verifikasi

Setelah setup selesai, pastikan:

- [ ] Homepage dapat diakses
- [ ] Halaman portfolio dapat diakses
- [ ] Halaman blog dapat diakses
- [ ] Halaman about dapat diakses
- [ ] Halaman contact dapat diakses
- [ ] Login admin berhasil
- [ ] Dashboard admin tampil normal
- [ ] Gambar dapat tampil dengan benar
- [ ] Tailwind CSS termuat
- [ ] Tidak ada error fatal di browser

## Masalah Umum dan Solusi

### Gambar tidak tampil

```bash
php artisan storage:link
chmod -R 775 storage bootstrap/cache
```

### CSS tidak termuat

```bash
npm run build
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

### Error migration

```bash
php artisan migrate:fresh --seed
```

### Error koneksi database

Periksa:

- nilai `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`
- service MySQL benar-benar berjalan

### Error `Vite manifest not found`

Jalankan salah satu:

```bash
npm run dev
```

atau:

```bash
npm run build
```

## Tips Development

Perintah yang sering dipakai:

```bash
# Laravel server
php artisan serve

# Vite dev server
npm run dev

# Bersihkan cache
php artisan optimize:clear

# Lihat route
php artisan route:list

# Masuk ke Tinker
php artisan tinker
```

Contoh inspeksi cepat di Tinker:

```php
User::count();
Project::count();
BlogPost::count();
```

## Langkah Lanjut

Setelah instalasi berhasil:

1. Ganti kredensial admin default.
2. Perbarui settings situs.
3. Tambahkan project dan blog post Anda.
4. Sesuaikan daftar skill dan halaman about.
5. Sesuaikan desain jika diperlukan.

## Referensi Tambahan

- [Ikhtisar Project](../overview/project-overview.md)
- [Panduan Setup React + Inertia](setup-react-inertia.md)
- [Analisis Project](../analysis/project-portfolio-laravel-analysis.md)

---

Selamat membangun project.
