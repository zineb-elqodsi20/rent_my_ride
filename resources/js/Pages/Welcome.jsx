import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';
import Footer from '@/Components/Footer';


export default function Welcome({ auth }) {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section with Background Image - Version premium */}
            <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Image de fond optimisée avec priorité de chargement */}
                <img 
                    src="/images/luxury-car-bg.jpg" 
                    alt="Luxury Car"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="eager"
                />
                
                {/* Overlay avec dégradé personnalisé */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                
                {/* Contenu avec typographie premium */}
                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f9d5b3] via-[#f0c1a0] to-[#d1b7b5] animate-text-shine">
                            {t('welcome_title')}
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl mb-12 font-medium text-[#b7c7d6] leading-relaxed tracking-wide">
                        {t('welcome_message')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link 
                            href={route('List.cars')}
                            className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden text-xl font-medium text-[#9cb3c5] border-2 border-[#d1b7b5] rounded-lg group hover:bg-gradient-to-r from-[#f9d5b3]/20 to-[#9cb3c5]/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#f0c1a0]/30"
                        >
                            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative z-10 flex items-center">
                                {t('view_vehicles')}
                                <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

           <Footer/>
        </div>
    );
}