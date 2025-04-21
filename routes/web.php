<?php
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ListUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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
    });     
         Route::get('list/cars/user',[UserController::class,'userlistcars'])->name('List.carsuser');
   
});
         Route::get('list/cars',[DashboardController::class,'listcars'])->name('List.cars');