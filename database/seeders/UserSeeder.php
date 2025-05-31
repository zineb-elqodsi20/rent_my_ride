<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('fr_FR'); // pour générer des noms français

        foreach (range(1, 20) as $i) {
            User::create([
                'nom' => $faker->lastName,
                'prenom' => $faker->firstName,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password123'), 
                'numero_telephone' => $faker->phoneNumber,
                'adresse' => $faker->address,
                'ville' => $faker->city,
            ]);
        }
    }
}
