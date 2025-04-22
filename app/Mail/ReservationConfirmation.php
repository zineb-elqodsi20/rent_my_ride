<?php

namespace App\Mail;

use App\Models\Reservation;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Barryvdh\DomPDF\Facade\Pdf;

class ReservationConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $reservation;

    public function __construct(Reservation $reservation)
    {
        $this->reservation = $reservation;
    }

    public function build()
    {
        // Generate PDF
        $pdf = Pdf::loadView('pdf.reservation', [
            'reservation' => $this->reservation->load(['car' => function($query) {
                $query->select('id', 'nom', 'prix_par_jour');
            }])
        ]);

        return $this->subject('Confirmation de votre réservation de voiture')
            ->view('emails.reservation_confirmation')
            ->with([
                'reservation' => $this->reservation,
                'car' => $this->reservation->car,
                'user' => $this->reservation->user,
            ])
            ->attachData($pdf->output(), 'receipt_' . $this->reservation->id . '.pdf', [
                'mime' => 'application/pdf',
            ]);
    }
    
}