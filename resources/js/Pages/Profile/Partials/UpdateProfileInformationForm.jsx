import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section className={`${className} bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
            <header>
                <h2 className="text-lg font-bold animate-gradient-text bg-gradient-to-r from-[#f9d5b3] via-[#f0c1a0] via-[#d1b7b5] via-[#b7c7d6] to-[#9cb3c5] bg-clip-text text-transparent">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-[#9cb3c5] transition-colors duration-300 hover:text-[#f0c1a0]">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel 
                        htmlFor="name" 
                        value="Name" 
                        className="text-[#b7c7d6] transition-colors duration-300 hover:text-[#f0c1a0]" 
                    />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full rounded-lg border-[#d1b7b5] focus:border-[#9cb3c5] focus:ring-[#9cb3c5] focus:ring-opacity-50 shadow-sm transition-all duration-300"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError 
                        className="mt-2 text-[#f0c1a0]" 
                        message={errors.name} 
                    />
                </div>

                <div>
                    <InputLabel 
                        htmlFor="email" 
                        value="Email" 
                        className="text-[#b7c7d6] transition-colors duration-300 hover:text-[#f0c1a0]" 
                    />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full rounded-lg border-[#d1b7b5] focus:border-[#9cb3c5] focus:ring-[#9cb3c5] focus:ring-opacity-50 shadow-sm transition-all duration-300"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError 
                        className="mt-2 text-[#f0c1a0]" 
                        message={errors.email} 
                    />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="p-4 rounded-lg bg-[#f9d5b3]/20 border border-[#f0c1a0]/30">
                        <p className="text-sm text-[#9cb3c5]">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="ml-1 rounded-md text-sm text-[#f0c1a0] underline hover:text-[#d1b7b5] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#9cb3c5] focus:ring-opacity-50"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <Transition
                                show={true}
                                enter="transition ease-in-out duration-500"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                className="mt-2 text-sm font-medium text-[#b7c7d6]"
                            >
                                A new verification link has been sent to your email address.
                            </Transition>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton 
                        disabled={processing}
                        className="relative overflow-hidden group bg-gradient-to-r from-[#b7c7d6] to-[#9cb3c5] hover:from-[#f9d5b3] hover:to-[#f0c1a0] transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-[#f0c1a0]/30"
                    >
                        <span className="relative z-10">
                            {processing ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Saving...
                                </span>
                            ) : 'Save'}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#f9d5b3] to-[#d1b7b5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out duration-500"
                        enterFrom="opacity-0 translate-x-4"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-in-out duration-500"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-4"
                    >
                        <p className="text-sm text-[#9cb3c5] animate-pulse">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}