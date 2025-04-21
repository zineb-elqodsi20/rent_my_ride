<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Création de la table reservations
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('car_id')->constrained()->onDelete('cascade');
            $table->date('start_date');
            $table->date('end_date');
            $table->decimal('total_price', 8, 2);
            $table->enum('status', ['pending', 'confirmed', 'cancelled'])->default('pending');
            $table->timestamps();
        });

        // Création de la procédure stockée CalculateTotalPrice
        DB::statement("
            CREATE PROCEDURE CalculateTotalPrice(
                IN car_id INT,
                IN start_date DATE,
                IN end_date DATE,
                OUT total_price DECIMAL(8,2)
            )
            BEGIN
                DECLARE price_per_day DECIMAL(8,2);
                DECLARE days INT;

                -- Récupérer le prix par jour de la voiture
                SELECT price_per_day INTO price_per_day
                FROM cars
                WHERE id = car_id;

                -- Calculer le nombre de jours
                SET days = DATEDIFF(end_date, start_date) + 1;

                -- Calculer le prix total
                SET total_price = price_per_day * days;
            END
        ");

        // Création du trigger after_reservation_insert
        DB::statement("
            CREATE TRIGGER after_reservation_insert
            AFTER INSERT ON reservations
            FOR EACH ROW
            BEGIN
                IF NEW.start_date < CURDATE() AND NEW.status = 'pending' THEN
                    UPDATE reservations
                    SET status = 'cancelled'
                    WHERE id = NEW.id;
                END IF;
            END
        ");
    }

    public function down(): void
    {
        // Supprimer la table reservations
        Schema::dropIfExists('reservations');

        // Supprimer la procédure stockée
        DB::statement('DROP PROCEDURE IF EXISTS CalculateTotalPrice');

        // Supprimer le trigger
        DB::statement('DROP TRIGGER IF EXISTS after_reservation_insert');
    }
};