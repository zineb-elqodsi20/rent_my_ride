import React from 'react';
import { router } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';
import { motion } from 'framer-motion';

export default function List({ users }) {
    const handleDelete = (id) => {
        if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
            router.delete(`/users/${id}`);
        }
    };

    const handleEdit = (id) => {
        router.visit(`/users/${id}/edit`);
    };

    // Variantes d'animation
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <AdminNavbar/>

            <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="min-h-screen bg-gradient-to-br from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] p-6"
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-3xl font-bold text-[#2c3e50] mb-6">Liste des utilisateurs</h1>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-end mb-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.visit('/users/create')}
                        className="bg-[#f0c1a0] hover:bg-[#d1b7b5] text-[#2c3e50] px-6 py-3 rounded-lg text-md font-semibold shadow-lg transition-all duration-300"
                    >
                        + Ajouter un utilisateur
                    </motion.button>
                </motion.div>

                <motion.div variants={itemVariants} className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                    <table className="min-w-full">
                        <thead className="bg-[#b7c7d6] text-[#2c3e50]">
                            <motion.tr 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <th className="py-4 px-6 text-left font-bold rounded-tl-xl">Nom</th>
                                <th className="py-4 px-6 text-left font-bold">Prénom</th>
                                <th className="py-4 px-6 text-left font-bold">Email</th>
                                <th className="py-4 px-6 text-left font-bold">Adresse</th>
                                <th className="py-4 px-6 text-left font-bold">Téléphone</th>
                                <th className="py-4 px-6 text-left font-bold">Ville</th>
                                <th className="py-4 px-6 text-left font-bold rounded-tr-xl">Actions</th>
                            </motion.tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <motion.tr 
                                    key={user.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.01, backgroundColor: 'rgba(183, 199, 214, 0.2)' }}
                                    className="border-t border-[#b7c7d6]/50"
                                >
                                    <td className="py-3 px-6">{user.nom}</td>
                                    <td className="py-3 px-6">{user.prenom}</td>
                                    <td className="py-3 px-6">{user.email}</td>
                                    <td className="py-3 px-6">{user.adresse}</td>
                                    <td className="py-3 px-6">{user.numero_telephone}</td>
                                    <td className="py-3 px-6">{user.ville}</td>
                                    <td className="py-3 px-6 flex space-x-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleEdit(user.id)}
                                            className="bg-[#9cb3c5] hover:bg-[#b7c7d6] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md"
                                        >
                                            Modifier
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleDelete(user.id)}
                                            className="bg-[#d1b7b5] hover:bg-[#f0c1a0] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md"
                                        >
                                            Supprimer
                                        </motion.button>
                                    </td>
                                </motion.tr>
                            ))}
                            {users.length === 0 && (
                                <motion.tr 
                                    variants={itemVariants}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <td colSpan="7" className="text-center py-8 text-[#2c3e50]/70">
                                        Aucun utilisateur trouvé.
                                    </td>
                                </motion.tr>
                            )}
                        </tbody>
                    </table>
                </motion.div>
            </motion.div>
        </>
    );
}