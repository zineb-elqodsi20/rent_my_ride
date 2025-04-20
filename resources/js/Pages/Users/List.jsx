import React from 'react';
import { router } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';

export default function List({ users }) {
    const handleDelete = (id) => {
        if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
            router.delete(`/users/${id}`);
        }
    };

    const handleEdit = (id) => {
        router.visit(`/users/${id}/edit`);
    };

    return (
        <>
        <AdminNavbar/>

                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-indigo-600 mb-6">Liste des utilisateurs</h1>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => router.visit('/users/create')}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
                        >
                            + Ajouter
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Nom</th>
                            <th className="py-3 px-4 text-left">Prénom</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Adresse</th>
                            <th className="py-3 px-4 text-left">Téléphone</th>
                            <th className="py-3 px-4 text-left">Ville</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-t border-gray-200 hover:bg-gray-50">
                                <td className="py-2 px-4">{user.nom}</td>
                                <td className="py-2 px-4">{user.prenom}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">{user.adresse}</td>
                                <td className="py-2 px-4">{user.numero_telephone}</td>
                                <td className="py-2 px-4">{user.ville}</td>
                                <td className="py-2 px-4 flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(user.id)}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm"
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-4 text-gray-500">
                                    Aucun utilisateur trouvé.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
