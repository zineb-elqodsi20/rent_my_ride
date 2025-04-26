<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'nom', 
        'marque', 
        'description', 
        'photo', 
        'prix_par_jour', 
        'disponibilite'
    ];
    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }

}
