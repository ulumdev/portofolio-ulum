# Analisis Menyeluruh Project Portfolio Laravel

Tanggal analisis: `2026-04-30`  
Status dokumen: `aktif`  
Basis analisis: struktur repo, route aktif, controller, model, migration, dependency manifest, dan health check lokal.  
Dokumen terkait:

- [Ikhtisar Project](../overview/project-overview.md)
- [Panduan Setup Laravel](../guides/setup-laravel.md)
- [Standar Dokumentasi](../standards/documentation-standards.md)

## Ringkasan Eksekutif

Project ini adalah aplikasi portfolio full-stack berbasis `Laravel 12` yang saat ini **aktif berjalan dengan pola Laravel + Inertia + React + TypeScript**, tetapi masih menyimpan jejak arsitektur generasi lama berbasis Blade. Secara fungsional, fitur publik dan admin utama sudah cukup lengkap, namun repo masih berada dalam kondisi **hybrid/transisi**, sehingga ada beberapa mismatch penting:

- UI aktif dominan memakai `Inertia::render(...)` dan page React di `resources/ts/Pages`.
- Banyak Blade view lama masih tersimpan dan sebagian layout Blade masih menunjuk entrypoint lama `resources/js/app.js`.
- Ada route aktif yang tidak sinkron dengan handler/view yang tersedia.
- Build frontend saat ini gagal karena error TypeScript konkret.
- Test suite gagal dijalankan di environment ini karena driver SQLite tidak tersedia.

Secara umum, project ini **layak dipahami sebagai aplikasi portfolio + blog + admin dashboard yang sudah berfungsi secara konsep**, tetapi **belum sepenuhnya rapi sebagai codebase produksi yang konsisten**.

## Sumber Verifikasi

Analisis ini diverifikasi dari sumber berikut:

- `composer.json`
- `package.json`
- `routes/web.php`, `routes/auth.php`
- `bootstrap/app.php`
- `resources/views/app.blade.php`
- `resources/ts/app.tsx`
- `app/Http/Controllers/**/*`
- `app/Models/*.php`
- `database/migrations/*.php`
- `resources/ts/**/*`
- hasil command:
  - `php artisan about`
  - `php artisan route:list --except-vendor`
  - `php artisan test`
  - `npm run build`
  - pencarian import/pemakaian dependency via `rg`

## 1. Frontend

### Stack aktif

Frontend aktif saat ini:

- `Laravel 12`
- `Inertia.js`
- `React 18`
- `TypeScript`
- `Tailwind CSS`
- `Vite`

Entrypoint aktif:

- `resources/ts/app.tsx`
- root view Inertia: `resources/views/app.blade.php`

Pola bootstrapping:

- `bootstrap/app.php` mendaftarkan `HandleInertiaRequests`
- `resources/views/app.blade.php` memuat `@vite(['resources/css/app.css', 'resources/ts/app.tsx'])`
- page di-resolve dari `resources/ts/Pages/**/*.tsx`

### Struktur UI utama

#### Public pages aktif

- `Public/Home`
- `Public/Portofolio/Index`
- `Public/Portofolio/Show`
- `Public/Blog/Index`
- `Public/Blog/Show`
- `Public/Blog/Category`
- `Public/Blog/Tag`
- `Public/About`
- `Public/Contact`

#### Admin pages aktif

- `Admin/Dashboard`
- `Admin/Projects/Index`
- `Admin/Projects/Create`
- `Admin/Projects/Edit`
- `Admin/Blog/Index`
- `Admin/Blog/Create`
- `Admin/Blog/Edit`
- `Admin/Categories/Index`
- `Admin/Tags/Index`
- `Admin/Skills/Index`
- `Admin/Experiences/Index`
- `Admin/Experiences/Create`
- `Admin/Experiences/Edit`
- `Admin/Messages/Index`
- `Admin/Messages/Show`
- `Admin/Settings/Index`

