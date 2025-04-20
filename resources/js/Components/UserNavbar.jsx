import React from 'react';
import { Link } from '@inertiajs/react';

export default function UserNavbar() {
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
                        <Link 
                            href="/"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                        >
                            Accueil
                        </Link>
                        <Link 
                            href={route('List.carsuser')}
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                        >
                            Voitures
                        </Link>
                        <Link 
                            href="/reservations"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                        >
                            Mes Réservations
                        </Link>
                        <Link 
                            href="/about"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                        >
                            À propos
                        </Link>
                        <Link 
                            href="/contact" 
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
                        >
                            Contact
                        </Link>
                        
                       
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/profile"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                        >
                            Profil
                        </Link>
                        <Link
                            method="post"
                            href={route('logout')}
                            as="button"
                            className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                        >
                            Déconnexion
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
