<?php

// PUBLIC CONTROLLERS
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\PortofolioController;
// use App\Http\Controllers\BlogController as ControllersBlogController;
use App\Http\Controllers\BlogController;
// ADMIN CONTROLLERS
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ContactMessageController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\BlogController as AdminBlogController;
use App\Http\Controllers\Admin\EducationController;
use App\Http\Controllers\Admin\ExperienceController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\TagController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Homepage
Route::get('/', [HomeController::class, 'index'])->name('home');

// Portofolio Routes
Route::prefix('portofolio')->name('portofolio.')->group(function () {
    Route::get('/', [PortofolioController::class, 'index'])->name('index');
    Route::get('/{project:slug}', [PortofolioController::class, 'show'])->name('show');
});

// Blog Routes
Route::prefix('blog')->name('blog.')->group(function () {
    Route::get('/', [BlogController::class, 'index'])->name('index');
    Route::get('/search', [BlogController::class, 'search'])->name('search');
    Route::get('/category/{category:slug}', [BlogController::class, 'category'])->name('category');
    Route::get('/tag/{tag:slug}', [BlogController::class, 'tag'])->name('tag');
    Route::get('/{post:slug}', [BlogController::class, 'show'])->name('show');
});

// About Route
Route::get('/about', [AboutController::class, 'index'])->name('about');

// Contact Routes
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

/*
|--------------------------------------------------------------------------
| Admin Routes (Protected)
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'isAdmin'])->prefix('admin')->name('admin.')->group(function () {

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Projects Management
    Route::resource('projects', AdminProjectController::class)->except(['show']);

    // Blog Management
    Route::resource('blog', AdminBlogController::class)->except(['show']);

    // // Categories Management
    // Route::resource('categories', CategoryController::class);

    // // Tags Management
    // Route::resource('tags', TagController::class);

    // // Skills Management
    // Route::resource('skills', SkillController::class);

     // Categories Management
    Route::resource('categories', CategoryController::class)->except(['create', 'edit', 'show']);

    // Tags Management
    Route::resource('tags', TagController::class)->except(['create', 'edit', 'show']);

    // Skills Management
    Route::resource('skills', SkillController::class)->except(['create', 'edit', 'show']);

    // Experiences Management
    Route::resource('experiences', ExperienceController::class)->except(['show']);

    // Educations Management
    Route::resource('educations', EducationController::class)->except(['show']);

    // Contact Messages
    Route::prefix('messages')->name('messages.')->group(function () {
        Route::get('/', [ContactMessageController::class, 'index'])->name('index');
        Route::get('/{message}', [ContactMessageController::class, 'show'])->name('show');
        Route::delete('/{message}', [ContactMessageController::class, 'destroy'])->name('destroy');
    });

    // Settings
    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::put('/settings', [SettingController::class, 'update'])->name('settings.update');
});



// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

/*
|--------------------------------------------------------------------------
| Authentication Routes (Laravel Breeze)
|--------------------------------------------------------------------------
*/

require __DIR__ . '/auth.php';
