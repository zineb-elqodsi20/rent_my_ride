<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Reçu de Réservation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .details {
            margin: 20px 0;
        }
        .details table {
            width: 100%;
            border-collapse: collapse;
        }
        .details th, .details td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Reçu de Réservation</h1>
        <p>Date: {{ now()->format('d/m/Y') }}</p>
    </div>

    <div class="details">
        <h2>Détails de la Réservation</h2>
        <table>
            <tr>
                <th>Voiture</th>
                <td>{{ $reservation->car->nom }}</td>
            </tr>
            <tr>
                <th>Date de début</th>
                <td>{{ \Carbon\Carbon::parse($reservation->start_date)->format('d/m/Y') }}</td>
            </tr>
            <tr>
                <th>Date de fin</th>
                <td>{{ \Carbon\Carbon::parse($reservation->end_date)->format('d/m/Y') }}</td>
            </tr>
            <tr>
                <th>Prix par jour</th>
                <td>{{ number_format($reservation->car->prix_par_jour, 2, ',', ' ') }} €</td>
            </tr>
            <tr>
                <th>Prix total</th>
                <td>{{ number_format($reservation->total_price, 2, ',', ' ') }} €</td>
            </tr>
            <tr>
                <th>Statut</th>
                <td>{{ ucfirst($reservation->status) }}</td>
            </tr>
        </table>
    </div>

    <div class="footer">
        <p>Merci pour votre confiance.</p>
        <p>Ce document est un reçu officiel de votre réservation.</p>
    </div>
</body>
</html> 