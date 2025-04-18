<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voiture extends Model
{
    use HasFactory;

    protected $fillable = [
        'marque', 'modele', 'annee', 'immatriculation', 'prix_journalier',
        'carburant', 'kilometrage', 'categorie', 'nombre_places',
        'transmission', 'description', 'image', 'disponible'
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}