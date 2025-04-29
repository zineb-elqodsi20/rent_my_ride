<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Reçu de Réservation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #f9d5b3 0%, #f0c1a0 25%, #d1b7b5 50%, #b7c7d6 75%, #9cb3c5 100%);
        }
        
        .logo {
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        
        .hover-effect {
            transition: all 0.3s ease;
        }
        
        .hover-effect:hover {
            background-color: rgba(249, 213, 179, 0.06);
        }
    </style>
</head>
<body class="bg-[#f5f7fa] p-8">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- Header with gradient background -->
        <div class="gradient-bg p-8 text-center">
            <div class="flex justify-center items-center mb-4">
                <img 
                    src="https://img.icons8.com/fluency/96/000000/car-rental.png" 
                    alt="Logo location voiture"
                    class="logo h-16 w-16"
                />
            </div>
            <h1 class="text-3xl font-bold text-white">
                Reçu de Réservation
            </h1>
            <p class="mt-2 text-white/90">
                Date: {{ now()->format('d/m/Y') }}
            </p>
        </div>

        <!-- Content -->
        <div class="p-8">
            <div class="mb-8">
                <h2 class="text-2xl font-semibold text-[#2c3e50] mb-4 pb-2 border-b-2 border-[#d1b7b5]">
                    Détails de la Réservation
                </h2>
                
                <div class="overflow-hidden rounded-lg border border-[#b7c7d6]">
                    <table class="min-w-full divide-y divide-[#d1b7b5]">
                        <tbody class="bg-white divide-y divide-[#d1b7b5]">
                            <tr class="hover-effect">
                                <th class="px-6 py-4 text-left text-sm font-medium text-[#6a7b8c]">Voiture</th>
                                <td class="px-6 py-4 text-sm text-[#2c3e50]">{{ $reservation->car->nom }}</td>
                            </tr>
                            
                            <tr class="hover-effect">
                                <th class="px-6 py-4 text-left text-sm font-medium text-[#6a7b8c]">Date de début</th>
                                <td class="px-6 py-4 text-sm text-[#2c3e50]">{{ \Carbon\Carbon::parse($reservation->start_date)->format('d/m/Y') }}</td>
                            </tr>
                            
                            <tr class="hover-effect">
                                <th class="px-6 py-4 text-left text-sm font-medium text-[#6a7b8c]">Date de fin</th>
                                <td class="px-6 py-4 text-sm text-[#2c3e50]">{{ \Carbon\Carbon::parse($reservation->end_date)->format('d/m/Y') }}</td>
                            </tr>
                            
                            <tr class="hover-effect">
                                <th class="px-6 py-4 text-left text-sm font-medium text-[#6a7b8c]">Prix par jour</th>
                                <td class="px-6 py-4 text-sm text-[#2c3e50]">{{ number_format($reservation->car->prix_par_jour, 2, ',', ' ') }} €</td>
                            </tr>
                            
                            <tr class="hover-effect">
                                <th class="px-6 py-4 text-left text-sm font-medium text-[#6a7b8c]">Prix total</th>
                                <td class="px-6 py-4 text-sm text-[#2c3e50]">{{ number_format($reservation->total_price, 2, ',', ' ') }} €</td>
                            </tr>
                            
                            <tr class="hover-effect">
                                <th class="px-6 py-4 text-left text-sm font-medium text-[#6a7b8c]">Statut</th>
                                <td class="px-6 py-4 text-sm font-medium text-[#2c3e50]">
                                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                                        {{ $reservation->status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                                           ($reservation->status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800') }}">
                                        {{ ucfirst($reservation->status) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Thank you section -->
            <div class="text-center mt-12">
                <p class="text-lg text-[#6a7b8c] mb-2">
                    Merci pour votre confiance.
                </p>
                <p class="text-sm text-[#9cb3c5]">
                    Ce document est un reçu officiel de votre réservation.
                </p>
                
                <div class="mt-6">
                    <div class="h-1 bg-gradient-to-r from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>