#### Shared layout dan component penting

- layout publik: `resources/ts/Layouts/PublicLayout.tsx`
- layout admin: `resources/ts/Layouts/AdminLayout.tsx`
- komponen umum: navbar, footer, sidebar, header, toast, modal, loading, confirm dialog
- context tema: `resources/ts/Contexts/ThemeContext.tsx`

### Kondisi hybrid frontend

Repo masih hybrid dan belum benar-benar bersih dari generasi lama:

- Implementasi aktif dominan memakai `resources/ts/*`.
- Folder `resources/js/*` masih ada dan tetap memuat bootstrap axios lama.
- Banyak Blade view lama masih ada di `resources/views/*`.
- Beberapa layout Blade lama masih menunjuk `@vite(['resources/css/app.css', 'resources/js/app.js'])`, bukan entrypoint TypeScript baru.

Implikasinya:

- maintainer baru bisa bingung membedakan UI aktif vs UI arsip
- potensi drift antara Blade dan React cukup tinggi
- dependency lama lebih mudah tertinggal tanpa sengaja

### Temuan frontend terverifikasi

#### Build frontend gagal

Hasil `npm run build`:

- proses berhenti di TypeScript error
- penyebab konkret ada di `resources/ts/Components/Public/UI/SectionHero.tsx`
- props `badgeText` dan `badgeIcon` dideklarasikan tetapi tidak dipakai karena blok render badge dikomentari

Error yang terverifikasi:

- `TS6133: 'badgeText' is declared but its value is never read`
- `TS6133: 'badgeIcon' is declared but its value is never read`

#### Dependency frontend yang aktif dipakai jelas

- `@inertiajs/react`
- `react`
- `react-dom`
- `typescript`
- `vite`
- `tailwindcss`
- `@heroicons/react`
- `@headlessui/react`
- `dompurify`
- `axios`
- `react-icons`

#### Dependency yang dipakai sebagian / hanya level type

- `ziggy-js`
  - terdeteksi di type declaration (`resources/ts/types/index.ts`, `resources/ts/types/global.d.ts`)
  - tidak terlihat pemakaian runtime route helper di page/component aktif

#### Dependency yang berindikasi leftover atau belum terintegrasi

Tidak ditemukan pemakaian aktif di `resources`, `app`, `routes`, `tests` untuk:

- `@tiptap/react`
- `@tiptap/starter-kit`
- `react-dropzone`
- `recharts`
- `zod`
- `@inertiajs/inertia`

Ini mengindikasikan dependency tersebut kemungkinan:

- rencana fitur yang belum selesai
- bekas eksperimen
- sisa migrasi dari implementasi sebelumnya

## 2. Backend

### Route publik aktif

Route publik yang aktif dan terverifikasi:

- `/` → `HomeController@index`
- `/about` → `AboutController@index`
- `/contact` → `ContactController@index`
- `POST /contact` → `ContactController@store`
- `/portofolio` → `PortofolioController@index`
- `/portofolio/{project:slug}` → `PortofolioController@show`
- `/blog` → `BlogController@index`
- `/blog/search` → `BlogController@search`
- `/blog/category/{category:slug}` → `BlogController@category`
- `/blog/tag/{tag:slug}` → `BlogController@tag`
- `/blog/{post:slug}` → `BlogController@show`

### Route admin aktif

Semua route admin berjalan di prefix `/admin` dengan middleware:

- `auth`
- `isAdmin`

Modul admin aktif:

- dashboard
- projects
- blog posts
- categories
- tags
- skills
- experiences
- messages
- settings

### Pola controller

Mayoritas controller publik dan admin saat ini:

- memakai `Inertia::render(...)`
- mengembalikan page React di `resources/ts/Pages`
- menggunakan Eloquent query builder
- menggunakan Form Request untuk sebagian resource penting

Validasi berbasis Form Request terdeteksi antara lain pada:

