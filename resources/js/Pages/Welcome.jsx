import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Welcome({ auth }) {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'fr');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Left side - Logo + Nom */}
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="flex items-center h-full">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Rent My Ride Logo" 
                                    className="h-full py-2 object-contain" 
                                />
                                <span className="ml-2 text-xl font-bold text-indigo-600">
                                    Rent My Ride
                                </span>
                            </Link>
                        </div>

                        {/* Center - Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                                {t('home')}
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                                {t('about')}
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                                {t('contact')}
                            </Link>
                        </div>

                        {/* Right side - Auth + Language */}
                        <div className="flex items-center space-x-4">
                            {/* Language Selector */}
                            <select 
                                value={currentLanguage}
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="border-gray-300 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500"
                            >
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                            </select>

                            {/* Auth Links */}
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                                >
                                    {t('dashboard')}
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                                    >
                                        {t('login')}
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                                    >
                                        {t('register')}
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">{t('welcome_title')}</h1>
                    <p className="text-xl text-gray-600 mb-8">{t('welcome_message')}</p>
                    <Link 
                        href={route('register')} 
                        className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
                    >
                        {t('get_started')}
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-12">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-center md:order-2 space-x-6">
                            <Link href="/about" className="text-gray-400 hover:text-gray-500">
                                {t('about')}
                            </Link>
                            <Link href="/contact" className="text-gray-400 hover:text-gray-500">
                                {t('contact')}
                            </Link>
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p className="text-center text-base text-gray-400">
                                &copy; {new Date().getFullYear()} Rent My Ride. {t('all_rights_reserved')}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}