<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    public function index()
    {
        
        $cars = Car::all();
        return Inertia::render('Cars/List', [
            'cars' => $cars
        ]);
    }
    public function create()
    {
        return Inertia::render('Cars/CreateCars');
    }
  
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'marque' => 'required|string|max:255',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', 
            'prix_par_jour' => 'required|numeric',
            'disponibilite' => 'required|boolean',
        ]);
    
        if ($request->hasFile('photo')) {
            $validated['photo'] = $request->file('photo')->store('cars', 'public'); 
        }
    
        Car::create($validated);
    
        return redirect()->route('List.carsadmin')->with('success', 'Voiture ajoutée avec succès.');
    }
    public function destroy($id)
    {
        $car = Car::findOrFail($id);

        if ($car->photo && \Storage::disk('public')->exists($car->photo)) {
            \Storage::disk('public')->delete($car->photo);
        }

        $car->delete();

        return redirect()->route('List.carsadmin')->with('success', 'Voiture supprimée avec succès.');
    }
   
    public function edit($id)
    {
        $car = Car::findOrFail($id);
        return Inertia::render('Cars/EditCar', [
            'car' => $car
        ]);
    }
    

    public function update(Request $request, $id)
{
    $validated = $request->validate([
        'nom' => 'required|string|max:255',
        'marque' => 'required|string|max:255',
        'description' => 'nullable|string',
        'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'prix_par_jour' => 'required|numeric',
        'disponibilite' => 'required|boolean',
    ]);

    $car = Car::findOrFail($id);

    if ($request->hasFile('photo')) {
        if ($car->photo && Storage::disk('public')->exists($car->photo)) {
            Storage::disk('public')->delete($car->photo);
        }
        $validated['photo'] = $request->file('photo')->store('cars', 'public');
    } else {
        unset($validated['photo']); 
    }

    $car->update($validated);

    return redirect()->route('List.carsadmin')->with('success', 'Voiture modifiée avec succès.');
}


}
