import React from 'react';
import { Link, router } from '@inertiajs/react';

const Index = ({ reservations }) => {
    const handleDelete = (id) => {
        if (confirm("Voulez-vous vraiment supprimer cette réservation ?")) {
            router.delete(route('admin.reservations.destroy', id));
        }
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Liste des Réservations</h1>
            <table className="min-w-full border">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2">Voiture</th>
                        <th className="p-2">Utilisateur</th>
                        <th className="p-2">Début</th>
                        <th className="p-2">Fin</th>
                        <th className="p-2">Statut</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(res => (
                        <tr key={res.id} className="border-t">
                            <td className="p-2">{res.car?.nom}</td>
                            <td className="p-2">{res.user?.nom || 'N/A'}</td>
                            <td className="p-2">{res.start_date}</td>
                            <td className="p-2">{res.end_date}</td>
                            <td className="p-2">{res.status}</td>
                            <td className="p-2 space-x-2">
                                <Link
                                    href={route('admin.reservations.edit', res.id)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Modifier
                                </Link>
                                <button
                                    onClick={() => handleDelete(res.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
