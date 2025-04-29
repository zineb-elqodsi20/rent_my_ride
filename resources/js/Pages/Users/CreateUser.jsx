import React from 'react';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AdminNavbar from '@/Components/AdminNavbar';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        prenom: '',
        email: '',
        adresse: '',
        numero_telephone: '',
        ville: '',
        password: '',
        role_id: '2',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'));
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
        hidden: { y: 20, opacity: 0 },
        show: {
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
                animate="show"
                variants={container}
                className="min-h-screen bg-gradient-to-br from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] py-8"
            >
                <motion.div
                    variants={item}
                    className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden p-8"
                >
                    <motion.h2 
                        variants={item}
                        className="text-3xl font-bold text-[#2c3e50] mb-8 text-center"
                    >
                        Ajouter un utilisateur
                    </motion.h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Nom */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Nom</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                value={data.nom}
                                onChange={(e) => setData('nom', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            />
                            {errors.nom && (
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-1 text-sm text-[#d1b7b5]"
                                >
                                    {errors.nom}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Prénom */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Prénom</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                value={data.prenom}
                                onChange={(e) => setData('prenom', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            />
                            {errors.prenom && (
                                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                                    {errors.prenom}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Email</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            />
                            {errors.email && (
                                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                                    {errors.email}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Adresse */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Adresse</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                value={data.adresse}
                                onChange={(e) => setData('adresse', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            />
                            {errors.adresse && (
                                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                                    {errors.adresse}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Téléphone */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Téléphone</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                value={data.numero_telephone}
                                onChange={(e) => setData('numero_telephone', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            />
                            {errors.numero_telephone && (
                                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                                    {errors.numero_telephone}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Ville */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Ville</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                value={data.ville}
                                onChange={(e) => setData('ville', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            />
                            {errors.ville && (
                                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                                    {errors.ville}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Mot de passe */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Mot de passe</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            />
                            {errors.password && (
                                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                                    {errors.password}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Rôle */}
                        <motion.div variants={item}>
                            <label className="block text-[#2c3e50] font-medium mb-2">Rôle</label>
                            <motion.select
                                whileFocus={{ scale: 1.02 }}
                                value={data.role_id}
                                onChange={(e) => setData('role_id', e.target.value)}
                                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                            >
                                <option value="1">Administrateur</option>
                                <option value="2">Utilisateur</option>
                            </motion.select>
                            {errors.role_id && (
                                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                                    {errors.role_id}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Bouton de soumission */}
                        <motion.div variants={item} className="pt-4">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={processing}
                                className={`w-full py-3 px-6 rounded-lg font-semibold text-white shadow-lg transition-all ${
                                    processing ? 'bg-[#d1b7b5]' : 'bg-[#9cb3c5] hover:bg-[#b7c7d6]'
                                }`}
                            >
                                {processing ? 'Création en cours...' : 'Ajouter l\'utilisateur'}
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
       </>
    );
}