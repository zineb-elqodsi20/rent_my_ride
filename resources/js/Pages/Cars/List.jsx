import { useState } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from '@inertiajs/react';
export default function ListCars({ cars }) {
  const handleEdit = (carId) => {
    window.location.href = `/cars/${carId}/edit`;
  };

  const handleDelete = (carId) => {
    if (confirm('Voulez-vous vraiment supprimer cette voiture ?')) {
      router.delete(`/cars/${carId}`);
    }
  };
  

  return (
    <AuthenticatedLayout>
          <h1 className="text-2xl font-bold text-indigo-600 mb-6">Liste des voitures</h1>
                    <div className="flex justify-end mb-4">
                                <button
                                    onClick={() => router.visit('/cars/create')}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
                                >
                                    + Ajouter
                                </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
                                          {cars.map(car => (
                    <div 
                                           key={car.id} 
                                          className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100" >
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${car.disponibilite ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                          {car.disponibilite ? 'Disponible' : 'Indisponible'}
                    </div>
                                        {car.photo ? (
              
              <img  className="w-full h-56 object-cover" src={`/storage/${car.photo}`} alt={car.nom} />

            ) : (
                      <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400">Pas d'image disponible</span>
                      </div>
            )}

                      <div className="p-6">
                        
                      <div className="mb-3">
                                  <h3 className="text-xl font-bold text-gray-800">{car.nom}</h3>
                                  <p className="text-indigo-700 font-medium">{car.marque}</p>
                      </div>

              {car.description && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {car.description}
                </p>
              )}

             
              <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-4">
                <div>
                  <span className="text-gray-500 text-sm">À partir de</span>
                  <p className="text-2xl font-bold text-indigo-700">{car.prix_par_jour}  MAD</p>
                  <span className="text-gray-500 text-xs">/ jour</span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(car.id)}
                    className="px-4 py-2 bg-indigo-700 text-white text-sm font-medium rounded-lg hover:bg-indigo-800 transition-colors"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)}
                    className="px-4 py-2 bg-white text-red-600 text-sm font-medium rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AuthenticatedLayout>
  );
}