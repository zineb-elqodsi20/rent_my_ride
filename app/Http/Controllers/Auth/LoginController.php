<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return inertia('Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            
            // Redirection basée sur le rôle
            switch (Auth::user()->role->name) {
                case 'admin':
                    return redirect()->route('dashboard');
                default:
                    return redirect()->route('dashboard');
            }
        }
    
        return back()->withErrors([
            'email' => 'Identifiants incorrects.',
        ]);
    }
        
}