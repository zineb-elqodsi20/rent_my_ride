import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

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
    post('/cars'); // assure-toi que cette route POST est bien définie
  };

  return (
    <AuthenticatedLayout>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Ajouter une voiture</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              value={data.nom}
              onChange={(e) => setData('nom', e.target.value)}
              className="w-full p-2 border rounded"
            />
            {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Marque</label>
            <input
              type="text"
              value={data.marque}
              onChange={(e) => setData('marque', e.target.value)}
              className="w-full p-2 border rounded"
            />
            {errors.marque && <p className="text-red-500 text-sm">{errors.marque}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className="w-full p-2 border rounded"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div>
            <label className="block text-gray-700"> Photo</label>
            <input
            type="file"
            onChange={(e) => setData('photo', e.target.files[0])}
            className="w-full p-2 border rounded"
        />
            {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Prix par jour MAD</label>
            <input
              type="number"
              step="0.01"
              value={data.prix_par_jour}
              onChange={(e) => setData('prix_par_jour', e.target.value)}
              className="w-full p-2 border rounded"
            />
            {errors.prix_par_jour && <p className="text-red-500 text-sm">{errors.prix_par_jour}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={data.disponibilite}
              onChange={(e) => setData('disponibilite', e.target.checked)}
            />
            <label className="text-gray-700">Disponible</label>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            disabled={processing}
          >
            Ajouter la voiture
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
