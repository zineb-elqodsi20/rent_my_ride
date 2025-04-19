import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        adresse: user.adresse,
        numero_telephone: user.numero_telephone,
        ville: user.ville,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <AuthenticatedLayout>
            <div className="h-screen flex items-center justify-center p-6">
                <div className="space-y-4 max-w-md bg-white p-6 rounded shadow-lg w-full">
                    <h1 className="text-2xl font-bold text-indigo-600 mb-4 text-center">Modifier utilisateur</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                            type="text" 
                            value={data.nom} 
                            onChange={e => setData('nom', e.target.value)} 
                            placeholder="Nom" 
                            className="w-full border p-2 rounded" 
                        />
                        <input 
                            type="text" 
                            value={data.prenom} 
                            onChange={e => setData('prenom', e.target.value)} 
                            placeholder="Prénom" 
                            className="w-full border p-2 rounded" 
                        />
                        <input 
                            type="email" 
                            value={data.email} 
                            onChange={e => setData('email', e.target.value)} 
                            placeholder="Email" 
                            className="w-full border p-2 rounded" 
                        />
                        <input 
                            type="text" 
                            value={data.adresse} 
                            onChange={e => setData('adresse', e.target.value)} 
                            placeholder="Adresse" 
                            className="w-full border p-2 rounded" 
                        />
                        <input 
                            type="text" 
                            value={data.numero_telephone} 
                            onChange={e => setData('numero_telephone', e.target.value)} 
                            placeholder="Téléphone" 
                            className="w-full border p-2 rounded" 
                        />
                        <input 
                            type="text" 
                            value={data.ville} 
                            onChange={e => setData('ville', e.target.value)} 
                            placeholder="Ville" 
                            className="w-full border p-2 rounded" 
                        />
                        <button 
                            type="submit" 
                            disabled={processing} 
                            className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
                        >
                            Sauvegarder
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
