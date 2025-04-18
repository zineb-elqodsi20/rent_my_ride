<?php
namespace App\Http\Controllers;

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
}