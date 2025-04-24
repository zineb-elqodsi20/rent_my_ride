<?php

namespace App\Models;
use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'password',
        'numero_telephone',
        'adresse', 
        'ville',
        'role_id', 
        'is_admin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_admin' => 'boolean',
        ];
    }

    /**
     * Relation avec le modèle Role.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    public function isAdmin(){
        return   $this->hasRole('admin');
    }
    // Helper method pour vérifier les rôles
    public function hasRole($roleName)
    {
        return $this->role->name === $roleName;
    }
    
    /**
     * Vérifie si l'utilisateur est admin.
     */
   
    /**
     * Accesseur pour le nom complet.
     */
    public function getNomCompletAttribute(): string
    {
        return "{$this->prenom} {$this->nom}";
    }
    public function reservations()
    {
        return $this->hasMany(\App\Models\Reservation::class);
    }
}