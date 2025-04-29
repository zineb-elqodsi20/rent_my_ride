import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function UserNavbar() {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'fr');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    return (
        <nav className="bg-gradient-to-t from-[#f9d5b3] via-[#f0c1a0] via-[#d1b7b5] via-[#b7c7d6] to-[#9cb3c5] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center h-full">
                            <img 
                                src="/images/logo.png" 
                                alt="Rent My Ride Logo" 
                                className="h-10 object-contain" 
                            />
                        </Link>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href={route('dashboard')}
                            className="text-gray-700 px-3 py-2 text-sm font-medium relative
                                       hover:text-gray-900 transition-colors duration-200
                                       after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3
                                       after:h-0.5 after:bg-gray-900 after:scale-x-0 after:origin-left
                                       after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            {t('dashboard')}
                        </Link>
                        <Link
                            href={route('List.carsuser')}
                            className="text-gray-700 px-3 py-2 text-sm font-medium relative
                                       hover:text-gray-900 transition-colors duration-200
                                       after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3
                                       after:h-0.5 after:bg-gray-900 after:scale-x-0 after:origin-left
                                       after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            {t('List.cars')}
                        </Link>
                        <Link
                            href={route('user.reservations')}
                            className="text-gray-700 px-3 py-2 text-sm font-medium relative
                                       hover:text-gray-900 transition-colors duration-200
                                       after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3
                                       after:h-0.5 after:bg-gray-900 after:scale-x-0 after:origin-left
                                       after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                            {t('Mes Réservations')}
                        </Link>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        {/* Sélecteur de langue */}
                        <div className="relative group">
                            <select
                                value={currentLanguage}
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="appearance-none relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-[#9cb3c5]
                                           border-2 border-[#d1b7b5] bg-transparent rounded-lg
                                           hover:bg-gradient-to-r from-[#f9d5b3]/20 to-[#9cb3c5]/20
                                           transition-all duration-500 hover:shadow-lg hover:shadow-[#f0c1a0]/30
                                           focus:outline-none cursor-pointer pr-8"
                            >
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-[#d1b7b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Link
                                href="/profile"
                                className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-[#9cb3c5]
                                           border-2 border-[#d1b7b5] bg-transparent rounded-lg
                                           hover:bg-gradient-to-r from-[#f9d5b3]/20 to-[#9cb3c5]/20
                                           transition-all duration-500 hover:shadow-lg hover:shadow-[#f0c1a0]/30
                                           focus:outline-none group"
                            >
                                <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                                <span className="relative z-10">
                                    {t('profile')}
                                </span>
                            </Link>
                            
                            <Link
                                method="post"
                                href={route('logout')}
                                as="button"
                                className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-white
                                           bg-gradient-to-r from-[#f9d5b3] to-[#9cb3c5] rounded-lg
                                           hover:from-[#f0c1a0] hover:to-[#d1b7b5]
                                           transition-all duration-500 shadow-sm hover:shadow-md
                                           focus:outline-none group"
                            >
                                <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                                <span className="relative z-10">
                                    {t('logout')}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}