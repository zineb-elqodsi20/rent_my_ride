<?php
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ListUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\CheckRoleAdmin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Routes publiques
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Routes d'authentification (version personnalisée)
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);

// On conserve le fichier auth.php pour les autres fonctionnalités (register, password reset, etc.)
require __DIR__.'/auth.php';

// Routes protégées (authentifiées)
    Route::middleware(['auth', 'verified'])->group(function () {
    // Gestion du profil (accessible à tous les utilisateurs authentifiés)
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('dashboard', function () {
        $user = Auth::user();
        $component = $user->hasRole('admin') ? 'Admin/Dashboard' : 'User/Dashboard';
        return Inertia::render($component, compact('user'));
    })->name('dashboard');

    Route::middleware([CheckRoleAdmin::class])->group(function () {
        Route::get('dashboard/user',[ListUserController::class,'index']);
    });     
   
});
