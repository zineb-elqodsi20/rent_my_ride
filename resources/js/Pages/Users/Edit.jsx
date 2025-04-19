import { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ListCars({ cars }) {
  const handleEdit = (carId) => {
    // Redirige vers la page de modification de la voiture
    window.location.href = `/cars/${carId}/edit`; // Ajuste la route de modification si nécessaire
  };

  const handleDelete = (carId) => {
    // Logique pour supprimer la voiture
    console.log("Supprimer la voiture avec l'ID: ", carId);
  };

  return (
    <AuthenticatedLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map(car => (
          <div key={car.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
            {/* Image de la voiture */}
            {car.photo ? (
              <img className="w-full h-48 object-cover" src={car.photo} alt={car.nom} />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-white text-xl">
                Pas d'image disponible
              </div>
            )}

            <div className="px-6 py-4">
              {/* Nom de la voiture */}
              <div className="font-bold text-xl mb-2 text-gray-800 hover:text-white">{car.nom}</div>
              {/* Marque de la voiture */}
              <p className="text-gray-700 text-base">
                Marque: {car.marque}
              </p>

              {/* Description de la voiture */}
              {car.description && (
                <p className="text-gray-700 text-base mt-2">
                  Description: {car.description}
                </p>
              )}

              {/* Prix par jour */}
              <p className="text-gray-700 text-base mt-2">
                Prix par jour: {car.prix_par_jour} €
              </p>

              {/* Disponibilité */}
              <p className={`text-sm mt-2 ${car.disponibilite ? 'text-green-500' : 'text-red-500'}`}>
                {car.disponibilite ? 'Disponible' : 'Indisponible'}
              </p>

              {/* Boutons Modifier et Supprimer */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(car.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(car.id)}
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AuthenticatedLayout>
  );
}
