import { useEffect } from 'react';
import { usePage, Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import { useTranslation } from 'react-i18next';
import Navbar from '@/Components/Navbar';
import { motion } from 'framer-motion';

export default function Login({ status, canResetPassword }) {
    const { t } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login', {
            onFinish: () => reset('password'),
        });
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
            <Head title={t('login')} />
            
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
                            {t('login')}
                        </h2>
                        <p className="mt-2 text-sm text-[#6a7b8c]">
                            {t('not_registered_yet')}{' '}
                            <Link 
                                href={route('register')} 
                                className="font-medium text-[#d1b7b5] hover:text-[#f0c1a0] transition-colors"
                            >
                                {t('create_account')}
                            </Link>
                        </p>
                    </motion.div>

                    {status && (
                        <motion.div 
                            className="mb-4 text-sm font-medium text-green-600 text-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {status}
                        </motion.div>
                    )}

                    <motion.form 
                        className="mt-8 space-y-6" 
                        onSubmit={submit}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="rounded-md shadow-sm space-y-4">
                            {/* Email */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t('email_address')}
                                </label>
                                <motion.input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={`mt-1 block w-full rounded-lg border-[#d1b7b5] shadow-sm focus:border-[#f0c1a0] focus:ring-[#f0c1a0] sm:text-sm ${
                                        errors.email ? 'border-red-500' : ''
                                    }`}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    whileFocus={{ 
                                        boxShadow: "0 0 0 2px #f0c1a0",
                                        scale: 1.02
                                    }}
                                    autoFocus
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </motion.div>

                            {/* Mot de passe */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="password" className="block text-sm font-medium text-[#6a7b8c]">
                                    {t('password')}
                                </label>
                                <motion.input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className={`mt-1 block w-full rounded-lg border-[#d1b7b5] shadow-sm focus:border-[#f0c1a0] focus:ring-[#f0c1a0] sm:text-sm ${
                                        errors.password ? 'border-red-500' : ''
                                    }`}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    whileFocus={{ 
                                        boxShadow: "0 0 0 2px #f0c1a0",
                                        scale: 1.02
                                    }}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                )}
                            </motion.div>

                            {/* Remember me */}
                            <motion.div 
                                className="flex items-center justify-between"
                                variants={itemVariants}
                            >
                                <div className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        id="remember"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-[#6a7b8c]">
                                        {t('remember_me')}
                                    </label>
                                </div>

                                {canResetPassword && (
                                    <div className="text-sm">
                                        <Link 
                                            href={route('password.request')} 
                                            className="font-medium text-[#d1b7b5] hover:text-[#f0c1a0] transition-colors"
                                        >
                                            {t('forgot_password')}
                                        </Link>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants}>
                            <motion.button
                                type="submit"
                                disabled={processing}
                                className={`group relative w-full py-3 px-4 text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d1b7b5] transition-all duration-300 shadow-lg ${
                                    processing ? 'opacity-75 cursor-not-allowed' : ''
                                }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    background: 'linear-gradient(135deg, #f9d5b3 0%, #f0c1a0 25%, #d1b7b5 50%, #b7c7d6 75%, #9cb3c5 100%)',
                                    backgroundSize: '200% 200%'
                                }}
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {t('logging_in')}
                                        </>
                                    ) : (
                                        <>
                                            <svg className="-ml-1 mr-2 h-4 w-4 text-white opacity-90 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                            </svg>
                                            {t('sign_in')}
                                        </>
                                    )}
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#f9d5b3]/30 via-[#d1b7b5]/30 to-[#9cb3c5]/30 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </>
    );
}