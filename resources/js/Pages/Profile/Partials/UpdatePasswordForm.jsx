import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function UpdatePasswordForm({ className = '' }) {
    const { t } = useTranslation('translation'); // On utilise le namespace 'profile'
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={`${className} bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <header>
                <h2 className="text-lg font-bold animate-gradient-text bg-gradient-to-r from-[#f9d5b3] via-[#f0c1a0] via-[#d1b7b5] via-[#b7c7d6] to-[#9cb3c5] bg-clip-text text-transparent">
                    {t('updatePassword.title')}
                </h2>

                <p className="mt-1 text-sm text-[#9cb3c5] transition-colors duration-300 hover:text-[#f0c1a0]">
                    {t('updatePassword.description')}
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value={t('updatePassword.current')}
                        className="text-[#b7c7d6] transition-colors duration-300 hover:text-[#f0c1a0]"
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full rounded-lg border-[#d1b7b5] focus:border-[#9cb3c5] focus:ring-[#9cb3c5] focus:ring-opacity-50 shadow-sm transition-all duration-300"
                        autoComplete="current-password"
                    />

                    <InputError
                        message={errors.current_password}
                        className="mt-2 text-[#f0c1a0]"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password"
                        value={t('updatePassword.new')}
                        className="text-[#b7c7d6] transition-colors duration-300 hover:text-[#f0c1a0]"
                    />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full rounded-lg border-[#d1b7b5] focus:border-[#9cb3c5] focus:ring-[#9cb3c5] focus:ring-opacity-50 shadow-sm transition-all duration-300"
                        autoComplete="new-password"
                    />

                    <InputError 
                        message={errors.password} 
                        className="mt-2 text-[#f0c1a0]" 
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value={t('updatePassword.confirm')}
                        className="text-[#b7c7d6] transition-colors duration-300 hover:text-[#f0c1a0]"
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full rounded-lg border-[#d1b7b5] focus:border-[#9cb3c5] focus:ring-[#9cb3c5] focus:ring-opacity-50 shadow-sm transition-all duration-300"
                        autoComplete="new-password"
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2 text-[#f0c1a0]"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton 
                        disabled={processing}
                        className="relative overflow-hidden group bg-gradient-to-r from-[#b7c7d6] to-[#9cb3c5] hover:from-[#f9d5b3] hover:to-[#f0c1a0] transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-[#f0c1a0]/30"
                    >
                        <span className="relative z-10">
                            {processing ? t('updatePassword.saving') : t('updatePassword.save')}
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
                            {t('updatePassword.updated')}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
