import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';

export default function EditUser({ user }) {
  // Initialisation du formulaire avec les données de l'utilisateur
  const { data, setData, post, errors } = useForm({
    nom: user.nom || '',
    prenom: user.prenom || '',
    email: user.email || '',
    adresse: user.adresse || '',
    numero_telephone: user.numero_telephone || '',
    ville: user.ville || '',
  });

  // Gère la mise à jour des champs du formulaire
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  // Gère l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('users.update', user.id), {
      onSuccess: () => {
        alert('Utilisateur mis à jour avec succès!');
      },
      onError: () => {
        alert('Une erreur est survenue lors de la mise à jour!');
      },
    });
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">Modifier l'utilisateur</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom */}
          <div>
            <label className="block text-gray-700" htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={data.nom}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.nom && <p className="text-red-600 text-sm">{errors.nom}</p>}
          </div>

          {/* Prénom */}
          <div>
            <label className="block text-gray-700" htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={data.prenom}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.prenom && <p className="text-red-600 text-sm">{errors.prenom}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          {/* Adresse */}
          <div>
            <label className="block text-gray-700" htmlFor="adresse">Adresse</label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              value={data.adresse}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.adresse && <p className="text-red-600 text-sm">{errors.adresse}</p>}
          </div>

          {/* Numéro de téléphone */}
          <div>
            <label className="block text-gray-700" htmlFor="numero_telephone">Téléphone</label>
            <input
              type="text"
              id="numero_telephone"
              name="numero_telephone"
              value={data.numero_telephone}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.numero_telephone && <p className="text-red-600 text-sm">{errors.numero_telephone}</p>}
          </div>

          {/* Ville */}
          <div>
            <label className="block text-gray-700" htmlFor="ville">Ville</label>
            <input
              type="text"
              id="ville"
              name="ville"
              value={data.ville}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            {errors.ville && <p className="text-red-600 text-sm">{errors.ville}</p>}
          </div>

          {/* Bouton de soumission */}
          <div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full">
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
