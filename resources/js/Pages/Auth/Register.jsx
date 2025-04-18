import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';


export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        password_confirmation: '',
        numero_telephone: '',
        adresse: '',
        ville: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };
  
    return (
        <>
            <Head title="Inscription" />
            
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Créer un compte
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Déjà inscrit?{' '}
                            <Link href={route('login')} className="font-medium text-indigo-600 hover:text-indigo-500">
                                Connectez-vous
                            </Link>
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={submit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            {/* Nom et Prénom */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                                        Nom
                                    </label>
                                    <input
                                        id="nom"
                                        name="nom"
                                        type="text"
                                        autoComplete="family-name"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                            errors.nom ? 'border-red-500' : 'border'
                                        }`}
                                        value={data.nom}
                                        onChange={(e) => setData('nom', e.target.value)}
                                    />
                                    {errors.nom && (
                                        <p className="mt-1 text-sm text-red-600">{errors.nom}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                                        Prénom
                                    </label>
                                    <input
                                        id="prenom"
                                        name="prenom"
                                        type="text"
                                        autoComplete="given-name"
                                        required
                                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                            errors.prenom ? 'border-red-500' : 'border'
                                        }`}
                                        value={data.prenom}
                                        onChange={(e) => setData('prenom', e.target.value)}
                                    />
                                    {errors.prenom && (
                                        <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Adresse email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.email ? 'border-red-500' : 'border'
                                    }`}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Téléphone */}
                            <div>
                                <label htmlFor="numero_telephone" className="block text-sm font-medium text-gray-700">
                                    Numéro de téléphone (optionnel)
                                </label>
                                <input
                                    id="numero_telephone"
                                    name="numero_telephone"
                                    type="tel"
                                    autoComplete="tel"
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.numero_telephone ? 'border-red-500' : 'border'
                                    }`}
                                    value={data.numero_telephone}
                                    onChange={(e) => setData('numero_telephone', e.target.value)}
                                />
                                {errors.numero_telephone && (
                                    <p className="mt-1 text-sm text-red-600">{errors.numero_telephone}</p>
                                )}
                            </div>

                            {/* Adresse */}
                            <div>
                                <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
                                    Adresse
                                </label>
                                <input
                                    id="adresse"
                                    name="adresse"
                                    type="text"
                                    autoComplete="street-address"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.adresse ? 'border-red-500' : 'border'
                                    }`}
                                    value={data.adresse}
                                    onChange={(e) => setData('adresse', e.target.value)}
                                />
                                {errors.adresse && (
                                    <p className="mt-1 text-sm text-red-600">{errors.adresse}</p>
                                )}
                            </div>

                            {/* Ville */}
                            <div>
                                <label htmlFor="ville" className="block text-sm font-medium text-gray-700">
                                    Ville
                                </label>
                                <input
                                    id="ville"
                                    name="ville"
                                    type="text"
                                    autoComplete="address-level2"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.ville ? 'border-red-500' : 'border'
                                    }`}
                                    value={data.ville}
                                    onChange={(e) => setData('ville', e.target.value)}
                                />
                                {errors.ville && (
                                    <p className="mt-1 text-sm text-red-600">{errors.ville}</p>
                                )}
                            </div>

                            {/* Mot de passe */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.password ? 'border-red-500' : 'border'
                                    }`}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            {/* Confirmation mot de passe */}
                            <div>
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                                        errors.password_confirmation ? 'border-red-500' : 'border'
                                    }`}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password_confirmation}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                                    processing ? 'opacity-75 cursor-not-allowed' : ''
                                }`}
                            >
                                {processing ? 'Inscription en cours...' : 'S\'inscrire'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}