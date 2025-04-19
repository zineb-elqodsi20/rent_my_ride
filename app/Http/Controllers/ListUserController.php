<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request; 
use Inertia\Inertia;

class ListUserController extends Controller
{
    public function index()
    {
        $users = User::where('role_id', 2)->get(); 
    
        return Inertia::render('Users/List', [
            'users' => $users,
        ]);
    }
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back()->with('success', 'Utilisateur supprimé avec succès.');
    }
    public function edit($id)
    {
        $user = User::findOrFail($id);
    
        return Inertia::render('Users/Edit', [
            'user' => $user,
        ]);
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->all());

        return redirect()->route('dashboard.user');
    }

    
    
}
