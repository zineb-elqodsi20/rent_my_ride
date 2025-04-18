import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Fichiers de traduction
const resources = {
  fr: {
    translation: {
      welcome: "Bienvenue",
      login: "Connexion",
      register: "S'inscrire",
      dashboard: "Tableau de bord",
      home: "Accueil",
      about: "À propos",
      contact: "Contact",
      welcome_title: "Bienvenue sur notre site",
      welcome_message: "Nous sommes ravis de vous accueillir sur notre plateforme. Découvrez nos services et produits.",
      company_name: "Votre Entreprise",
      company_slogan: "Un slogan accrocheur ici",
      useful_links: "Liens utiles",
      all_rights_reserved: "Tous droits réservés."
    }
  },
  en: {
    translation: {
      welcome: "Welcome",
      login: "Login",
      register: "Register",
      dashboard: "Dashboard",
      home: "Home",
      about: "About Us",
      contact: "Contact",
      welcome_title: "Welcome to our website",
      welcome_message: "We are delighted to welcome you to our platform. Discover our services and products.",
      company_name: "Your Company",
      company_slogan: "A catchy slogan here",
      useful_links: "Useful Links",
      all_rights_reserved: "All rights reserved."
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      login: "Iniciar sesión",
      register: "Registrarse",
      dashboard: "Panel de control",
      home: "Inicio",
      about: "Sobre nosotros",
      contact: "Contacto",
      welcome_title: "Bienvenido a nuestro sitio web",
      welcome_message: "Estamos encantados de darle la bienvenida a nuestra plataforma. Descubra nuestros servicios y productos.",
      company_name: "Su Empresa",
      company_slogan: "Un eslogan pegadizo aquí",
      useful_links: "Enlaces útiles",
      all_rights_reserved: "Todos los derechos reservados."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;