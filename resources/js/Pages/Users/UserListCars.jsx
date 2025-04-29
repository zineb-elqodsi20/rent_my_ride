import { router } from '@inertiajs/react';
import UserNavbar from '@/Components/UserNavbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function UserListCars({ cars }) {
  const { t } = useTranslation();

  return (
    <>
      <UserNavbar />

      {/* Hero Section avec dégradé */}
      <div className="bg-gradient-to-r from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            {t('available_cars')}
          </motion.h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('contact_subtitle')}
          </p>
        </div>
      </div>

      {/* Grille de voitures */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {cars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-white/20"
            >
              {/* Badge disponibilité */}
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
                car.disponibilite 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {car.disponibilite ? t('available') : t('unavailable')}
              </div>

              {/* Image */}
              <div className="h-56 overflow-hidden">
                {car.photo ? (
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={`/storage/${car.photo}`}
                    alt={car.nom}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#f9d5b3]/20 to-[#9cb3c5]/20 flex items-center justify-center">
                    <span className="text-gray-400">{t('no_image')}</span>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 truncate">{car.nom}</h3>
                  <p className="text-[#d1b7b5] font-medium">{car.marque}</p>
                </div>

                {car.description && (
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                    {car.description}
                  </p>
                )}

                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <div>
                    <span className="text-gray-500 text-xs">{t('starting_from')}</span>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f9d5b3] to-[#9cb3c5]">
                      {car.prix_par_jour} MAD
                    </p>
                    <span className="text-gray-400 text-xs">{t('per_day')}</span>
                  </div>

                  <motion.button
                    onClick={() => car.disponibilite && router.visit(`/cars/${car.id}/reserve`)}
                    disabled={!car.disponibilite}
                    whileHover={car.disponibilite ? { scale: 1.05 } : {}}
                    whileTap={car.disponibilite ? { scale: 0.95 } : {}}
                    className={`px-4 py-2 rounded-xl text-sm font-medium shadow-md transition-all ${
                      car.disponibilite
                        ? 'bg-gradient-to-r from-[#f9d5b3] to-[#9cb3c5] text-gray-800 hover:shadow-lg'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {car.disponibilite ? t('reserve') : t('unavailable')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
