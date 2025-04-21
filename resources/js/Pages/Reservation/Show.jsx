import { Inertia } from '@inertiajs/inertia';

export default function Show({ reservation }) {
    const handleDownload = () => {
        window.location.href = route('reservations.downloadPdf', reservation.id);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Réservation #{reservation.id}</h1>
            <p><strong>Voiture :</strong> {reservation.car.name}</p>
            <p><strong>Date de début :</strong> {reservation.start_date}</p>
            <p><strong>Date de fin :</strong> {reservation.end_date}</p>
            <p><strong>Prix total :</strong> {reservation.total_price} €</p>
            <p><strong>Statut :</strong> {reservation.status}</p>
            <button
                onClick={handleDownload}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
                Télécharger le reçu
            </button>
        </div>
    );
}