- project
- blog post
- category
- tag
- skill
- contact message
- auth login

### Mismatch backend penting

#### 1. Flow `/profile` dinonaktifkan tetapi artefaknya masih ada

Route `/profile` di `routes/web.php` sedang dikomentari, tetapi artefak berikut masih ada:

- `app/Http/Controllers/ProfileController.php`
- `resources/views/profile/*`
- `tests/Feature/ProfileTest.php`
- beberapa test auth yang masih mengandalkan flow profile

Implikasi:

- repo menyimpan fitur yang tidak lagi aktif
- test dan controller tidak lagi merepresentasikan route aktual

#### 2. Beberapa auth controller masih redirect ke route Breeze lama

Beberapa controller auth masih merujuk `route('dashboard')`, misalnya:

- `RegisteredUserController`
- `ConfirmablePasswordController`
- `VerifyEmailController`
- `EmailVerificationPromptController`
- `EmailVerificationNotificationController`

Padahal route aktif yang relevan saat ini adalah:

- `admin.dashboard`
- `home`

`AuthenticatedSessionController` sudah sebagian disesuaikan:

- admin diarahkan ke `admin.dashboard`
- user biasa diarahkan ke `home`

Tetapi flow Breeze lain masih belum sinkron penuh.

#### 3. `CategoryController`, `TagController`, `SkillController` menyimpan method/page orphan

Di `routes/web.php`, resource berikut dibatasi dengan `except(['create', 'edit', 'show'])`:

- `categories`
- `tags`
- `skills`

Namun controller masih memiliki method:

- `create()`
- `edit()`
- `show()`

Dan masih ada referensi Inertia page untuk create/edit/show yang tidak lagi punya route aktif. Sementara implementasi UI aktif justru memakai modal inline pada halaman index:

- `resources/ts/Pages/Admin/Categories/Index.tsx`
- `resources/ts/Pages/Admin/Tags/Index.tsx`
- `resources/ts/Pages/Admin/Skills/Index.tsx`

#### 4. Ada route admin aktif yang berpotensi broken

Temuan runtime-risk tambahan:

- `admin.experiences.show` aktif di route list, tetapi `ExperienceController` tidak memiliki method `show()`
- `admin.projects.show` aktif, tetapi `ProjectController@show` mengembalikan `view('admin.projects.show')` sementara file view tersebut tidak terdeteksi
- `admin.blog.show` aktif, tetapi `BlogController@show` mengembalikan `view('admin.blog.show')` sementara file view tersebut tidak terdeteksi

Ini lebih serius daripada sekadar dead code, karena menyentuh route aktif yang berpotensi error saat diakses.

#### 5. `ContactController@index` mengandalkan shared props yang belum lengkap

`ContactController@index` hanya mengembalikan:

- `Inertia::render('Public/Contact')`

Halaman `Public/Contact.tsx` mengharapkan field settings seperti:

- `email`
- `phone`
- `address`
- `github_url`
- `linkedin_url`
- `twitter_url`

Tetapi shared props global dari `HandleInertiaRequests` hanya membagikan:

- `site_name`
- `site_tagline`
- `bio`
- `github_url`
- `linkedin_url`
- `twitter_url`
- `email`

Akibatnya:

- `phone` dan `address` tidak benar-benar dijamin tersedia
- halaman contact bergantung pada fallback placeholder

## 3. Database

### Model utama

Model domain utama yang terdeteksi:

- `User`
- `Project`
- `BlogPost`
- `Category`
- `Tag`
- `Skill`
- `Experience`
- `ContactMessage`
- `Setting`

### Relasi inti

Relasi yang terverifikasi dari model:

- `Project belongsTo User`
- `Project belongsToMany Skill`
- `BlogPost belongsTo User`
- `BlogPost belongsTo Category`
- `BlogPost belongsToMany Tag`
- `Category hasMany BlogPost`
- `Skill belongsToMany Project`
- `Tag belongsToMany BlogPost`
- `User hasMany Project`
- `User hasMany BlogPost`

