import React, { useState } from 'react';
import { router } from '@inertiajs/react';

const Edit = ({ reservation }) => {
    const [form, setForm] = useState({
        start_date: reservation.start_date,
        end_date: reservation.end_date,
        status: reservation.status,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('admin.reservations.update', reservation.id), form);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Modifier Réservation</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Date de début</label>
                    <input
                        type="date"
                        value={form.start_date}
                        onChange={(e) => setForm({ ...form, start_date: e.target.value })}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Date de fin</label>
                    <input
                        type="date"
                        value={form.end_date}
                        onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Statut</label>
                    <select
                        value={form.status}
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                        className="w-full border rounded p-2"
                    >
                        <option value="pending">En attente</option>
                        <option value="confirmed">Confirmée</option>
                        <option value="cancelled">Annulée</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sauvegarder
                </button>
            </form>
        </div>
    );
};

export default Edit;
