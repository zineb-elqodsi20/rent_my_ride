import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import UserNavbar from '@/Components/UserNavbar';

const Edit = ({ reservation }) => {
    const [form, setForm] = useState({
        start_date: reservation.start_date,
        end_date: reservation.end_date,
        status: reservation.status,
    });

    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        // Set minimum date to today
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setMinDate(formattedDate);
        
        // Prevent dates before today
        if (new Date(form.start_date) < today) {
            setForm(prev => ({ ...prev, start_date: formattedDate }));
        }
    }, []);

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => {
            // Ensure end_date is never before start_date
            if (name === 'start_date' && new Date(value) > new Date(prev.end_date)) {
                return { ...prev, [name]: value, end_date: value };
            }
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('user.reservations.update', reservation.id), form);
    };

    return (
        <>
        <UserNavbar/>
        <div className="min-h-screen bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5] py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
            >
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] p-6">
                        <h1 className="text-2xl font-bold text-white text-center">Modifier la Réservation</h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Start Date */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <label className="block text-[#6a7b8c] font-medium">Date de début</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="date"
                                name="start_date"
                                value={form.start_date}
                                onChange={handleDateChange}
                                min={minDate}
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent"
                                required
                            />
                        </motion.div>

                        {/* End Date */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <label className="block text-[#6a7b8c] font-medium">Date de fin</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="date"
                                name="end_date"
                                value={form.end_date}
                                onChange={handleDateChange}
                                min={form.start_date}
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent"
                                required
                            />
                            {new Date(form.end_date) < new Date(form.start_date) && (
                                <p className="text-sm text-red-500">La date de fin ne peut pas être antérieure à la date de début</p>
                            )}
                        </motion.div>

                        {/* Status */}
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
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent"
                            >
                                <option value="pending" className="text-[#6a7b8c]">En attente</option>
                            </select>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Enregistrer les modifications
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
        </div>
        </>
    );
};

export default Edit;