<?php
namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function admin()
    {
        return Inertia::render('Admin/Dashboard', [
            'user' => Auth::user(),
        ]);
    }

    public function user()
    {
        return Inertia::render('User/Dashboard', [
            'user' => Auth::user(),
        ]);
    }
    public function listcars()
    {
        
        $cars = Car::all();
        return Inertia::render('ListCars', [
            'cars' => $cars
        ]);
    }
}