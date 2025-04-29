import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Navbar';
import '../../i18n'; // assure-toi que le chemin est bon
import { useTranslation } from 'react-i18next';

export default function Register() {
    const { t } = useTranslation();

    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        password_confirmation: '',
        numero_telephone: '',
        adresse: '',
        ville: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
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
        <Navbar/>
            <Head title={t("registerpage.title")} />
            
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5] py-12 px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full space-y-8 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl"
                >
                    <motion.div 
                        className="text-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.img
                            src="https://img.icons8.com/fluency/96/000000/car-rental.png"
                            alt="Logo location voiture"
                            className="mx-auto h-16 w-16"
                            animate={{ 
                                rotate: [0, 5, -5, 0],
                                y: [0, -5, 0]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                        <h2 className="mt-4 text-3xl font-bold text-[#2c3e50]">
                            {t("registerpage.title")}
                        </h2>
                        <p className="mt-2 text-sm text-[#6a7b8c]">
                            {t("registerpage.already_registered")}{' '}
                            <Link 
                                href={route('login')} 
                                className="font-medium text-[#d1b7b5] hover:text-[#f0c1a0] transition-colors"
                            >
                                {t("registerpage.login")}
                            </Link>
                        </p>
                    </motion.div>

                    <motion.form 
                        className="mt-8 space-y-6" 
                        onSubmit={submit}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="rounded-md shadow-sm space-y-4">
                            <motion.div 
                                className="grid grid-cols-2 gap-4"
                                variants={itemVariants}
                            >
                                <div>
                                    <label htmlFor="nom" className="block text-sm font-medium text-[#6a7b8c]">
                                        {t("registerpage.lastname")}
                                    </label>
                                    <motion.input
                                        id="nom"
                                        name="nom"
                                        type="text"
                                        required
                                        className={`mt-1 block w-full rounded-lg border ${
                                            errors.nom ? 'border-red-500' : 'border-[#d1b7b5]'
                                        }`}
                                        value={data.nom}
                                        onChange={(e) => setData('nom', e.target.value)}
                                        whileFocus={{ 
                                            boxShadow: "0 0 0 2px #f0c1a0",
                                            scale: 1.02
                                        }}
                                    />
                                    {errors.nom && (
                                        <p className="mt-1 text-sm text-red-600">{errors.nom}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="prenom" className="block text-sm font-medium text-[#6a7b8c]">
                                        {t("registerpage.firstname")}
                                    </label>
                                    <motion.input
                                        id="prenom"
                                        name="prenom"
                                        type="text"
                                        required
                                        className={`mt-1 block w-full rounded-lg border ${
                                            errors.prenom ? 'border-red-500' : 'border-[#d1b7b5]'
                                        }`}
                                        value={data.prenom}
                                        onChange={(e) => setData('prenom', e.target.value)}
                                        whileFocus={{ 
                                            boxShadow: "0 0 0 2px #f0c1a0",
                                            scale: 1.02
                                        }}
                                    />
                                    {errors.prenom && (
                                        <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>
                                    )}
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t("registerpage.email")}
                                </label>
                                <motion.input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={`mt-1 block w-full rounded-lg border ${
                                        errors.email ? 'border-red-500' : 'border-[#d1b7b5]'
                                    }`}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    whileFocus={{ boxShadow: "0 0 0 2px #f0c1a0", scale: 1.02 }}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </motion.div>

                            {/* Téléphone */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="numero_telephone" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t("registerpage.phone")}
                                </label>
                                <motion.input
                                    id="numero_telephone"
                                    name="numero_telephone"
                                    type="tel"
                                    className={`mt-1 block w-full rounded-lg border ${
                                        errors.numero_telephone ? 'border-red-500' : 'border-[#d1b7b5]'
                                    }`}
                                    value={data.numero_telephone}
                                    onChange={(e) => setData('numero_telephone', e.target.value)}
                                    whileFocus={{ boxShadow: "0 0 0 2px #f0c1a0", scale: 1.02 }}
                                />
                                {errors.numero_telephone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.numero_telephone}</p>
                                )}
                            </motion.div>

                            {/* Adresse */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="adresse" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t("registerpage.address")}
                                </label>
                                <motion.input
                                    id="adresse"
                                    name="adresse"
                                    type="text"
                                    required
                                    className={`mt-1 block w-full rounded-lg border ${
                                        errors.adresse ? 'border-red-500' : 'border-[#d1b7b5]'
                                    }`}
                                    value={data.adresse}
                                    onChange={(e) => setData('adresse', e.target.value)}
                                    whileFocus={{ boxShadow: "0 0 0 2px #f0c1a0", scale: 1.02 }}
                                />
                                {errors.adresse && (
                                    <p className="mt-1 text-sm text-red-600">{errors.adresse}</p>
                                )}
                            </motion.div>

                            {/* Ville */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="ville" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t("registerpage.city")}
                                </label>
                                <motion.input
                                    id="ville"
                                    name="ville"
                                    type="text"
                                    required
                                    className={`mt-1 block w-full rounded-lg border ${
                                        errors.ville ? 'border-red-500' : 'border-[#d1b7b5]'
                                    }`}
                                    value={data.ville}
                                    onChange={(e) => setData('ville', e.target.value)}
                                    whileFocus={{ boxShadow: "0 0 0 2px #f0c1a0", scale: 1.02 }}
                                />
                                {errors.ville && (
                                    <p className="mt-1 text-sm text-red-600">{errors.ville}</p>
                                )}
                            </motion.div>

                            {/* Mot de passe */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="password" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t("registerpage.password")}
                                </label>
                                <motion.input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className={`mt-1 block w-full rounded-lg border ${
                                        errors.password ? 'border-red-500' : 'border-[#d1b7b5]'
                                    }`}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    whileFocus={{ boxShadow: "0 0 0 2px #f0c1a0", scale: 1.02 }}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                )}
                            </motion.div>

                            {/* Confirmation mot de passe */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t("registerpage.password_confirmation")}
                                </label>
                                <motion.input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    required
                                    className={`mt-1 block w-full rounded-lg border ${
                                        errors.password_confirmation ? 'border-red-500' : 'border-[#d1b7b5]'
                                    }`}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    whileFocus={{ boxShadow: "0 0 0 2px #f0c1a0", scale: 1.02 }}
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password_confirmation}</p>
                                )}
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants}>
                            <motion.button
                                type="submit"
                                disabled={processing}
                                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[#f9d5b3] to-[#d1b7b5] hover:from-[#f0c1a0] hover:to-[#b7c7d6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9cb3c5] ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {processing ? t("registerpage.registering") : t("registerpage.register")}
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </>
    );
}
