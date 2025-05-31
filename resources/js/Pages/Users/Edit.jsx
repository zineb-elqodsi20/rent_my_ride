import React from 'react';
import { useForm } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';
import { motion } from 'framer-motion';

export default function EditUser({ user }) {
  const { data, setData, post, errors, processing } = useForm({
    nom: user.nom || '',
    prenom: user.prenom || '',
    email: user.email || '',
    adresse: user.adresse || '',
    numero_telephone: user.numero_telephone || '',
    ville: user.ville || '',
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('users.update', user.id));
  };


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      <motion.div 
        initial="hidden"
        animate="show"
        variants={container}
        className="min-h-screen bg-gradient-to-br from-[#f9d5b3] via-[#d1b7b5] to-[#9cb3c5] p-6"
      >
        <motion.div 
          variants={item}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden p-8"
        >
          <motion.h1 
            variants={item}
            className="text-3xl font-bold text-[#2c3e50] mb-8 text-center"
          >
            Modifier l'utilisateur
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2" htmlFor="nom">
                Nom
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="nom"
                name="nom"
                value={data.nom}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                required
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

            {/* Prénom */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2" htmlFor="prenom">
                Prénom
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="prenom"
                name="prenom"
                value={data.prenom}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                required
              />
              {errors.prenom && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.prenom}
                </motion.p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2" htmlFor="email">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                required
              />
              {errors.email && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Adresse */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2" htmlFor="adresse">
                Adresse
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="adresse"
                name="adresse"
                value={data.adresse}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                required
              />
              {errors.adresse && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.adresse}
                </motion.p>
              )}
            </motion.div>

            {/* Téléphone */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2" htmlFor="numero_telephone">
                Téléphone
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="numero_telephone"
                name="numero_telephone"
                value={data.numero_telephone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                required
              />
              {errors.numero_telephone && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.numero_telephone}
                </motion.p>
              )}
            </motion.div>

            {/* Ville */}
            <motion.div variants={item}>
              <label className="block text-[#2c3e50] font-medium mb-2" htmlFor="ville">
                Ville
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="ville"
                name="ville"
                value={data.ville}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#9cb3c5] focus:border-transparent"
                required
              />
              {errors.ville && (
                <motion.p className="mt-1 text-sm text-[#d1b7b5]">
                  {errors.ville}
                </motion.p>
              )}
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
                {processing ? 'Enregistrement...' : 'Enregistrer les modifications'}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}