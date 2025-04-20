import { useForm } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';

export default function EditCar({ car }) {
    const { data, setData, post, processing, errors } = useForm({
        nom: car.nom || '',
        marque: car.marque || '',
        description: car.description || '',
        photo: null, 
        prix_par_jour: car.prix_par_jour || '',
        disponibilite: car.disponibilite === 1 ? true : false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('nom', data.nom);
        formData.append('marque', data.marque);
        formData.append('description', data.description);
    
        if (data.photo) {
            formData.append('photo', data.photo); 
        }
    
        formData.append('prix_par_jour', data.prix_par_jour);
        formData.append('disponibilite', data.disponibilite ? 1 : 0);
        formData.append('_method', 'PUT');
    
        post(`/cars/${car.id}`, formData, {
            forceFormData: true,
        });
    };

    return (
        <>
            <AdminNavbar/>
            <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4 text-indigo-600">Modifier la voiture</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
                    <div>
                        <label className="block">Nom</label>
                        <input
                            type="text"
                            name="nom"
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        {errors.nom && <p className="text-red-500">{errors.nom}</p>}
                    </div>

                    <div>
                        <label className="block">Marque</label>
                        <input
                            type="text"
                            name="marque"
                            value={data.marque}
                            onChange={(e) => setData('marque', e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        {errors.marque && <p className="text-red-500">{errors.marque}</p>}
                    </div>

                    <div>
                        <label className="block">Description</label>
                        <textarea
                            value={data.description}
                            name="description"
                            onChange={(e) => setData('description', e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        {errors.description && <p className="text-red-500">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block">Changer l'image</label>
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setData('photo', e.target.files[0])}
                            className="w-full"
                        />
                        {errors.photo && <p className="text-red-500">{errors.photo}</p>}
                    </div>
                    
                    <div>
                        <label className="block">Prix par jour (MAD)</label>
                        <input
                            name="prix_par_jour"
                            type="number"
                            value={data.prix_par_jour}
                            onChange={(e) => setData('prix_par_jour', e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        {errors.prix_par_jour && <p className="text-red-500">{errors.prix_par_jour}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="disponibilite"
                            checked={data.disponibilite}
                            onChange={(e) => setData('disponibilite', e.target.checked)}
                        />
                        <label>Disponible</label>
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                        disabled={processing}
                    >
                        Enregistrer les modifications
                    </button>
                </form>
            </div>
        </>
    );
}
