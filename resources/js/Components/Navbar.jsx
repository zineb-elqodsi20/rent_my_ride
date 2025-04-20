import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { auth } = usePage().props;
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'fr');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
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
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                            {t('home')}
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                            {t('about')}
                        </Link>
                        <Link 
                            href={route('List.cars')}
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600">
                            Voitures
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                            {t('contact')}
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <select 
                            value={currentLanguage}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="border-gray-300 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>

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
    );
}
