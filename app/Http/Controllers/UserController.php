<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    
    public function create()
    {
        return Inertia::render('Users/CreateUser');
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'adresse' => 'nullable|string',
            'numero_telephone' => 'nullable|string',
            'ville' => 'nullable|string',
            'password' => 'required|string|min:6',
        ]);
    
        User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'adresse' => $request->adresse,
            'numero_telephone' => $request->numero_telephone,
            'ville' => $request->ville,
            'role_id' => 2, 
            'password' => bcrypt($request->password),
        ]);
    
        return redirect()->route('dashboard.user')->with('success', 'Utilisateur ajouté avec succès.');
    } 
}