### Pola domain

#### Route model binding berbasis slug

Model berikut memakai `getRouteKeyName(): 'slug'`:

- `Project`
- `BlogPost`
- `Category`
- `Tag`

Artinya URL publik memang dirancang memakai slug, bukan id.

#### Soft delete

Soft delete dipakai pada hampir semua entitas utama:

- `User`
- `Project`
- `BlogPost`
- `Category`
- `Tag`
- `Skill`
- `Experience`
- `ContactMessage`
- `Setting`

#### Key-value settings + cache

`Setting` disimpan sebagai pasangan `key` / `value`, lalu diakses melalui:

- `Setting::get(...)`
- `Setting::set(...)`

Pengambilan setting memakai cache `remember`, sehingga ada lapisan optimasi baca.

### Tabel dari migration

#### Tabel domain

- `users`
- `projects`
- `blog_posts`
- `categories`
- `tags`
- `skills`
- `experiences`
- `contact_messages`
- `settings`

#### Pivot table

- `project_skill`
- `blog_post_tag`

#### Tabel framework/infrastruktur

- `password_reset_tokens`
- `sessions`
- `cache`
- `cache_locks`
- `jobs`
- `job_batches`
- `failed_jobs`

### Kontrak domain penting

- status project/blog: `draft | published | archived`
- proficiency skill: `beginner | intermediate | advanced | expert`
- role user: `admin | user`

### Desain database vs runtime

#### Dari sisi desain aplikasi

`config/database.php` menyediakan koneksi:

- `sqlite`
- `mysql`
- `mariadb`
- `pgsql`
- `sqlsrv`

#### Dari sisi runtime lokal saat inspeksi

Hasil `php artisan about` menunjukkan:

- database aktif: `mysql`
- cache: `database`
- session: `database`
- queue: `database`

#### Hal yang tidak tervalidasi penuh

Kondisi database aktif **tidak bisa diverifikasi penuh** di environment ini, karena:

- `php artisan db:show --counts` gagal konek ke database aktif
- command berbasis inspeksi SQLite CLI juga tidak bisa dipakai karena utilitas `sqlite3` tidak tersedia di shell ini

Kesimpulan:

- struktur database **terkonfirmasi** dari migration dan model
- isi database runtime **tidak tervalidasi penuh**

## 4. Dependency

### Inventaris backend dari `composer.json`

#### Dependency inti

- `php:^8.2`
- `laravel/framework:^12.0`
- `inertiajs/inertia-laravel:^2.0`
- `laravel/tinker:^2.10.1`

#### Dependency development

- `fakerphp/faker`
- `laravel/breeze`
- `laravel/pail`
- `laravel/pint`
- `laravel/sail`
- `mockery/mockery`
- `nunomaduro/collision`
- `phpunit/phpunit`

### Inventaris frontend dari `package.json`

#### Dependency inti aktif

- `react`
- `react-dom`
- `typescript`
- `vite`
- `@vitejs/plugin-react`
- `@inertiajs/react`
- `laravel-vite-plugin`
- `tailwindcss`
- `@tailwindcss/forms`
- `@tailwindcss/typography`
- `@heroicons/react`
- `@headlessui/react`

#### Utility yang aktif dipakai

- `dompurify`
- `axios`
- `react-icons`

#### Utility yang tampak hanya dipakai parsial / type-level

- `ziggy-js`

#### Berindikasi leftover / belum terintegrasi

- `@tiptap/react`
- `@tiptap/starter-kit`
- `react-dropzone`
- `recharts`
- `zod`
- `@inertiajs/inertia`

### Status dependency per kategori

