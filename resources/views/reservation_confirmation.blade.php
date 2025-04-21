<!DOCTYPE html>
<html>
<head>
    <title>Confirmation de réservation</title>
</head>
<body style="font-family: Arial, sans-serif;">
    <h1>Confirmez votre réservation</h1>
    <p>Bonjour {{ $reservation->user->name }},</p>
    <p>Vous avez réservé la voiture {{ $reservation->car->name }} du {{ $reservation->start_date }} au {{ $reservation->end_date }}.</p>
    <p>Prix total : {{ $reservation->total_price }} €</p>
    <p>Veuillez confirmer votre réservation en cliquant sur le bouton ci-dessous :</p>
    <a href="{{ route('reservations.confirm', $reservation->id) }}" style="display: inline-block; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px;">Confirmer</a>
</body>
</html>