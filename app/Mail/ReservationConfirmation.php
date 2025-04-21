<?php
namespace App\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Str;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReservationConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $reservation;

    public function __construct($reservation)
    {
        $this->reservation = $reservation;
    }

    public function build()
    {
        $confirmationUrl = route('reservations.confirm', [
            'reservation' => $this->reservation->id,
            'token' => Str::random(32)
        ]);

        return $this->subject('Confirmation de votre réservation #'.$this->reservation->id)
                    ->markdown('emails.reservation_confirmation')
                    ->with([
                        'reservation' => $this->reservation,
                        'confirmationUrl' => $confirmationUrl
                    ]);
    }
}