import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DeleteUserForm({ className = '' }) {
    const { t } = useTranslation(['translation']);
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium animate-gradient-text bg-gradient-to-r from-[#f9d5b3] via-[#f0c1a0] via-[#d1b7b5] via-[#b7c7d6] to-[#9cb3c5] bg-clip-text text-transparent">
                    {t('profiledel.deleteAccount.title')}
                </h2>

                <p className="mt-1 text-sm text-gray-600 transition-colors duration-300 hover:text-[#9cb3c5]">
                    {t('profiledel.deleteAccount.description')}
                </p>
            </header>

            <DangerButton 
                onClick={confirmUserDeletion}
                className="relative overflow-hidden group"
            >
                <span className="relative z-10">{t('profiledel.deleteAccount.delete')}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f9d5b3] via-[#f0c1a0] to-[#d1b7b5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6 bg-gradient-to-br from-white to-[#f9d5b3]/10">
                    <h2 className="text-lg font-medium text-[#9cb3c5]">
                        {t('profiledel.deleteAccount.confirm')}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        {t('profiledel.deleteAccount.description')}
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value={t('profiledel.deleteAccount.password')}
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4 border-[#b7c7d6] focus:border-[#9cb3c5] focus:ring-[#9cb3c5] rounded-md shadow-sm transition-all duration-300 focus:ring-2 focus:ring-opacity-50"
                            isFocused
                            placeholder={t('profiledel.deleteAccount.password')}
                        />

                        <InputError message={errors.password} className="mt-2 text-[#f0c1a0]" />
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <SecondaryButton 
                            onClick={closeModal}
                            className="bg-green-500 hover:bg-[#9cb3c5] text-white transition-colors duration-300"
                        >
                            {t('profiledel.deleteAccount.cancel')}
                        </SecondaryButton>

                        <DangerButton 
                            className="ms-3 bg-gradient-to-r from-[#f0c1a0] to-[#d1b7b5] hover:from-[#f9d5b3] hover:to-[#f0c1a0] transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#f0c1a0]/30"
                            disabled={processing}
                        >
                            {processing ? t('common:processing') : t('profiledel.deleteAccount.delete')}
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}