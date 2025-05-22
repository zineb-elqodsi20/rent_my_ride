import { motion } from 'framer-motion';
import { router } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';

export default function ListCars({ cars }) {
  const handleEdit = (carId) => {
    window.location.href = `/cars/${carId}/edit`;
  };

  const handleDelete = (carId) => {
    if (confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      router.delete(`/cars/${carId}`);
    }
  };

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <AdminNavbar />
      
      <div className="min-h-screen bg-gradient-to-br from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] p-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={item} className="flex justify-between items-center mb-8">
            <motion.h1 
              variants={item}
              className="text-3xl font-bold text-[#2c3e50]"
            >
              Liste des voitures
            </motion.h1>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.visit('/cars/create')}
              className="bg-[#f0c1a0] hover:bg-[#d1b7b5] text-[#2c3e50] px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
            >
              + Ajouter une voiture
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                variants={item}
                whileHover={{ y: -5 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[#b7c7d6]/30"
              >
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  car.disponibilite ? 'bg-[#9cb3c5] text-white' : 'bg-[#d1b7b5] text-white'
                }`}>
                  {car.disponibilite ? 'Disponible' : 'Indisponible'}
                </div>

                {car.photo ? (
                  <motion.img 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-56 object-cover"
                    src={`/storage/${car.photo}`} 
                    alt={car.nom} 
                  />
                ) : (
                  <div className="w-full h-56 bg-[#f9d5b3]/30 flex items-center justify-center">
                    <span className="text-[#2c3e50]/50">Pas d'image disponible</span>
                  </div>
                )}

                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-[#2c3e50]">{car.nom}</h3>
                    <p className="text-[#9cb3c5] font-medium">{car.marque}</p>
                  </div>

                  {car.description && (
                    <p className="text-[#2c3e50]/80 text-sm mb-4 line-clamp-2">
                      {car.description}
                    </p>
                  )}
<div className="mt-auto pt-4 border-t border-[#b7c7d6]/30 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <div className="min-w-0">
    <span className="text-[#2c3e50]/60 text-sm">À partir de</span>
    <p className="text-2xl font-bold text-[#9cb3c5] truncate">{car.prix_par_jour} MAD</p>
    <span className="text-[#2c3e50]/60 text-xs">/ jour</span>
  </div>

  <div className="flex flex-wrap justify-end gap-2 w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleEdit(car.id)}
      className="px-4 py-2 bg-[#9cb3c5] text-white text-sm font-medium rounded-lg hover:bg-[#b7c7d6] transition-colors shadow-md"
    >
      Modifier
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleDelete(car.id)}
      className="px-4 py-2 bg-white text-[#d1b7b5] text-sm font-medium rounded-lg border border-[#d1b7b5] hover:bg-[#f9d5b3]/20 transition-colors"
    >
      Supprimer
    </motion.button>
  </div>
</div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}