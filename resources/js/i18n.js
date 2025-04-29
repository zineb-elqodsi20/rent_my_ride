import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      // Navigation
      welcome: "Bienvenue",
      login: "Connexion",
      register: "S'inscrire",
      dashboard: "Tableau de bord",
      home: "Accueil",
      "List.cars": "Voitures",
      aboutMenu: "À propos",
      contact: "Contact",
      profile: "Profil",
      logout: "Déconnexion",
      modifyReserv:{
        "reservation": {
          "title": "Mes Réservations",
          "subtitle": "Gérez l'ensemble de vos locations en cours et à venir",
          "confirm_delete": "Êtes-vous sûr de vouloir supprimer cette réservation ?",
          "no_reservations": "Aucune réservation trouvée",
          "table": {
            "car": "Voiture",
            "start": "Début",
            "end": "Fin",
            "status": "Statut",
            "actions": "Actions"
          },
          "status": {
            "confirmée": "Confirmée",
            "en attente": "En attente",
            "annulée": "Annulée"
          }
        },
        "buttons": {
          "edit": "Modifier",
          "delete": "Supprimer"
        }
      },      
      // Page d'accueil - Hero section
      drive_with_class: "Roulez avec classe.",
      rent_luxury_car: "Louez votre voiture de luxe en un clic.",
      premium_vehicles: "Des véhicules premium pour vos moments d'exception.",
      book_now: "Réserver maintenant",
      view_vehicles: "Voir les véhicules",

      // Anciennes traductions
      welcome_title: "Bienvenue sur Rent My Ride",
      welcome_message: "Location de voitures de luxe haut de gamme",
      get_started: "Commencer",

      // Footer
      company_name: "Rent My Ride",
      company_slogan: "L'excellence automobile à votre portée",
      useful_links: "Liens utiles",
      all_rights_reserved: "Tous droits réservés.",

      // Page véhicules
      our_fleet: "Notre flotte",
      vehicle_types: "Types de véhicules",
      sports_cars: "Voitures de sport",
      sedans: "Berlines",
      suvs: "SUV",
      convertibles: "Cabriolets",
      daily_rate: "Tarif journalier",
      from: "À partir de",

      // Formulaire de réservation
      select_vehicle: "Sélectionnez un véhicule",
      rental_date: "Date de location",
      return_date: "Date de retour",
      special_requests: "Demandes spéciales",
      book_vehicle: "Réserver ce véhicule",
      reservations: "Mes Réservations",
      // Authentification
      remember_me: "Se souvenir de moi",
      forgot_password: "Mot de passe oublié?",
      already_registered: "Déjà inscrit?",
      create_account: "Créer un compte",

      // Messages divers
      success: "Succès!",
      error: "Erreur!",
      loading: "Chargement...",
      dashUser:{
        welcome_back: "Bon retour",
        personal_space: "Votre espace personnel",
        manage_reservations_and_explore: "Gérez facilement vos réservations et explorez notre collection de véhicules.",
        quick_access: "Accès rapide",
        view_available_vehicles: "Voir les véhicules disponibles",
        my_reservations: "Mes réservations",
        your_profile: "Votre profil",
        edit_info: "Modifier mes informations",
        change_password: "Changer mon mot de passe"
      },     
      // Section About
      about: {
        title: "À propos de Rent My Ride",
        subtitle: "Votre partenaire de confiance pour la location de voitures de luxe.",
        whoWeAre: {
          title: "Qui sommes-nous ?",
          content: "Rent My Ride est une entreprise dédiée à offrir une expérience de location de voitures de luxe inégalée, alliant élégance, performance et service client exceptionnel."
        },
        values: {
          title: "Nos valeurs",
          items: [
            "Intégrité",
            "Excellence",
            "Orientation client",
            "Innovation",
            "Respect de l'environnement"
          ]
        },
        whyChooseUs: {
          title: "Pourquoi nous choisir ?",
          content: "Nous mettons tout en œuvre pour vous garantir une expérience unique et personnalisée.",
          items: [
            "Service client personnalisé",
            "Véhicules haut de gamme entretenus régulièrement",
            "Processus de réservation simple et rapide",
            "Assistance 24/7",
            "Tarifs compétitifs"
          ]
        },
        legal: "Mentions légales"
      },

      // Nouvelles clés pour la liste des voitures
      available_cars: "Nos Voitures Disponibles",
      available: "Disponible",
      unavailable: "Indisponible",
      no_image: "Pas d'image disponible",
      starting_from: "À partir de",
      per_day: "jour",
      reserve: "Réserver",

      // Traductions pour la page Contact
      contact_subtitle: "Nous sommes là pour répondre à toutes vos questions sur nos véhicules de luxe.",
      contact_form_title: "Envoyez-nous un message",
      full_name: "Nom complet",
      full_name_placeholder: "Votre nom complet",
      email: "Email",
      email_placeholder: "votre@email.com",
      phone: "Téléphone",
      phone_placeholder: "+33 6 12 34 56 78",
      message: "Message",
      message_placeholder: "Votre message...",
      contact_us_button: "Envoyer le message",
      contact_info_title: "Nos coordonnées",
      address: "Adresse",
      opening_hours: "Horaires d'ouverture",
      days: {
        monday_friday: "Lundi - Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche"
      },
      footer: {
        follow_us: "Suivez-nous"
      }
    }
  },
  en: {
    translation: {
      // Navigation
      welcome: "Welcome",
      login: "Login",
      register: "Register",
      dashboard: "Dashboard",
      home: "Home",
      "List.cars": "Cars",
      aboutMenu: "About Us",
      contact: "Contact",
      reservations: "My Reservations",
      profile: "Profile",
      logout: "Logout",
      
      modifyReserv: {
  "reservation": {
    "title": "My Reservations",
    "subtitle": "Manage all your current and upcoming rentals",
    "confirm_delete": "Are you sure you want to delete this reservation?",
    "no_reservations": "No reservations found",
    "table": {
      "car": "Car",
      "start": "Start",
      "end": "End",
      "status": "Status",
      "actions": "Actions"
    },
    "status": {
      "confirmée": "Confirmed",
      "en attente": "Pending",
      "annulée": "Cancelled"
    }
  },
  "buttons": {
    "edit": "Edit",
    "delete": "Delete"
  }
},
      



      // Homepage - Hero section
      drive_with_class: "Drive with class.",
      rent_luxury_car: "Rent your luxury car in one click.",
      premium_vehicles: "Premium vehicles for your exceptional moments.",
      book_now: "Book now",
      view_vehicles: "View vehicles",

      // Old translations
      welcome_title: "Welcome to Rent My Ride",
      welcome_message: "Premium luxury car rental",
      get_started: "Get started",

      // Footer
      company_name: "Rent My Ride",
      company_slogan: "Automotive excellence within your reach",
      useful_links: "Useful links",
      all_rights_reserved: "All rights reserved.",

      // Vehicles page
      our_fleet: "Our fleet",
      vehicle_types: "Vehicle types",
      sports_cars: "Sports cars",
      sedans: "Sedans",
      suvs: "SUVs",
      convertibles: "Convertibles",
      daily_rate: "Daily rate",
      from: "From",

      // Booking form
      select_vehicle: "Select a vehicle",
      rental_date: "Rental date",
      return_date: "Return date",
      special_requests: "Special requests",
      book_vehicle: "Book this vehicle",

      // Authentication
      remember_me: "Remember me",
      forgot_password: "Forgot your password?",
      already_registered: "Already registered?",
      create_account: "Create account",

      // Miscellaneous
      success: "Success!",
      error: "Error!",
      loading: "Loading...",
      dashUser:{
        welcome_back: "Welcome back",
        personal_space: "Your personal space",
        manage_reservations_and_explore: "Easily manage your bookings and explore our vehicle collection.",
        quick_access: "Quick access",
        view_available_vehicles: "View available vehicles",
        my_reservations: "My bookings",
        your_profile: "Your profile",
        edit_info: "Edit my info",
        change_password: "Change my password"
      },
      

      // Section About
      about: {
        title: "About Rent My Ride",
        subtitle: "Your trusted partner for luxury car rentals.",
        whoWeAre: {
          title: "Who we are",
          content: "Rent My Ride is a company dedicated to providing an unparalleled luxury car rental experience, combining elegance, performance, and exceptional customer service."
        },
        values: {
          title: "Our values",
          items: [
            "Integrity",
            "Excellence",
            "Customer Focus",
            "Innovation",
            "Environmental Responsibility"
          ]
        },
        whyChooseUs: {
          title: "Why choose us?",
          content: "We strive to provide you with a unique and personalized experience.",
          items: [
            "Personalized customer service",
            "Regularly maintained premium vehicles",
            "Simple and fast booking process",
            "24/7 assistance",
            "Competitive pricing"
          ]
        },
        legal: "Legal Notice"
      },

      // New keys for car listing
      available_cars: "Available Cars",
      available: "Available",
      unavailable: "Unavailable",
      no_image: "No image available",
      starting_from: "Starting from",
      per_day: "day",
      reserve: "Reserve",

      // Contact page translations
      contact_subtitle: "We're here to answer all your questions about our luxury vehicles.",
      contact_form_title: "Send us a message",
      full_name: "Full name",
      full_name_placeholder: "Your full name",
      email: "Email",
      email_placeholder: "your@email.com",
      phone: "Phone",
      phone_placeholder: "+1 234 567 890",
      message: "Message",
      message_placeholder: "Your message...",
      contact_us_button: "Send message",
      contact_info_title: "Our contact information",
      address: "Address",
      opening_hours: "Opening hours",
      days: {
        monday_friday: "Monday - Friday",
        saturday: "Saturday",
        sunday: "Sunday"
      },
      footer: {
        follow_us: "Follow us"
      }
    }
  },
  es: {
    translation: {
      // Navigation
      welcome: "Bienvenido",
      login: "Iniciar sesión",
      register: "Registrarse",
      dashboard: "Panel de control",
      home: "Inicio",
      "List.cars": "Coches",
      aboutMenu: "Sobre nosotros",
      contact: "Contacto",
      reservations: "Mis Reservas",
      profile: "Perfil",
        logout: "Cerrar sesión",

        modifyReserv: {
  "reservation": {
    "title": "Mis Reservas",
    "subtitle": "Gestiona todas tus reservas actuales y futuras",
    "confirm_delete": "¿Estás seguro de que deseas eliminar esta reserva?",
    "no_reservations": "No se encontraron reservas",
    "table": {
      "car": "Coche",
      "start": "Inicio",
      "end": "Fin",
      "status": "Estado",
      "actions": "Acciones"
    },
    "status": {
      "confirmée": "Confirmada",
      "en attente": "Pendiente",
      "annulée": "Cancelada"
    }
  },
  "buttons": {
    "edit": "Editar",
    "delete": "Eliminar"
  }
},



      // Homepage - Hero section
      drive_with_class: "Conduce con clase.",
      rent_luxury_car: "Alquila tu coche de lujo en un clic.",
      premium_vehicles: "Vehículos premium para tus momentos excepcionales.",
      book_now: "Reservar ahora",
      view_vehicles: "Ver vehículos",

      // Old translations
      welcome_title: "Bienvenido a Rent My Ride",
      welcome_message: "Alquiler de coches de lujo premium",
      get_started: "Empezar",

      // Footer
      company_name: "Rent My Ride",
      company_slogan: "Excelencia automotriz a tu alcance",
      useful_links: "Enlaces útiles",
      all_rights_reserved: "Todos los derechos reservados.",

      // Vehicles page
      our_fleet: "Nuestra flota",
      vehicle_types: "Tipos de vehículos",
      sports_cars: "Coches deportivos",
      sedans: "Sedanes",
      suvs: "SUVs",
      convertibles: "Convertibles",
      daily_rate: "Tarifa diaria",
      from: "Desde",

      // Booking form
      select_vehicle: "Seleccionar vehículo",
      rental_date: "Fecha de alquiler",
      return_date: "Fecha de devolución",
      special_requests: "Solicitudes especiales",
      book_vehicle: "Reservar este vehículo",

      // Authentication
      remember_me: "Recuérdame",
      forgot_password: "¿Olvidaste tu contraseña?",
      already_registered: "¿Ya registrado?",
      create_account: "Crear cuenta",

      // Miscellaneous
      success: "¡Éxito!",
      error: "¡Error!",
      loading: "Cargando...",
      dashUser:{
        welcome_back: "Bienvenido de nuevo",
        personal_space: "Tu espacio personal",
        manage_reservations_and_explore: "Gestiona fácilmente tus reservas y explora nuestra colección de vehículos.",
        quick_access: "Acceso rápido",
        view_available_vehicles: "Ver vehículos disponibles",
        my_reservations: "Mis reservas",
        your_profile: "Tu perfil",
        edit_info: "Editar mi información",
        change_password: "Cambiar mi contraseña"
      },      
      // Section About
      about: {
        title: "Sobre Rent My Ride",
        subtitle: "Tu socio de confianza para el alquiler de coches de lujo.",
        whoWeAre: {
          title: "Quiénes somos",
          content: "Rent My Ride es una empresa dedicada a ofrecer una experiencia inigualable de alquiler de coches de lujo, combinando elegancia, rendimiento y un servicio al cliente excepcional."
        },
        values: {
          title: "Nuestros valores",
          items: [
            "Integridad",
            "Excelencia",
            "Enfoque al cliente",
            "Innovación",
            "Responsabilidad ambiental"
          ]
        },
        whyChooseUs: {
          title: "¿Por qué elegirnos?",
          content: "Nos esforzamos por brindarte una experiencia única y personalizada.",
          items: [
            "Servicio al cliente personalizado",
            "Vehículos premium mantenidos regularmente",
            "Proceso de reserva simple y rápido",
            "Asistencia 24/7",
            "Precios competitivos"
          ]
        },
        legal: "Aviso legal"
      },

      // Nuevas claves para la lista de coches
      available_cars: "Coches Disponibles",
      available: "Disponible",
      unavailable: "No disponible",
      no_image: "Sin imagen disponible",
      starting_from: "Desde",
      per_day: "día",
      reserve: "Reservar",

     profiledel: {"deleteAccount": {
    "title": "Eliminar cuenta",
    "description": "Una vez que se elimine su cuenta, todos sus recursos y datos serán eliminados permanentemente. Antes de eliminar su cuenta, descargue cualquier dato o información que desee conservar.",
    "confirm": "¿Está seguro de que desea eliminar su cuenta?",
    "password": "Contraseña",
    "cancel": "Cancelar",
    "delete": "Eliminar cuenta"
  }},
      

      // Traducciones para la página de Contacto
      contact_subtitle: "Estamos aquí para responder a todas tus preguntas sobre nuestros vehículos de lujo.",
      contact_form_title: "Envíanos un mensaje",
      full_name: "Nombre completo",
      full_name_placeholder: "Tu nombre completo",
      email: "Email",
      email_placeholder: "tu@email.com",
      phone: "Teléfono",
      phone_placeholder: "+34 612 345 678",
      message: "Mensaje",
      message_placeholder: "Tu mensaje...",
      contact_us_button: "Enviar mensaje",
      contact_info_title: "Nuestra información de contacto",
      address: "Dirección",
      opening_hours: "Horario de apertura",
      days: {
        monday_friday: "Lunes - Viernes",
        saturday: "Sábado",
        sunday: "Domingo"
      },
      footer: {
        follow_us: "Síguenos"
      }
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
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;