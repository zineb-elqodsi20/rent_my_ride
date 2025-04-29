import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const { t } = useTranslation('translation');
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
                    {t('updateProfile.title')}
                </h2>

                <p className="mt-1 text-sm text-[#9cb3c5] transition-colors duration-300 hover:text-[#f0c1a0]">
                    {t('updateProfile.description')}
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="name"
                        value={t('updateProfile.name')}
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

                    <InputError className="mt-2 text-[#f0c1a0]" message={errors.name} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="email"
                        value={t('updateProfile.email')}
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

                    <InputError className="mt-2 text-[#f0c1a0]" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="p-4 rounded-lg bg-[#f9d5b3]/20 border border-[#f0c1a0]/30">
                        <p className="text-sm text-[#9cb3c5]">
                            {t('updateProfile.unverified')}
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="ml-1 rounded-md text-sm text-[#f0c1a0] underline hover:text-[#d1b7b5] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#9cb3c5] focus:ring-opacity-50"
                            >
                                {t('updateProfile.resend')}
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
                                {t('updateProfile.linkSent')}
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
                            {processing ? t('updateProfile.saving') : t('updateProfile.save')}
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
                            {t('updateProfile.saved')}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
