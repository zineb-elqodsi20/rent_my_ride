import React, { useState } from 'react';
import { router } from '@inertiajs/react';

const Create = ({ car, reservation }) => {
    if (!car) {
        return <div>Loading...</div>;
    }

    const [form, setForm] = useState({
        car_id: car.id,
        start_date: '',
        end_date: '',
        email: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowEmailConfirmation(true);
        setShowModal(true);
    };

    const handleEmailConfirm = (e) => {
        e.preventDefault();
        router.post(route('reservations.store'), form, {
            onSuccess: () => {
                setShowEmailConfirmation(false);
                setShowSuccess(true);
                // Redirect to dashboard after 2 seconds
                setTimeout(() => {
                    router.visit(route('dashboard'));
                }, 2000);
            },
            onError: (error) => {
                console.error('Error:', error);
            },
        });
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Réserver {car.name}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Date de début</label>
                    <input
                        type="date"
                        value={form.start_date}
                        onChange={(e) => setForm({ ...form, start_date: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Date de fin</label>
                    <input
                        type="date"
                        value={form.end_date}
                        onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Réserver
                </button>
            </form>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full">
                        {showEmailConfirmation ? (
                            <>
                                <h2 className="text-xl font-bold mb-4">Confirmez votre email</h2>
                                <form onSubmit={handleEmailConfirm} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium">Email</label>
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                        >
                                            Annuler
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                        >
                                            Confirmer
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : showSuccess ? (
                            <>
                                <h2 className="text-xl font-bold mb-4 text-green-600">Succès!</h2>
                                <div className="space-y-2">
                                    <p className="text-gray-700">Votre reçu a été envoyé à votre adresse email.</p>
                                    <p className="text-sm text-gray-500">Redirection vers le tableau de bord...</p>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Create;
