@component('mail::message')
# Confirmation de réservation

Bonjour {{ $reservation->user->name }},

Votre réservation pour la voiture **{{ $reservation->car->nom }}** a bien été prise en compte.

- **Date de début :** {{ \Carbon\Carbon::parse($reservation->date_debut)->format('d/m/Y') }}  
- **Date de fin :** {{ \Carbon\Carbon::parse($reservation->date_fin)->format('d/m/Y') }}  
- **Prix total :** {{ number_format($reservation->prix_total, 2, ',', ' ') }} MAD  

@component('mail::button', ['url' => $confirmationUrl, 'color' => 'success'])
Confirmer ma réservation
@endcomponent

Si vous n'avez pas fait cette demande, ignorez simplement cet email.

Merci de votre confiance,  
L'équipe Rent My Ride
@endcomponent
