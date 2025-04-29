import React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from '@inertiajs/react';

export default function UserNavbar() {
    const { t } = useTranslation();
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
                            href="/"
                            className="text-gray-700 px-3 py-2 text-sm font-medium relative
                                       hover:text-gray-900 transition-colors duration-200
                                       after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3
                                       after:h-0.5 after:bg-gray-900 after:scale-x-0 after:origin-left
                                       after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                           {t('home')}
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
                        <Link
                            href="/about"
                            className="text-gray-700 px-3 py-2 text-sm font-medium relative
                                       hover:text-gray-900 transition-colors duration-200
                                       after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3
                                       after:h-0.5 after:bg-gray-900 after:scale-x-0 after:origin-left
                                       after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                           {t('aboutMenu')}
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 px-3 py-2 text-sm font-medium relative
                                       hover:text-gray-900 transition-colors duration-200
                                       after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3
                                       after:h-0.5 after:bg-gray-900 after:scale-x-0 after:origin-left
                                       after:transition-transform after:duration-200 hover:after:scale-x-100"
                        >
                           {t('contact')}
                        </Link>
                    </div>
                    
                    <div className="flex items-center space-x-4">
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