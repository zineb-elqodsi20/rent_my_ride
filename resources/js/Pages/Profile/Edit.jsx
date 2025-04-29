
import UserNavbar from '@/Components/UserNavbar';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
       
            
            <>
            <UserNavbar/>
            <div className="py-12 bg-gradient-to-br from-[#f9d5b3]/10 via-[#f0c1a0]/10 to-[#9cb3c5]/10 animate-gradient-background">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow hover:shadow-md hover:shadow-[#b7c7d6] transition-all duration-500 sm:rounded-lg sm:p-8 hover:scale-[1.005]">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow hover:shadow-md hover:shadow-[#b7c7d6] transition-all duration-500 sm:rounded-lg sm:p-8 hover:scale-[1.005]">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow hover:shadow-md hover:shadow-[#b7c7d6] transition-all duration-500 sm:rounded-lg sm:p-8 hover:scale-[1.005]">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
            </>
    );
}