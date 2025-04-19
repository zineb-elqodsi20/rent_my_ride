import { Head } from '@inertiajs/react';
import AdminNavbar from '@/Components/AdminNavbar';

export default function AdminDashboard() {
    return (
        
        <>
        <AdminNavbar/>
            <Head title="Tableau de bord Admin" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Bienvenue, ! Vous êtes sur le tableau de bord administrateur.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}