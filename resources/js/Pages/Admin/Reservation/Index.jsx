import React from 'react';
import { Link, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AdminNavbar from '@/Components/AdminNavbar';

const Index = ({ reservations }) => {
    const handleDelete = (id) => {
        if (confirm("Voulez-vous vraiment supprimer cette réservation ?")) {
            router.delete(route('admin.reservations.destroy', id));
        }
    };

    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
        <AdminNavbar/>
        <div className="min-h-screen bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5] py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] p-6">
                        <h1 className="text-3xl font-bold text-white">Liste des Réservations</h1>
                    </div>

                    {/* Table */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="p-6"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] text-white">
                                        <th className="p-4 text-left rounded-tl-lg">Voiture</th>
                                        <th className="p-4 text-left">Utilisateur</th>
                                        <th className="p-4 text-left">Début</th>
                                        <th className="p-4 text-left">Fin</th>
                                        <th className="p-4 text-left">Statut</th>
                                        <th className="p-4 text-left rounded-tr-lg">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map((res, index) => (
                                        <motion.tr
                                            key={res.id}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.01, backgroundColor: 'rgba(247, 247, 247, 0.8)' }}
                                            className={`border-b border-[#b7c7d6] ${index === reservations.length - 1 ? 'rounded-b-lg' : ''}`}
                                        >
                                            <td className="p-4 text-[#6a7b8c]">{res.car?.nom || 'N/A'}</td>
                                            <td className="p-4 text-[#6a7b8c]">{res.user?.nom || 'N/A'}</td>
                                            <td className="p-4 text-[#6a7b8c]">{res.start_date}</td>
                                            <td className="p-4 text-[#6a7b8c]">{res.end_date}</td>
                                            <td className="p-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    res.status === 'confirmée' ? 'bg-green-100 text-green-800' :
                                                    res.status === 'en attente' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                    {res.status}
                                                </span>
                                            </td>
                                            <td className="p-4 space-x-3">
                                                <Link
                                                    href={route('admin.reservations.edit', res.id)}
                                                    className="inline-block px-4 py-2 bg-[#b7c7d6] text-white rounded-lg hover:bg-[#9cb3c5] transition-colors"
                                                >
                                                    Modifier
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(res.id)}
                                                    className="inline-block px-4 py-2 bg-gradient-to-r from-[#d1b7b5] to-[#f0c1a0] text-white rounded-lg hover:opacity-90 transition-opacity"
                                                >
                                                    Supprimer
                                                </button>
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
                                className="text-center py-10 text-[#6a7b8c]"
                            >
                                Aucune réservation trouvée
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
        </>
    );
};

export default Index;