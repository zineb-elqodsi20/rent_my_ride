import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import AdminNavbar from '@/Components/AdminNavbar';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    nom: '',
    marque: '',
    description: '',
    photo: '',
    prix_par_jour: '',
    disponibilite: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/cars');
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
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <AdminNavbar/>
      <motion.div 
        initial="hidden"
        animate="show"
        variants={container}
        className="min-h-screen bg-gradient-to-br from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] py-8"
      >
        <motion.div
          variants={item}
          className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden p-8"
        >
          <motion.h2 
            variants={item}
            className="text-3xl font-bold text-[#2c3e50] mb-6 text-center"
          >
            Ajouter une voiture
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2">Nom</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                value={data.nom}
                onChange={(e) => setData('nom', e.target.value)}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
              />
              {errors.nom && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-[#d1b7b5]"
                >
                  {errors.nom}
                </motion.p>
              )}
            </motion.div>

            {/* Marque */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2">Marque</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                value={data.marque}
                onChange={(e) => setData('marque', e.target.value)}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
              />
              {errors.marque && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.marque}
                </motion.p>
              )}
            </motion.div>

            {/* Description */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2">Description</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent min-h-[100px]"
              />
              {errors.description && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.description}
                </motion.p>
              )}
            </motion.div>

            {/* Photo */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2">Photo</label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="relative border-2 border-dashed border-[#b7c7d6] rounded-lg p-4 text-center"
              >
                <input
                  type="file"
                  onChange={(e) => setData('photo', e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-[#2c3e50]/70">
                  {data.photo ? (
                    <p className="font-medium">{data.photo.name}</p>
                  ) : (
                    <>
                      <p>Glissez-déposez votre fichier ici</p>
                      <p className="text-sm mt-1">ou cliquez pour sélectionner</p>
                    </>
                  )}
                </div>
              </motion.div>
              {errors.photo && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.photo}
                </motion.p>
              )}
            </motion.div>

            {/* Prix par jour */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2">Prix par jour (MAD)</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="number"
                step="0.01"
                value={data.prix_par_jour}
                onChange={(e) => setData('prix_par_jour', e.target.value)}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
              />
              {errors.prix_par_jour && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.prix_par_jour}
                </motion.p>
              )}
            </motion.div>

            {/* Disponibilité */}
            <motion.div variants={item} className="flex items-center">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="relative inline-block w-10 mr-2 align-middle select-none"
              >
                <input
                  type="checkbox"
                  id="disponibilite"
                  checked={data.disponibilite}
                  onChange={(e) => setData('disponibilite', e.target.checked)}
                  className="sr-only"
                />
                <label
                  htmlFor="disponibilite"
                  className={`block overflow-hidden h-6 rounded-full cursor-pointer ${data.disponibilite ? 'bg-[#9cb3c5]' : 'bg-[#d1b7b5]'}`}
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform ${data.disponibilite ? 'translate-x-4' : 'translate-x-0'}`}
                  />
                </label>
              </motion.div>
              <label htmlFor="disponibilite" className="text-[#2c3e50] font-medium">
                Disponible
              </label>
            </motion.div>

            {/* Bouton de soumission */}
            <motion.div variants={item} className="pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={processing}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white shadow-lg transition-all ${
                  processing ? 'bg-[#d1b7b5]' : 'bg-[#9cb3c5] hover:bg-[#b7c7d6]'
                }`}
              >
                {processing ? 'Enregistrement...' : 'Ajouter la voiture'}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}