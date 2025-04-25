import React from 'react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';
import Footer from '@/Components/Footer';

const AboutPage = () => {
  const { t } = useTranslation();

  const valuesItems = t('about.values.items', { returnObjects: true });
  const whyChooseUsItems = t('about.whyChooseUs.items', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9d5b3]/10 via-[#f0c1a0]/10 via-[#d1b7b5]/10 via-[#b7c7d6]/10 to-[#9cb3c5]/10">
      <Navbar />
      
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] p-8 text-center rounded-xl shadow-lg mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-700">{t('about.subtitle')}</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Who we are */}
          <section
            className="
              bg-white p-8 rounded-xl shadow-md
              transition duration-300 ease-in-out
              hover:scale-105
              hover:shadow-2xl hover:shadow-[#f9d5b3]/40
              hover:ring-4 hover:ring-[#f9d5b3]/30 hover:ring-offset-2
            "
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center">
                <svg className="h-6 w-6 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('about.whoWeAre.title')}</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('about.whoWeAre.content')}
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="/images/luxury-cars-showroom.jpg" 
                  alt="Showroom de voitures de luxe" 
                  className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
                  style={{ maxHeight: 320 }}
                />
              </div>
            </div>
          </section>

          {/* Our values */}
          <section
            className="
              bg-white p-8 rounded-xl shadow-md
              transition duration-300 ease-in-out
              hover:scale-105
              hover:shadow-2xl hover:shadow-[#d1b7b5]/40
              hover:ring-4 hover:ring-[#d1b7b5]/30 hover:ring-offset-2
            "
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center">
                <svg className="h-6 w-6 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('about.values.title')}</h2>
            </div>
            <ul className="space-y-4">
              {Array.isArray(valuesItems) ? (
                valuesItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center">
                        <svg className="h-3 w-3 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-600">Aucune valeur trouvée.</li>
              )}
            </ul>
          </section>

          {/* Why choose us */}
          <section
            className="
              bg-white p-8 rounded-xl shadow-md
              transition duration-300 ease-in-out
              hover:scale-105
              hover:shadow-2xl hover:shadow-[#b7c7d6]/40
              hover:ring-4 hover:ring-[#b7c7d6]/30 hover:ring-offset-2
            "
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center">
                <svg className="h-6 w-6 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{t('about.whyChooseUs.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image à gauche sur desktop */}
              <div className="order-1 md:order-1 flex justify-center">
                <img
                  src="/images/happy-customer.jpg"
                  alt="Client satisfait avec une voiture de luxe"
                  className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
                  style={{ maxHeight: 320 }}
                />
              </div>

              {/* Texte à droite sur desktop */}
              <div className="order-2 md:order-2 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {t('about.whyChooseUs.content')}
                </p>
                <ul className="space-y-3">
                  {Array.isArray(whyChooseUsItems) ? (
                    whyChooseUsItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-[#f9d5b3]/30 flex items-center justify-center">
                            <svg className="h-3 w-3 text-[#d1b7b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="ml-3 text-gray-600">{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">Aucun élément trouvé.</li>
                  )}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
