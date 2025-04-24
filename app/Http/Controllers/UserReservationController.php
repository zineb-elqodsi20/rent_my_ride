<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserReservationController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $reservations = $user->reservations()->with('car')->latest()->get();

        return Inertia::render('Users/Reservations/Index', [
            'reservations' => $reservations,
        ]);
    }

    public function edit(Reservation $reservation)
    {
        $this->authorizeReservation($reservation);
        return Inertia::render('Users/Reservations/Edit', [
            'reservation' => $reservation->load('car'),
        ]);
    }

    public function update(Request $request, Reservation $reservation)
    {
        $this->authorizeReservation($reservation);

        $data = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'status' => 'required|string'
        ]);

        $reservation->update($data);

        return redirect()->route('user.reservations')->with('success', 'Réservation modifiée.');
    }

    public function destroy(Reservation $reservation)
    {
        $this->authorizeReservation($reservation);

        $reservation->delete();
        return redirect()->back()->with('success', 'Réservation supprimée.');
    }

    private function authorizeReservation(Reservation $reservation)
    {
        if ($reservation->user_id !== auth()->id()) {
            abort(403, 'Non autorisé.');
        }
    }
}
