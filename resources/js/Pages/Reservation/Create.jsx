import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import UserNavbar from '@/Components/UserNavbar';
import { useTranslation } from 'react-i18next';
import Footer from '@/Components/Footer';


const Create = ({ car, reservation }) => {
    const { t } = useTranslation();

    if (!car) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5]">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="text-2xl text-[#6a7b8c]"
                >
                    {t('loading')} {/* Example of loading text */}
                </motion.div>
            </div>
        );
    }

    const [today, setToday] = useState('');
    const [form, setForm] = useState({
        car_id: car.id,
        start_date: '',
        end_date: '',
        email: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);

    useEffect(() => {
        // Définir la date minimale (aujourd'hui)
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setToday(formattedDate);

        // Si la date existante est antérieure à aujourd'hui, la remplacer
        if (form.start_date && new Date(form.start_date) < today) {
            setForm(prev => ({ ...prev, start_date: formattedDate }));
        }
    }, []);

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => {
            if (name === 'start_date' && prev.end_date && new Date(value) > new Date(prev.end_date)) {
                return { ...prev, [name]: value, end_date: value };
            }
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation supplémentaire côté client
        if (new Date(form.start_date) < new Date(today)) {
            alert(t('start_date_error'));
            return;
        }

        if (new Date(form.end_date) < new Date(form.start_date)) {
            alert(t('end_date_error'));
            return;
        }

        setShowEmailConfirmation(true);
        setShowModal(true);
    };

    const handleEmailConfirm = (e) => {
        e.preventDefault();
        router.post(route('reservations.store'), form, {
            onSuccess: () => {
                setShowEmailConfirmation(false);
                setShowSuccess(true);
                setTimeout(() => {
                    router.visit(route('dashboard'));
                }, 2000);
            },
            onError: (errors) => {
                if (errors.car_unavailable) {
                    alert(errors.car_unavailable);
                    setShowModal(false);
                } else {
                    console.error('Erreur inconnue :', errors);
                }
            },
        });
    };

    return (
        <>
        <UserNavbar />
        <div className="min-h-screen bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5] py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
            >
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden p-8"
                >
                    <div className="text-center mb-8">
                        <motion.h1 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl font-bold text-[#2c3e50] mb-2"
                        >
                            {t('reserve_car', { carName: car.name })}
                        </motion.h1>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] mx-auto rounded-full" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                        >
                            <label className="block text-[#6a7b8c] font-medium">{t('start_date')}</label>
                            <motion.input
                                whileFocus={{ 
                                    scale: 1.02,
                                    boxShadow: "0 0 0 2px #b7c7d6"
                                }}
                                type="date"
                                name="start_date"
                                value={form.start_date}
                                onChange={handleDateChange}
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:outline-none"
                                required
                                min={today}
                            />
                            {form.start_date && new Date(form.start_date) < new Date(today) && (
                                <p className="text-sm text-red-500">{t('start_date_error')}</p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-2"
                        >
                            <label className="block text-[#6a7b8c] font-medium">{t('end_date')}</label>
                            <motion.input
                                whileFocus={{ 
                                    scale: 1.02,
                                    boxShadow: "0 0 0 2px #b7c7d6"
                                }}
                                type="date"
                                name="end_date"
                                value={form.end_date}
                                onChange={handleDateChange}
                                className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:outline-none"
                                required
                                min={form.start_date || today}
                            />
                            {form.end_date && new Date(form.end_date) < new Date(form.start_date) && (
                                <p className="text-sm text-red-500">{t('end_date_error')}</p>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                {t('reserve')}
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>

            {/* Modal */}
            {showModal && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
                    >
                        {showEmailConfirmation ? (
                            <div className="p-6">
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-[#2c3e50]">{t('email_confirmation')}</h2>
                                    <div className="h-1 w-16 bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] mx-auto rounded-full mt-2" />
                                </div>
                                <form onSubmit={handleEmailConfirm} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="block text-[#6a7b8c] font-medium">{t('email')}</label>
                                        <motion.input
                                            whileFocus={{ 
                                                scale: 1.02,
                                                boxShadow: "0 0 0 2px #b7c7d6"
                                            }}
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-3">
                                        <motion.button
                                            type="button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setShowModal(false)}
                                            className="px-4 py-2 text-[#6a7b8c] hover:text-[#2c3e50] transition-colors"
                                        >
                                            {t('cancel')}
                                        </motion.button>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] text-white rounded-lg hover:shadow-md transition-all"
                                        >
                                            {t('confirm')}
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        ) : showSuccess ? (
                            <div className="p-8 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="inline-block mb-4 text-green-500 text-5xl"
                                >
                                    ✓
                                </motion.div>
                                <h2 className="text-2xl font-bold text-green-600 mb-2">{t('success')}</h2>
                                <div className="space-y-2 text-[#6a7b8c]">
                                    <p>{t('success_message')}</p>
                                    <p className="text-sm">{t('redirecting')}</p>
                                </div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2 }}
                                    className="h-1 bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] mt-4"
                                />
                            </div>
                        ) : null}
                    </motion.div>
                </motion.div>
            )}
        </div>
        
        </>
    );
};

export default Create;
