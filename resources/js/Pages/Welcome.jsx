import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Welcome({ auth }) {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

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
