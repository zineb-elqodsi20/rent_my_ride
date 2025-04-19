import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        prenom: '',
        email: '',
        adresse: '',
        numero_telephone: '',
        ville: '',
        password: '',
        role_id: '2',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'));
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-indigo-600">Ajouter un utilisateur</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium">Nom</label>
                        <input
                            type="text"
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.nom && <div className="text-red-500 text-sm">{errors.nom}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Prénom</label>
                        <input
                            type="text"
                            value={data.prenom}
                            onChange={(e) => setData('prenom', e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.prenom && <div className="text-red-500 text-sm">{errors.prenom}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Adresse</label>
                        <input
                            type="text"
                            value={data.adresse}
                            onChange={(e) => setData('adresse', e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.adresse && <div className="text-red-500 text-sm">{errors.adresse}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Téléphone</label>
                        <input
                            type="text"
                            value={data.numero_telephone}
                            onChange={(e) => setData('numero_telephone', e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.numero_telephone && <div className="text-red-500 text-sm">{errors.numero_telephone}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Ville</label>
                        <input
                            type="text"
                            value={data.ville}
                            onChange={(e) => setData('ville', e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.ville && <div className="text-red-500 text-sm">{errors.ville}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Mot de passe</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full border rounded px-3 py-2 mt-1"
                        />
                        {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                    </div>
                    <div>
                    <label className="block text-sm font-medium">Rôle</label>
                    <select
                        value={data.role_id || '2'} // Valeur par défaut : 2
                        onChange={(e) => setData('role_id', e.target.value)}
                        className="w-full border rounded px-3 py-2 mt-1"
                    >
                        <option value="1">Administrateur</option>
                        <option value="2">Utilisateur</option>
                    </select>
                    {errors.role_id && <div className="text-red-500 text-sm">{errors.role_id}</div>}
                </div>
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                        >
                            Ajouter
                        </button>
                    </div>
                  

                </form>
            </div>
        </AuthenticatedLayout>
    );
}
