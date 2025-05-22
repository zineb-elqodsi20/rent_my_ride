import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import UserNavbar from '@/Components/UserNavbar';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'fr';

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <>
            <UserNavbar />
            <Head title={t('forgotPassword.title')} />

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9d5b3] via-[#f0c1a0] via-[#d1b7b5] via-[#b7c7d6] to-[#9cb3c5] p-4"
            >
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden"
                >
                    <div className="p-6">
                        <motion.h2 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl font-bold text-gray-800 mb-2"
                        >
                            {t('forgotPassword.heading')}
                        </motion.h2>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mb-4 text-sm text-gray-600"
                        >
                            {t('forgotPassword.description')}
                        </motion.div>

                        {status && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4 p-3 text-sm font-medium text-green-600 bg-green-50 rounded"
                            >
                                {status === 'passwords.sent' ? t('forgotPassword.statusMessages.sent') : status}
                            </motion.div>
                        )}

                        <form onSubmit={submit}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder={t('forgotPassword.emailPlaceholder')}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 flex items-center justify-end"
                            >
                                <PrimaryButton 
                                    className="ms-4 px-4 py-2 bg-gradient-to-r from-[#f0c1a0] to-[#b7c7d6] hover:from-[#d1b7b5] hover:to-[#9cb3c5] text-white font-medium rounded-md shadow-sm transition-all duration-300"
                                    disabled={processing}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {processing ? t('forgotPassword.sending') : t('forgotPassword.button')}
                                </PrimaryButton>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}