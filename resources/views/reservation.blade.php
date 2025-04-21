<!DOCTYPE html>
<html>
<head>
    <title>Reçu de réservation</title>
</head>
<body style="font-family: Arial, sans-serif;">
    <h1>Reçu de réservation #{{ $reservation->id }}</h1>
    <p><strong>Client :</strong> {{ $reservation->user->name }}</p>
    <p><strong>Voiture :</strong> {{ $reservation->car->name }}</p>
    <p><strong>Date de début :</strong> {{ $reservation->start_date }}</p>
    <p><strong>Date de fin :</strong> {{ $reservation->end_date }}</p>
    <p><strong>Prix total :</strong> {{ $reservation->total_price }} €</p>
    <p><strong>Statut :</strong> {{ $reservation->status }}</p>
</body>
</html>