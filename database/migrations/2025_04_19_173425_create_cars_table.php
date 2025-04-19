<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
        $table->id();
        $table->string('nom'); 
        $table->string('marque'); 
        $table->text('description');
        $table->string('photo')->nullable();
        $table->boolean('disponibilite')->default(true); 
        $table->decimal('prix_par_jour', 8, 2); 
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
