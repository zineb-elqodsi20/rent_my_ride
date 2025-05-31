<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CarSeeder extends Seeder
{
    public function run(): void
    {
        $now = Carbon::now();

        $cars = [
            ['nom' => 'Classe S', 'marque' => 'Mercedes-Benz', 'description' => 'Berline de luxe avec options haut de gamme.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1200.00],
            ['nom' => 'Serie 7', 'marque' => 'BMW', 'description' => 'Voiture haut de gamme, confort et technologie.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1100.00],
            ['nom' => 'A8', 'marque' => 'Audi', 'description' => 'Berline luxueuse et silencieuse.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1050.00],
            ['nom' => 'Panamera', 'marque' => 'Porsche', 'description' => 'Confort et performances sportives.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1500.00],
            ['nom' => 'Phantom', 'marque' => 'Rolls-Royce', 'description' => 'Prestige absolu, fait main.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 3000.00],
            ['nom' => 'Bentayga', 'marque' => 'Bentley', 'description' => 'SUV de luxe puissant et raffiné.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2200.00],
            ['nom' => 'Urus', 'marque' => 'Lamborghini', 'description' => 'SUV sportif et extravagant.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2500.00],
            ['nom' => 'Flying Spur', 'marque' => 'Bentley', 'description' => 'Élégance et puissance réunies.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2300.00],
            ['nom' => 'Ghost', 'marque' => 'Rolls-Royce', 'description' => 'Luxe discret et moderne.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2800.00],
            ['nom' => 'Model S Plaid', 'marque' => 'Tesla', 'description' => 'Berline électrique ultra-performante.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1300.00],
            ['nom' => 'Maybach GLS', 'marque' => 'Mercedes-Benz', 'description' => 'SUV de luxe avec intérieur raffiné.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2400.00],
            ['nom' => 'X7 M60i', 'marque' => 'BMW', 'description' => 'SUV luxueux et puissant.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1400.00],
            ['nom' => 'DB11', 'marque' => 'Aston Martin', 'description' => 'Voiture sportive de luxe.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2600.00],
            ['nom' => 'Continental GT', 'marque' => 'Bentley', 'description' => 'Coupé de luxe raffiné.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2700.00],
            ['nom' => 'Huracán Evo', 'marque' => 'Lamborghini', 'description' => 'Supercar de luxe et de style.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 3100.00],
            ['nom' => 'Cullinan', 'marque' => 'Rolls-Royce', 'description' => 'SUV royal tout-terrain.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 3200.00],
            ['nom' => 'i7', 'marque' => 'BMW', 'description' => 'Berline électrique de luxe.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1250.00],
            ['nom' => 'EQS', 'marque' => 'Mercedes-Benz', 'description' => 'Électrique, élégante et futuriste.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1350.00],
            ['nom' => 'Cayenne Turbo GT', 'marque' => 'Porsche', 'description' => 'SUV sport de haut niveau.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 2000.00],
            ['nom' => 'Cybertruck', 'marque' => 'Tesla', 'description' => 'Futuriste, robuste, électrique.', 'photo' => null, 'disponibilite' => true, 'prix_par_jour' => 1800.00],
        ];

        foreach ($cars as &$car) {
            $car['created_at'] = $now;
            $car['updated_at'] = $now;
        }

        DB::table('cars')->insert($cars);
    }
}
