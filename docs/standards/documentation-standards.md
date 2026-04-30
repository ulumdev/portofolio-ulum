# Standar Dokumentasi

## Tujuan

Dokumen ini menjadi acuan untuk penempatan, penamaan, dan penyusunan dokumentasi di project ini.

## Penempatan Dokumen

- Semua dokumentasi penting dan dokumen hasil generate harus diletakkan di dalam folder `docs/`.
- Dokumen di root project harus dibatasi seminimal mungkin.
- `README.md` di root berfungsi sebagai pintu masuk singkat, bukan tempat dokumentasi lengkap.

## Struktur Folder

- `docs/overview/`
  - ringkasan project utama
- `docs/guides/`
  - panduan setup, instalasi, deployment, dan operasional
- `docs/analysis/`
  - analisis teknis, audit, investigasi, dan hasil review
- `docs/checklists/`
  - checklist implementasi, migrasi, dan validasi
- `docs/standards/`
  - standar dokumentasi dan aturan internal
- `docs/templates/`
  - template dokumen baru untuk menjaga konsistensi format
- `docs/archive/`
  - salinan lama, dokumen historis, atau referensi yang tidak lagi menjadi acuan utama

## Penamaan File

- Gunakan huruf kecil semua.
- Gunakan format `kebab-case`.
- Nama file harus deskriptif dan langsung menjelaskan isi dokumen.

Contoh:

- `project-portfolio-laravel-analysis.md`
- `setup-react-inertia.md`
- `react-inertia-implementation-checklist.md`

## Struktur Isi Dokumen

Untuk dokumen aktif, usahakan memiliki bagian berikut bila relevan:

- judul yang jelas
- konteks singkat atau tujuan dokumen
- status dokumen: aktif atau arsip
- referensi ke dokumen terkait
- isi utama

Jika dokumen baru dibuat dari nol, gunakan template yang tersedia di folder `docs/templates/`.

## Bahasa dan Gaya

- Prioritaskan Bahasa Indonesia untuk dokumentasi aktif project ini.
- Istilah teknis boleh tetap memakai bahasa Inggris bila itu bentuk yang paling umum di codebase.
- Dokumen arsip boleh mempertahankan bahasa aslinya, tetapi harus diberi catatan bahwa dokumen tersebut adalah arsip.

## Dokumen Hasil Generate

- Hasil analisis, audit, checklist, dan dokumentasi generated lainnya harus ditempatkan di folder yang sesuai.
- Jangan menaruh hasil generate penting langsung di root project.
- Jika dokumen generated menjadi referensi jangka panjang, pastikan nama file stabil dan mudah dicari.
- Bila memungkinkan, hasil generate juga mengikuti template dasar agar isi antar dokumen tetap mudah dipindai.

## Dokumen Arsip

- Dokumen di `docs/archive/` tidak boleh diasumsikan masih akurat.
- Tambahkan catatan di bagian atas dokumen untuk menandai bahwa dokumen tersebut bersifat historis.
- Jika isi arsip masih penting, buat versi aktif baru di folder yang sesuai, lalu arahkan pembaca ke versi aktif tersebut.
