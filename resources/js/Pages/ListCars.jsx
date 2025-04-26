import { router } from '@inertiajs/react'; 
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function UserListCars({ cars }) {
  const handleReserve = (carId) => {
    router.visit(`/cars/${carId}/reserve`);
  };

  return (
    <>
    <Navbar/>
    


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

                <button
                  onClick={() => handleReserve(car.id)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
