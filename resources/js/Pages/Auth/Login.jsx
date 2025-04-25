import { useEffect } from 'react';
import { usePage, Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import { useTranslation } from 'react-i18next';
import Navbar from '@/Components/Navbar';

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

    return (
        <>
      
            <Head title={t('login')} />
            
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9d5b3]/50 via-[#d1b7b5]/50 to-[#9cb3c5]/50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-800">
                            {t('login')}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            {t('not_registered_yet')}
                            <Link href={route('register')} className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                                {t('create_account')}
                            </Link>
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600 text-center">
                            {status}
                        </div>
                    )}

                    <form className="mt-8 space-y-6" onSubmit={submit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    {t('email_address')}
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.email ? 'border-red-500' : ''
                                    }`}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    autoFocus
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Mot de passe */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    {t('password')}
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.password ? 'border-red-500' : ''
                                    }`}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember me */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        id="remember"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                        {t('remember_me')}
                                    </label>
                                </div>

                                {canResetPassword && (
                                    <div className="text-sm">
                                        <Link 
                                            href={route('password.request')} 
                                            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                                        >
                                            {t('forgot_password')}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className={`group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                                    processing ? 'opacity-75 cursor-not-allowed' : ''
                                }`}
                            >
                                {processing ? t('logging_in') : t('sign_in')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
