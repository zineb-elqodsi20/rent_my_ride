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
    const { t } = useTranslation();
    const { user } = usePage().props.auth;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        nom: user.nom || '',
        prenom: user.prenom || '',
        email: user.email || '',
        numero_telephone: user.numero_telephone || '',
        adresse: user.adresse || '',
        ville: user.ville || '',
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    nom: user.nom,
                    prenom: user.prenom,
                    email: user.email,
                    numero_telephone: user.numero_telephone,
                    adresse: user.adresse,
                    ville: user.ville,
                });
            },
        });
    };

    return (
        <section className={`${className} bg-white p-6 rounded-xl shadow-md`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    {t('updateprofile.update_title')}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    {t('updateprofile.update_description')}
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* Nom */}
                <div>
                    <InputLabel htmlFor="nom" value={t('updateprofile.last_name')} />
                    <TextInput
                        id="nom"
                        className="mt-1 block w-full"
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        required
                        autoComplete="family-name"
                    />
                    <InputError className="mt-2" message={errors.nom} />
                </div>

                {/* Prénom */}
                <div>
                    <InputLabel htmlFor="prenom" value={t('updateprofile.first_name')} />
                    <TextInput
                        id="prenom"
                        className="mt-1 block w-full"
                        value={data.prenom}
                        onChange={(e) => setData('prenom', e.target.value)}
                        required
                        autoComplete="given-name"
                    />
                    <InputError className="mt-2" message={errors.prenom} />
                </div>

                {/* Email */}
                <div>
                    <InputLabel htmlFor="email" value={t('updateprofile.email')} />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                {/* Téléphone */}
                <div>
                    <InputLabel htmlFor="numero_telephone" value={t('updateprofile.phone')} />
                    <TextInput
                        id="numero_telephone"
                        type="tel"
                        className="mt-1 block w-full"
                        value={data.numero_telephone}
                        onChange={(e) => setData('numero_telephone', e.target.value)}
                        autoComplete="tel"
                    />
                    <InputError className="mt-2" message={errors.numero_telephone} />
                </div>

                {/* Adresse */}
                <div>
                    <InputLabel htmlFor="adresse" value={t('updateprofile.address')} />
                    <TextInput
                        id="adresse"
                        className="mt-1 block w-full"
                        value={data.adresse}
                        onChange={(e) => setData('adresse', e.target.value)}
                        required
                        autoComplete="street-address"
                    />
                    <InputError className="mt-2" message={errors.adresse} />
                </div>

                {/* Ville */}
                <div>
                    <InputLabel htmlFor="ville" value={t('updateprofile.city')} />
                    <TextInput
                        id="ville"
                        className="mt-1 block w-full"
                        value={data.ville}
                        onChange={(e) => setData('ville', e.target.value)}
                        required
                        autoComplete="address-level2"
                    />
                    <InputError className="mt-2" message={errors.ville} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            {t('updateprofile.email_unverified')}
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                {t('updateprofile.resend_verification')}
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                {t('updateprofile.verification_sent')}
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        {processing ? t('updateprofile.saving') : t('updateprofile.save')}
                    </PrimaryButton>

                    {recentlySuccessful && (
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">
                                {t('updateprofile.saved')}
                            </p>
                        </Transition>
                    )}
                </div>
            </form>
        </section>
    );
}