| Dependency | Status | Catatan |
| --- | --- | --- |
| Laravel, Inertia Laravel, React, TS, Tailwind, Vite | Aktif | Menjadi fondasi stack utama |
| Headless UI, Heroicons, DOMPurify, axios, react-icons | Aktif | Terlihat dipakai langsung di page/component |
| ziggy-js | Parsial | Terdeteksi di type declaration, tidak tampak dipakai aktif di runtime |
| Tiptap, Dropzone, Recharts, Zod, @inertiajs/inertia | Indikasi leftover | Tidak terdeteksi pemakaian aktif di kode aplikasi |

### Duplikasi generasi stack

Codebase memperlihatkan dua generasi frontend:

- generasi lama: `resources/js/*` + Blade
- generasi aktif: `resources/ts/*` + Inertia React

Ini adalah technical debt yang belum dibereskan sepenuhnya.

## 5. Fitur

### Fitur publik yang benar-benar aktif

#### 1. Landing/Home

Terhubung melalui:

- route `/`
- `HomeController@index`
- page `Public/Home`

Data yang dibawa:

- featured projects
- latest blog posts

#### 2. Portfolio

Terhubung melalui:

- route `/portofolio`
- `PortofolioController@index`
- page `Public/Portofolio/Index`

Kemampuan aktif:

- daftar project published
- filter berdasarkan skill
- pagination

Detail project:

- route `/portofolio/{project:slug}`
- `PortofolioController@show`
- page `Public/Portofolio/Show`

#### 3. Blog

Terhubung melalui:

- route `/blog`
- `BlogController@index`
- page `Public/Blog/Index`

Kemampuan aktif:

- list post published
- search
- filter category
- filter tag
- detail post
- related posts
- increment views pada detail post

#### 4. About

Terhubung melalui:

- route `/about`
- `AboutController@index`
- page `Public/About`

Kemampuan aktif:

- menampilkan profile/settings
- daftar skill
- daftar experience

#### 5. Contact

Terhubung melalui:

- route `GET /contact`
- route `POST /contact`
- `ContactController@index`
- `ContactController@store`
- page `Public/Contact`

Kemampuan aktif:

- form kontak
- validasi input
- penyimpanan message ke tabel `contact_messages`

### Fitur admin yang benar-benar aktif

#### 1. Dashboard

- statistik project, blog post, views, message, experience
- recent posts
- recent messages

#### 2. Project management

- list
- create
- edit
- delete
- upload featured image
- publish/draft state
- relasi skills

#### 3. Blog management

- list
- create
- edit
- delete
- upload featured image
- category
- tags
- publish/draft state

#### 4. Experiences management

- list
- create
- edit
- delete
- upload company logo

#### 5. Categories, tags, skills

Fitur ini aktif, tetapi dengan pola **inline management** di halaman index:

- create via modal
- edit via modal
- delete langsung

#### 6. Contact messages

- inbox messages
- filter read/unread
- show detail
- auto mark-as-read saat dibuka
- delete

#### 7. Settings

- update site name
- bio
- social links
- email
- upload profile photo

### Fitur yang ada di repo tetapi belum rapi / tidak sepenuhnya aktif

- profile management Breeze
- register flow Breeze
- banyak Blade page lama
- page create/edit/show React untuk resource yang route-nya sudah dikecualikan
- admin show routes yang belum sinkron dengan template/handler

### Sumber verifikasi fitur

Setiap fitur di atas diverifikasi dari kombinasi:

- route aktif
- controller aktif
- page React yang dirender
- model/migration yang mendukung data

## 6. Interface dan Kontrak

### Inertia shared props

`HandleInertiaRequests` membagikan:

#### `auth.user`

- `id`
- `name`
- `email`
- `role`

#### `flash`

- `success`
- `error`
- `warning`
- `info`

#### `settings`

- `site_name`
- `site_tagline`
- `bio`
- `github_url`
- `linkedin_url`
- `twitter_url`
- `email`

### Mismatch type penting

