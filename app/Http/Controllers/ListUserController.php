<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class ListUserController extends Controller
{
    public function index()
    {
        $users = User::all(); 
        return Inertia::render('Users/List', [
            'users' => $users,
        ]);
    }
}
