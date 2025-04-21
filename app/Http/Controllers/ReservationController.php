<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReservationConfirmation;
use Barryvdh\DomPDF\Facade\Pdf;

class ReservationController extends Controller
{
    public function create($car_id)
    {
        $car = Car::findOrFail($car_id);
        return Inertia::render('Reservation/Create', [
            'car' => $car,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'car_id' => 'required|exists:cars,id',
            'start_date' => 'required|date|after_or_equal:today',
            'end_date' => 'required|date|after:start_date',
        ]);

        // Calculer le prix total via la procédure stockée
        $result = DB::select('CALL CalculateTotalPrice(?, ?, ?, @total_price)', [
            $validated['car_id'],
            $validated['start_date'],
            $validated['end_date'],
        ]);
        $total_price = DB::select('SELECT @total_price as total_price')[0]->total_price;

        // Créer la réservation
        $reservation = Reservation::create([
            'user_id' => auth()->id(),
            'car_id' => $validated['car_id'],
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'],
            'total_price' => $total_price,
            'status' => 'pending',
        ]);

        // Envoyer l'email de confirmation
        Mail::to(auth()->user()->email)->send(new ReservationConfirmation($reservation));

        return redirect()->route('reservations.show', $reservation->id);
    }

    public function show(Reservation $reservation)
    {
        return Inertia::render('Reservation/Show', [
            'reservation' => $reservation->load('car', 'user'),
        ]);
    }

    public function confirm($id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->update(['status' => 'confirmed']);
        return redirect()->route('reservations.show', $reservation->id)->with('success', 'Réservation confirmée.');
    }

    public function cancel(Reservation $reservation)
    {
        $reservation->update(['status' => 'cancelled']);
        return redirect()->back()->with('success', 'Réservation annulée.');
    }

    public function downloadPdf(Reservation $reservation)
    {
        $pdf = Pdf::loadView('pdf.reservation', ['reservation' => $reservation->load('car', 'user')]);
        return $pdf->download('reservation_' . $reservation->id . '.pdf');
    }
}