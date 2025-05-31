<?php

use App\Http\Controllers\AdminReservationController;
use App\Http\Controllers\DashboardAdminController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ListUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserReservationController;
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
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);

require __DIR__.'/auth.php';


    Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('dashboard', function () {
        $user = Auth::user();
        $component = $user->hasRole('admin') ? 'Admin/Dashboard' : 'User/Dashboard';
        return Inertia::render($component, compact('user'));
    })->name('dashboard');

    Route::middleware([CheckRoleAdmin::class])->group(function () {
        Route::get('dashboard/user',[ListUserController::class,'index'])->name('dashboard.user');
        Route::delete('/users/{id}', [ListUserController::class, 'destroy'])->name('users.destroy');
        Route::get('/users/{id}/edit', [ListUserController::class, 'edit'])->name('users.edit');
        Route::post('/users/{id}', [ListUserController::class, 'update'])->name('users.update');
        Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
        Route::post('/users', [UserController::class, 'store'])->name('users.store');
        Route::get('list/cars/admin',[CarController::class,'index'])->name('List.carsadmin');
        Route::get('/cars/create', [CarController::class, 'create'])->name('car.create');
        Route::post('/cars', [CarController::class, 'store'])->name('cars.store');
        Route::delete('/cars/{id}', [CarController::class, 'destroy'])->name('car.destroy');
        Route::get('/cars/{id}/edit', [CarController::class, 'edit'])->name('car.edit');
        Route::post('/cars/{id}', [CarController::class, 'update'])->name('car.update');
        Route::get('/admin/reservations', [AdminReservationController::class, 'index'])->name('admin.reservations');
        Route::delete('/admin/reservations/{reservation}', [AdminReservationController::class, 'destroy'])->name('admin.reservations.destroy');
        Route::get('/admin/reservations/{reservation}/edit', [AdminReservationController::class, 'edit'])->name('admin.reservations.edit');
        Route::put('/admin/reservations/{reservation}', [AdminReservationController::class, 'update'])->name('admin.reservations.update');
    
        Route::get('/admin/stats', [DashboardAdminController::class, 'fetchStats']);

            });   
  // Afficher le formulaire de réservation pour une voiture
        Route::get('/cars/{car_id}/reserve', [ReservationController::class, 'create'])->name('reservations.create');
            
        // Enregistrer une nouvelle réservation
        Route::post('/reservations', [ReservationController::class, 'store'])->name('reservations.store');
        
        // Confirmer une réservation via email
        Route::get('/reservations/{id}/confirm', [ReservationController::class, 'confirm'])->name('reservations.confirm');
        
        // Annuler une réservation (admin uniquement, vérifié dans le contrôleur)
        Route::post('/reservations/{reservation}/cancel', [ReservationController::class, 'cancel'])->name('reservations.cancel');
        
      

        Route::get('list/cars/user',[UserController::class,'userlistcars'])->name('List.carsuser');
        Route::get('/mes-reservations', [UserReservationController::class, 'index'])->name('user.reservations');
        Route::get('/mes-reservations/{reservation}/edit', [UserReservationController::class, 'edit'])->name('user.reservations.edit');
        Route::put('/mes-reservations/{reservation}', [UserReservationController::class, 'update'])->name('user.reservations.update');
        Route::delete('/mes-reservations/{reservation}', [UserReservationController::class, 'destroy'])->name('user.reservations.destroy');
});
         Route::get('list/cars',[DashboardController::class,'listcars'])->name('List.cars');
         