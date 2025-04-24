<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminReservationController extends Controller
{
    public function index()
    {
        $reservations = Reservation::with('car', 'user')->latest()->get();
        return Inertia::render('Admin/Reservation/Index', [
            'reservations' => $reservations,
        ]);
    }

    public function edit(Reservation $reservation)
    {
        return Inertia::render('Admin/Reservation/Edit', [
            'reservation' => $reservation->load('car', 'user'),
        ]);
    }

    public function update(Request $request, Reservation $reservation)
    {
        $validated = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'status' => 'required|string',
        ]);

        $reservation->update($validated);

        return redirect()->route('admin.reservations')->with('success', 'Réservation mise à jour.');
    }

    public function destroy(Reservation $reservation)
    {
        $reservation->delete();
        return redirect()->back()->with('success', 'Réservation supprimée.');
    }
}
