import React from 'react';
import { router, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import UserNavbar from '@/Components/UserNavbar';
import { useTranslation } from 'react-i18next';

const Index = ({ reservations }) => {
    const { t } = useTranslation();

    const handleDelete = (id) => {
        if (confirm(t('modifyReserv.reservation.confirm_delete'))) {
            router.delete(route('user.reservations.destroy', id));
        }
    };

    // Animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100 
            }
        }
    };

    const hoverEffect = {
        scale: 1.02,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 }
    };

    return (
        <>
            <UserNavbar />
            <div className="min-h-screen bg-gradient-to-b from-[#f9d5b3]/10 to-[#9cb3c5]/10 py-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    {/* Header with gradient */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-r from-[#f9d5b3] to-[#d1b7b5] rounded-t-2xl p-6 shadow-lg"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {t('modifyReserv.reservation.title')}
                        </h1>
                        <p className="text-gray-700 mt-2 text-lg">
                            {t('modifyReserv.reservation.subtitle')}
                        </p>
                    </motion.div>

                    {/* Table container */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="bg-white/80 backdrop-blur-sm rounded-b-2xl shadow-xl overflow-hidden border border-white/30"
                    >
                        {/* Responsive table */}
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-max">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#f9d5b3]/40 to-[#b7c7d6]/40">
                                        <th className="p-4 text-left text-gray-700 font-semibold whitespace-nowrap">
                                            {t('modifyReserv.reservation.table.car')}
                                        </th>
                                        <th className="p-4 text-left text-gray-700 font-semibold whitespace-nowrap">
                                            {t('modifyReserv.reservation.table.start')}
                                        </th>
                                        <th className="p-4 text-left text-gray-700 font-semibold whitespace-nowrap">
                                            {t('modifyReserv.reservation.table.end')}
                                        </th>
                                        <th className="p-4 text-left text-gray-700 font-semibold whitespace-nowrap">
                                            {t('modifyReserv.reservation.table.status')}
                                        </th>
                                        <th className="p-4 text-left text-gray-700 font-semibold whitespace-nowrap">
                                            {t('modifyReserv.reservation.table.actions')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map((res, index) => (
                                        <motion.tr
                                            key={res.id}
                                            variants={item}
                                            whileHover={hoverEffect}
                                            className={`border-t border-white/20 ${index % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}`}
                                        >
                                            <td className="p-4 text-gray-700 whitespace-nowrap">
                                                {res.car?.nom || t('modifyReserv.reservation.car_unavailable')}
                                            </td>
                                            <td className="p-4 text-gray-600 whitespace-nowrap">
                                                {new Date(res.start_date).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 text-gray-600 whitespace-nowrap">
                                                {new Date(res.end_date).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <motion.span
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                                        res.status === 'confirmée'
                                                            ? 'bg-green-100 text-green-800'
                                                            : res.status === 'en attente'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {t(`modifyReserv.reservation.status.en attente`)}
                                                </motion.span>
                                            </td>
                                            <td className="p-4 space-x-2 whitespace-nowrap">
                                                <Link 
                                                    href={route('user.reservations.edit', res.id)}
                                                    className="inline-block"
                                                >
                                                    <motion.button
                                                        whileHover={{ 
                                                            scale: 1.05,
                                                            background: "linear-gradient(to right, #f9d5b3, #f0c1a0)"
                                                        }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="px-4 py-2 bg-gradient-to-r from-[#f9d5b3] to-[#f0c1a0] text-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                                                    >
                                                        {t('modifyReserv.buttons.edit')}
                                                    </motion.button>
                                                </Link>
                                                <motion.button
                                                    onClick={() => handleDelete(res.id)}
                                                    whileHover={{ 
                                                        scale: 1.05,
                                                        background: "linear-gradient(to right, #d1b7b5, #b7c7d6)"
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-4 py-2 bg-gradient-to-r from-[#d1b7b5] to-[#b7c7d6] text-white rounded-lg shadow-sm hover:shadow-md transition-all"
                                                >
                                                    {t('modifyReserv.buttons.delete')}
                                                </motion.button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Empty state */}
                        {reservations.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-12 text-center"
                            >
                                <div className="mx-auto max-w-md">
                                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-[#f9d5b3]/20 to-[#9cb3c5]/20 rounded-full flex items-center justify-center">
                                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-700">
                                        {t('modifyReserv.reservation.no_reservations')}
                                    </h3>
                                    <p className="mt-2 text-gray-500">
                                        {t('modifyReserv.reservation.no_reservations_hint')}
                                    </p>
                                    <Link
                                        href={route('List.carsuser')}
                                        className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#f9d5b3] to-[#d1b7b5] text-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                                    >
                                        {t('modifyReserv.buttons.browse_cars')}
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Index;