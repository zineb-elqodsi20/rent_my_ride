import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AdminNavbar from '@/Components/AdminNavbar';

const Edit = ({ reservation }) => {
    const [form, setForm] = useState({
        start_date: reservation.start_date,
        end_date: reservation.end_date,
        status: reservation.status,
    });

    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        // Définir la date minimale comme aujourd'hui
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setMinDate(formattedDate);
        
        // Si la date de début existante est antérieure à aujourd'hui, la remplacer par aujourd'hui
        if (new Date(form.start_date) < today) {
            setForm(prev => ({ ...prev, start_date: formattedDate }));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('admin.reservations.update', reservation.id), form);
    };

    const handleStartDateChange = (e) => {
        const selectedDate = e.target.value;
        setForm({
            ...form,
            start_date: selectedDate,
            // Si la date de fin est antérieure à la nouvelle date de début, la mettre à jour
            end_date: form.end_date < selectedDate ? selectedDate : form.end_date
        });
    };

    const handleEndDateChange = (e) => {
        const selectedDate = e.target.value;
        // Ne pas permettre une date de fin antérieure à la date de début
        if (selectedDate >= form.start_date) {
            setForm({ ...form, end_date: selectedDate });
        }
    };

    return (
        <>
        <AdminNavbar/>
        <div className="min-h-screen bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5] py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
            >
                <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] p-6">
                        <h1 className="text-3xl font-bold text-white text-center">Modifier Réservation</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <label className="block text-[#6a7b8c] font-medium">Date de début</label>
                            <input
                                type="date"
                                value={form.start_date}
                                onChange={handleStartDateChange}
                                min={minDate}
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent transition-all"
                                required
                            />
                            {new Date(form.start_date) < new Date() && (
                                <p className="text-sm text-red-500">La date ne peut pas être antérieure à aujourd'hui</p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <label className="block text-[#6a7b8c] font-medium">Date de fin</label>
                            <input
                                type="date"
                                value={form.end_date}
                                onChange={handleEndDateChange}
                                min={form.start_date}
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent transition-all"
                                required
                            />
                            {form.end_date < form.start_date && (
                                <p className="text-sm text-red-500">La date de fin ne peut pas être antérieure à la date de début</p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                        >
                            <label className="block text-[#6a7b8c] font-medium">Statut</label>
                            <select
                                value={form.status}
                                onChange={(e) => setForm({ ...form, status: e.target.value })}
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent transition-all"
                            >
                                <option value="pending">En attente</option>
                                <option value="confirmed">Confirmée</option>
                                <option value="cancelled">Annulée</option>
                            </select>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            Sauvegarder
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
        </>
    );
};

export default Edit;