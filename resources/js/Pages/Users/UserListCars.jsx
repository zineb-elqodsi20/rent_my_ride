import { router } from '@inertiajs/react';
import UserNavbar from '@/Components/UserNavbar'; 

export default function UserListCars({ cars }) {
  return (
    <>
      <UserNavbar />
      <h1 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Nos Voitures Disponibles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
        {cars.map(car => (
          <div
            key={car.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-100 transform"
          >
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${car.disponibilite ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {car.disponibilite ? 'Disponible' : 'Indisponible'}
            </div>

            {car.photo ? (
              <img className="w-full h-56 object-cover" src={`/storage/${car.photo}`} alt={car.nom} />
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
                  <p className="text-2xl font-bold text-indigo-700">{car.prix_par_jour} MAD</p>
                  <span className="text-gray-500 text-xs">/ jour</span>
                </div>

                {/* ✅ BOUTON RÉSERVER DÉSACTIVÉ SI INDISPONIBLE */}
                <button 
                  onClick={() => car.disponibilite && router.visit(`/cars/${car.id}/reserve`)}
                  disabled={!car.disponibilite}
                  className={`px-4 py-2 text-sm font-medium rounded-lg shadow-md transition-colors ${
                    car.disponibilite
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
