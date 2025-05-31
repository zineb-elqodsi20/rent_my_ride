<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('description')->nullable();
            $table->timestamps();
        });

       
        DB::table('roles')->insert([
            ['name' => 'admin', 'description' => 'Administrateur'],
            ['name' => 'user', 'description' => 'Utilisateur standard'],
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};