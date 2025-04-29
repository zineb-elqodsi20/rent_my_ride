import { useForm } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';
import { motion } from 'framer-motion';

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
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen bg-gradient-to-br from-[#f9d5b3] to-[#9cb3c5] py-10 px-4"
            >
                <div className="max-w-md mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] p-6">
                            <h2 className="text-3xl font-bold text-white text-center">Modifier la voiture</h2>
                        </div>
                        
                        <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-6 space-y-6">
                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="space-y-2"
                            >
                                <label className="block text-[#6a7b8c] font-medium">Nom</label>
                                <input
                                    type="text"
                                    name="nom"
                                    value={data.nom}
                                    onChange={(e) => setData('nom', e.target.value)}
                                    className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent transition-all"
                                />
                                {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
                            </motion.div>

                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-2"
                            >
                                <label className="block text-[#6a7b8c] font-medium">Marque</label>
                                <input
                                    type="text"
                                    name="marque"
                                    value={data.marque}
                                    onChange={(e) => setData('marque', e.target.value)}
                                    className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent transition-all"
                                />
                                {errors.marque && <p className="text-red-500 text-sm">{errors.marque}</p>}
                            </motion.div>

                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-2"
                            >
                                <label className="block text-[#6a7b8c] font-medium">Description</label>
                                <textarea
                                    value={data.description}
                                    name="description"
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent transition-all h-32"
                                />
                                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                            </motion.div>

                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-2"
                            >
                                <label className="block text-[#6a7b8c] font-medium">Changer l'image</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={(e) => setData('photo', e.target.files[0])}
                                        className="opacity-0 absolute w-full h-full cursor-pointer"
                                        id="fileInput"
                                    />
                                    <label 
                                        htmlFor="fileInput"
                                        className="block w-full p-3 border-2 border-dashed border-[#b7c7d6] rounded-lg hover:border-[#d1b7b5] transition-colors cursor-pointer text-center"
                                    >
                                        {data.photo ? data.photo.name : 'Choisir un fichier'}
                                    </label>
                                </div>
                                {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
                            </motion.div>
                            
                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-2"
                            >
                                <label className="block text-[#6a7b8c] font-medium">Prix par jour (MAD)</label>
                                <input
                                    name="prix_par_jour"
                                    type="number"
                                    value={data.prix_par_jour}
                                    onChange={(e) => setData('prix_par_jour', e.target.value)}
                                    className="w-full p-3 border border-[#b7c7d6] rounded-lg focus:ring-2 focus:ring-[#d1b7b5] focus:border-transparent transition-all"
                                />
                                {errors.prix_par_jour && <p className="text-red-500 text-sm">{errors.prix_par_jour}</p>}
                            </motion.div>

                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center space-x-3"
                            >
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        name="disponibilite"
                                        id="disponibilite"
                                        checked={data.disponibilite}
                                        onChange={(e) => setData('disponibilite', e.target.checked)}
                                        className="opacity-0 absolute h-0 w-0"
                                    />
                                    <label 
                                        htmlFor="disponibilite"
                                        className={`block w-12 h-6 rounded-full cursor-pointer transition-colors ${data.disponibilite ? 'bg-[#d1b7b5]' : 'bg-[#b7c7d6]'}`}
                                    >
                                        <span className={`block w-5 h-5 mt-0.5 ml-0.5 rounded-full bg-white shadow-md transform transition-transform ${data.disponibilite ? 'translate-x-6' : 'translate-x-0'}`}></span>
                                    </label>
                                </div>
                                <label htmlFor="disponibilite" className="text-[#6a7b8c] font-medium cursor-pointer">Disponible</label>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                disabled={processing}
                            >
                                {processing ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enregistrement...
                                    </span>
                                ) : 'Enregistrer les modifications'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}