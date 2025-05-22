import UserNavbar from '@/Components/UserNavbar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Importation de useTranslation
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
export default function UserDashboard({ user }) {
    const { t } = useTranslation(); // Utilisation du hook pour accéder à la fonction de traduction

    // Animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const hoverCard = {
        scale: 1.02,
        transition: { duration: 0.3 }
    };

    const tapButton = {
        scale: 0.98
    };

    return (
        <>
            <UserNavbar />
            <div 
                className="min-h-screen py-12"
                style={{
                    backgroundImage: "linear-gradient(rgba(249, 213, 179, 0.2), rgba(156, 179, 197, 0.2)), url('/images/car-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <motion.div 
                        className="bg-gradient-to-br from-[#f9d5b3]/80 via-[#f0c1a0]/80 via-[#d1b7b5]/80 to-[#b7c7d6]/80 backdrop-blur-md overflow-hidden shadow-2xl rounded-3xl border border-white/30"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="p-8">
                            {/* En-tête avec effet de dégradé textuel */}
                            <motion.div 
                                className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                <motion.h1 
                                    className="text-4xl font-extrabold"
                                    variants={item}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5]">
                                        Rent My Ride
                                    </span>
                                </motion.h1>
                                
                                <motion.div 
                                    className="flex items-center space-x-3"
                                    variants={item}
                                >
                                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-gray-800 backdrop-blur-lg border border-white/30">
                                        👋 {t('dashUser.welcome_back')}, {user.prenom} !
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Carte de bienvenue */}
                            <motion.div 
                                className="bg-white/20 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-inner"
                                variants={item}
                                whileHover={hoverCard}
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                            {t('dashUser.personal_space')}
                                        </h2>
                                        <p className="text-gray-700 max-w-2xl">
                                            {t('dashUser.manage_reservations_and_explore')}
                                        </p>
                                    </div>
                                    
                                    <motion.div 
                                        className="flex-shrink-0"
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                            scale: [1, 1.05, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 5
                                        }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5] flex items-center justify-center text-white text-2xl font-bold">
                                            {user.prenom.charAt(0).toUpperCase()}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Section d'actions */}
                            <motion.div 
                                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                <motion.div 
                                    className="bg-gradient-to-br from-[#f9d5b3]/50 to-[#d1b7b5]/50 p-6 rounded-xl border border-white/30 backdrop-blur-sm"
                                    variants={item}
                                    whileHover={hoverCard}
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('dashUser.quick_access')}</h3>
                                    <div className="space-y-3">
                                        <Link
                                                                    href={route('List.carsuser')}>
                                        <motion.button 
                                            className="w-full px-4 py-3 bg-white/30 hover:bg-white/40 text-gray-800 font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={tapButton}
                                        >
                                            <motion.span
                                                animate={{ x: [0, 2, 0] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                🚗
                                            </motion.span>
                                            {t('dashUser.view_available_vehicles')}
                                        </motion.button></Link> <br></br>
                                         <Link
                                                                    href={route('user.reservations')}>
                                        <motion.button 
                                            className="w-full px-4 py-3 bg-white/30 hover:bg-white/40 text-gray-800 font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={tapButton}
                                        >
                                            <motion.span
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ repeat: Infinity, duration: 3 }}
                                            >
                                                📅
                                            </motion.span>
                                            {t('dashUser.my_reservations')}
                                        </motion.button></Link>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="bg-gradient-to-br from-[#b7c7d6]/50 to-[#9cb3c5]/50 p-6 rounded-xl border border-white/30 backdrop-blur-sm"
                                    variants={item}
                                    whileHover={hoverCard}
                                >
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('dashUser.your_profile')}</h3>
                                    <div className="space-y-3">
                                    <Link href="/profile">
                                        <motion.button 
                                            className="w-full px-4 py-3 bg-white/30 hover:bg-white/40 text-gray-800 font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={tapButton}
                                        >
                                           
                                            <motion.span
                                                animate={{ y: [0, -2, 0] }}
                                                transition={{ repeat: Infinity, duration: 2.5 }}
                                            >
                                                👤
                                            </motion.span>
                                            {t('dashUser.edit_info')}
                                        </motion.button></Link>
                                        <br></br>
                                        <Link href="/profile">
                                        <motion.button 
                                            className="w-full px-4 py-3 bg-white/30 hover:bg-white/40 text-gray-800 font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={tapButton}
                                        >
                                            <motion.span
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ repeat: Infinity, duration: 3 }}
                                            >
                                                🔒
                                            </motion.span>
                                            {t('dashUser.change_password')}
                                        </motion.button></Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
