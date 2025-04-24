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
        router.put(route('user.reservations.update', reservation.id), form);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-4">Modifier la Réservation</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Date début</label>
                    <input
                        type="date"
                        value={form.start_date}
                        onChange={(e) => setForm({ ...form, start_date: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label>Date fin</label>
                    <input
                        type="date"
                        value={form.end_date}
                        onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>
                <div>
                    <label>Statut</label>
                    <select
                        value={form.status}
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                        className="w-full border p-2 rounded"
                    >
                        <option value="pending">En attente</option>
                        
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Enregistrer
                </button>
            </form>
        </div>
    );
};

export default Edit;
