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

        // Création du trigger après insertion
        DB::unprepared("
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
        
        DB::unprepared('DROP TRIGGER IF EXISTS after_reservation_insert');

     
        Schema::dropIfExists('reservations');
    }
};
