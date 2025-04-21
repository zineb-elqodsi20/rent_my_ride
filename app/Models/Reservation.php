<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'user_id',
        'car_id',
        'date_debut',
        'date_fin',
        'prix_total',
        'statut',
        'payment_id',
        'payment_status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
    public static function calculateTotalPrice($car_id, $date_debut, $date_fin)
    {
        $car = Car::findOrFail($car_id);
        $days = (strtotime($date_fin) - strtotime($date_debut)) / (60 * 60 * 24);
        return $car->prix_par_jour * $days;
    }
}