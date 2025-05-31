import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const user = auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* NAVBAR */}
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

                        {/* Navigation (center optionnel) */}
                        <div className="hidden sm:flex sm:space-x-8 sm:ms-10">
                            {/* Tu peux ajouter ici des liens */}
                        </div>

                        {/* Profil + Déconnexion (Desktop) */}
                        <div className="hidden sm:ms-6 sm:flex sm:items-center space-x-2">
                            <Link
                                href={route('profile.edit')}
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

                {/* Menu Responsive (Mobile) */}
                <div className={`sm:hidden ${showingNavigationDropdown ? 'block' : 'hidden'}`}>
                    <ResponsiveNavLink href="/" active={route().current('dashboard')}>
                        Rent My Ride
                    </ResponsiveNavLink>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4 text-sm text-gray-500">
                            {user.name} <br /> {user.email}
                        </div>
                        <ResponsiveNavLink href={route('profile.edit')}>Profil</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">Déconnexion</ResponsiveNavLink>
                    </div>
                </div>
            </nav>

            {/* Header si nécessaire */}
            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            {/* Contenu de page */}
            <main>{children}</main>
        </div>
    );
}
