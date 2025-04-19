import UserNavbar from '@/Components/UserNavbar';
export default function UserDashboard({ user }) {
    return (
        <>
        <UserNavbar/> 
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            salam, {user.nom} ! Vous êtes sur le tableau de bord utilisateur.
                        </div>
                    </div>
                </div>
            </div>
            </>
        
    );
}