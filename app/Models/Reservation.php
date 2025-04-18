<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'voiture_id', 'date_debut', 'date_fin',
        'prix_total', 'statut', 'notes'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function voiture()
    {
        return $this->belongsTo(Voiture::class);
    }

    // Scopes pour filtrer les réservations
    public function scopeActive($query)
    {
        return $query->whereIn('statut', ['en_attente', 'confirme'])
                    ->where('date_fin', '>=', now());
    }

    public function scopeCompleted($query)
    {
        return $query->where('statut', 'termine');
    }
}