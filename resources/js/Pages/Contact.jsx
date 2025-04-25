import React from 'react';
import { useTranslation } from 'react-i18next';
import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <>
        <Navbar/>
       
        <div className="min-h-screen bg-gradient-to-b from-[#f9d5b3]/10 via-[#f0c1a0]/10 via-[#d1b7b5]/10 via-[#b7c7d6]/10 to-[#9cb3c5]/10">
            <Head title={t('contact')} />
            
            <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('contact')}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('contact_subtitle', "Nous sommes là pour répondre à toutes vos questions sur nos véhicules de luxe.")}
                    </p>
                </div>

                {/* Grille de contact */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Formulaire */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('contact_form_title', "Envoyez-nous un message")}</h2>
                        
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('full_name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d1b7b5] focus:border-[#d1b7b5] transition-all"
                                    placeholder={t('full_name_placeholder', "Votre nom complet")}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d1b7b5] focus:border-[#d1b7b5] transition-all"
                                    placeholder={t('email_placeholder', "votre@email.com")}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('phone')}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d1b7b5] focus:border-[#d1b7b5] transition-all"
                                    placeholder={t('phone_placeholder', "+212 6 66 66 66 66")}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#d1b7b5] focus:border-[#d1b7b5] transition-all"
                                    placeholder={t('message_placeholder', "Votre message...")}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#f9d5b3] to-[#d1b7b5] text-gray-800 py-3 px-6 rounded-lg font-medium hover:from-[#f0c1a0] hover:to-[#b7a9a7] transition-all shadow-md hover:shadow-lg"
                            >
                                {t('contact_us_button', "Envoyer le message")}
                            </button>
                        </form>
                    </div>

                    {/* Informations de contact */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('contact_info_title', "Nos coordonnées")}</h2>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center mt-1">
                                        <svg className="h-5 w-5 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-800">{t('address')}</h3>
                                        <p className="text-gray-600">LOT ESSAFA RUE 06 NR 04 <br /> OULFA CASABLANCA </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center mt-1">
                                        <svg className="h-5 w-5 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-800">{t('phone')}</h3>
                                        <p className="text-gray-600">+212 6 84 40 80 42</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center mt-1">
                                        <svg className="h-5 w-5 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-800">Email</h3>
                                        <p className="text-gray-600">rentmyride@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Horaires */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('opening_hours')}</h2>
                            <ul className="space-y-3">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">{t('days.monday_friday')}</span>
                                    <span className="font-medium">9:00 - 19:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">{t('days.saturday')}</span>
                                    <span className="font-medium">10:00 - 18:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">{t('days.sunday')}</span>
                                    <span className="font-medium">Fermé</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default ContactPage;