Frontend `PageProps.settings` di `resources/ts/types/index.ts` mengasumsikan field lebih kaya, misalnya:

- `profile_photo`
- `site_description`
- `instagram_url`
- `address`
- `phone`
- `projects_completed`
- `years_experience`
- `happy_clients`

Tetapi shared props backend global tidak selalu menyediakan field tersebut.

Dampaknya:

- type frontend lebih optimistis daripada data backend aktual
- halaman tertentu bergantung pada fallback
- potensi bug data-missing lebih tinggi

## 7. Health Check dan Risiko

### Hasil verifikasi teknis aktual

#### `php artisan about`

Terverifikasi:

- Laravel `12.41.1`
- PHP `8.4.20`
- environment `local`
- debug mode aktif
- cache/session/queue berbasis database
- database aktif diarahkan ke `mysql`

#### `php artisan route:list --except-vendor`

Berhasil dan menjadi sumber utama pemetaan fitur aktif.

#### `php artisan test`

Gagal.

Penyebab utama yang terverifikasi:

- environment test memakai koneksi `sqlite`
- driver SQLite PHP tidak tersedia
- error: `could not find driver`

Konsekuensinya:

- test suite saat ini belum bisa dijadikan indikator kesehatan aplikasi di environment ini

#### `npm run build`

Gagal.

Penyebab konkret:

- TypeScript error pada `SectionHero.tsx`
- props `badgeText` dan `badgeIcon` tidak digunakan

#### `php artisan db:show --counts`

Gagal.

Penyebab yang terlihat:

- koneksi database aktif tidak berhasil dibuka pada environment inspeksi ini

### Klasifikasi risiko

#### Risiko operasional environment

Tingkat: tinggi

- test suite tidak bisa berjalan
- inspeksi database runtime tidak bisa dilakukan penuh
- cache/session/queue mengandalkan DB aktif

#### Risiko maintainability akibat transisi Blade ke Inertia

Tingkat: tinggi

- ada dua generasi frontend dalam satu repo
- entrypoint lama dan baru hidup berdampingan
- ada view, layout, dan controller yang tidak seragam

#### Risiko broken flow auth/profile

Tingkat: tinggi

- beberapa auth redirect masih memakai route Breeze lama
- route profile nonaktif tetapi artefaknya masih ada

#### Risiko broken route admin

Tingkat: tinggi

- `admin.experiences.show` aktif tanpa method `show()`
- `admin.projects.show` dan `admin.blog.show` mengarah ke view yang tidak terdeteksi

#### Risiko dead code / dependency

Tingkat: sedang

- ada page/controller orphan
- ada package yang tampak tidak dipakai

#### Risiko ketidaksinkronan type/shared props/settings

Tingkat: sedang

- type frontend lebih luas daripada payload backend aktual
- halaman contact/about tidak konsisten dalam sumber data settings

## 8. Kesimpulan

Codebase ini sudah punya fondasi produk yang jelas:

- website portfolio publik
- sistem blog
- dashboard admin
- manajemen konten inti

Namun kondisi aktual repo menunjukkan bahwa project masih berada di fase **migrasi dan perapihan arsitektur**. Fokus utama yang paling rasional setelah analisis ini bukan menambah fitur baru, melainkan:

1. menyamakan route, controller, page, dan view aktif
2. membersihkan sisa Blade/JS/dependency yang tidak lagi dipakai
3. menormalkan flow auth dan profile
4. memperbaiki build frontend
5. menstabilkan environment test dan database

Jika dilihat dari scope, ini bukan project kecil. Secara praktik, repo ini sudah menyerupai **produk portfolio CMS mini** dengan dua muka:

- public-facing showcase
- admin content management panel

Secara arsitektur, nilainya sudah cukup baik untuk dikembangkan lebih lanjut, tetapi sebelum ekspansi fitur sebaiknya technical debt transisinya diselesaikan terlebih dahulu.
