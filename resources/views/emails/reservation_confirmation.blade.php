<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Confirmation de Réservation</title>
</head>
<body style="font-family: Arial, sans-serif; color: #e7dddd;">
    <h2>Merci pour votre réservation !</h2>

    <p>Bonjour {{ $user->name }},</p>

    <p>Voici les détails de votre réservation :</p>

    <ul>
        <li><strong>Voiture :</strong> {{ $car->nom }}</li>
        <li><strong>Date de début :</strong> {{ \Carbon\Carbon::parse($reservation->start_date)->format('d/m/Y') }}</li>
        <li><strong>Date de fin :</strong> {{ \Carbon\Carbon::parse($reservation->end_date)->format('d/m/Y') }}</li>
        <li><strong>Prix total :</strong> {{ number_format($reservation->total_price, 2, ',', ' ') }} DH</li>
        <li><strong>Prix par jour :</strong> {{ number_format($car->prix_par_jour, 2, ',', ' ') }} DH</li>
        <li><strong>Statut :</strong> {{ ucfirst($reservation->status) }}</li>
    </ul>
    <p>Vous devez venir récupérer la voiture dans les 24 heures suivant la date de début de réservation, sinon la réservation sera annulée.</p>
    <p> Merci pour votre confiance.</p>

    <p>RENT MY RIDE</p>
</body>
</html>
