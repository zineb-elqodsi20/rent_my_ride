import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-indigo-600"> {/* Changé en indigo-600 */}
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-12 bg-gray-50"> {/* Fond gris clair */}
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow hover:shadow-md hover:shadow-indigo-100 transition-shadow duration-300 sm:rounded-lg sm:p-8"> {/* Effet hover */}
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow hover:shadow-md hover:shadow-indigo-100 transition-shadow duration-300 sm:rounded-lg sm:p-8"> {/* Effet hover */}
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow hover:shadow-md hover:shadow-indigo-100 transition-shadow duration-300 sm:rounded-lg sm:p-8"> {/* Effet hover */}
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}