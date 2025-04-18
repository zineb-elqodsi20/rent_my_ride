import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Get({ user }) {
    return (
        <AuthenticatedLayout user={user}>
            <Head title="Tableau de bord Admin" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            list users
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}