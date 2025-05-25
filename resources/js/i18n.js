import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      updateprofile: {
    "update_title": "Informations du profil",
    "update_description": "Mettez à jour les informations de votre profil et votre adresse email.",
    "last_name": "Nom",
    "first_name": "Prénom",
    "email": "Email",
    "phone": "Téléphone",
    "address": "Adresse",
    "city": "Ville",
    "email_unverified": "Votre adresse email n'est pas vérifiée.",
    "resend_verification": "Cliquez ici pour renvoyer l'email de vérification.",
    "verification_sent": "Un nouveau lien de vérification a été envoyé à votre adresse email.",
    "save": "Enregistrer",
    "saving": "Enregistrement...",
    "saved": "Enregistré."
  },
          
      "my_bookings": "Mes Réservations",
      "sign_in": "Se connecter",
       "not_registered_yet": "Pas encore inscrit ?",
      "email_address": "Adresse email",
      "forgotPassword": {
    "title": "Mot de passe oublié",
    "heading": "Réinitialiser votre mot de passe",
    "description": "Mot de passe oublié ? Aucun problème. Indiquez-nous simplement votre adresse e-mail et nous vous enverrons un lien de réinitialisation qui vous permettra d'en choisir un nouveau.",
    "button": "Envoyer le lien de réinitialisation",
    "sending": "Envoi en cours...",
    "emailPlaceholder": "E-mail",
    "statusMessages": {
      "sent": "Nous avons envoyé votre lien de réinitialisation par e-mail !"
    }
  },
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
        "reserve_car": "Réserver {{carName}}",
        "start_date": "Date de début",
        "end_date": "Date de fin",
        "reserve": "Réserver",
        "email_confirmation": "Confirmez votre email",
        "cancel": "Annuler",
        "confirm": "Confirmer",
        "success": "Succès!",
        "success_message": "Votre reçu a été envoyé à votre adresse email.",
        "redirecting": "Redirection vers le tableau de bord...",
    "updateProfile": {
    "title": "Informations du profil",
    "description": "Mettez à jour les informations de votre compte et votre adresse email.",
    "name": "Nom",
    "email": "Email",
    "unverified": "Votre adresse email n'est pas vérifiée.",
    "resend": "Cliquez ici pour renvoyer l'email de vérification.",
    "linkSent": "Un nouveau lien de vérification a été envoyé à votre adresse email.",
    "save": "Enregistrer",
    "saving": "Enregistrement...",
    "saved": "Enregistré."
  },
      "profiledel": {
        "deleteAccount": {
          "title": "Supprimer le compte",
          "description": "Une fois votre compte supprimé, toutes vos ressources et données seront définitivement effacées. Avant de supprimer votre compte, veuillez télécharger toute donnée ou information que vous souhaitez conserver.",
          "confirm": "Êtes-vous sûr de vouloir supprimer votre compte ?",
          "password": "Mot de passe",
          "cancel": "Annuler",
          "delete": "Supprimer le compte"
        }
      },
      "updatePassword": {
        "title": "Modifier le mot de passe",
        "description": "Utilisez un mot de passe fort et unique pour sécuriser votre compte.",
        "current": "Mot de passe actuel",
        "new": "Nouveau mot de passe",
        "confirm": "Confirmer le mot de passe",
        "save": "Sauvegarder",
        "saving": "En cours...",
        "updated": "Mot de passe mis à jour."
      },
      registerpage:{
        "title": "Créer un compte",
        "already_registered": "Déjà inscrit ?",
        "login": "Connectez-vous",
        "registering": "Inscription en cours...",
        "register": "S'inscrire",
        "lastname": "Nom",
        "firstname": "Prénom",
        "email": "Adresse email",
        "phone": "Numéro de téléphone ",
        "address": "Adresse",
        "city": "Ville",
        "password": "Mot de passe",
        "password_confirmation": "Confirmer le mot de passe"
    },
      modifyReserv:{
        "reservation": {
          "title": "Mes Réservations",
          "subtitle": "Gérez l'ensemble de vos locations en cours et à venir",
          "confirm_delete": "Êtes-vous sûr de vouloir supprimer cette réservation ?",
          "no_reservations": "Aucune réservation trouvée",
          "no_reservations_hint": "Vous n'avez encore aucune réservation.",
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
          "delete": "Supprimer",
          "browse_cars": "Parcourir les voitures"
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
      updateprofile: {
    "update_title": "Profile Information",
    "update_description": "Update your account's profile information and email address.",
    "last_name": "Last Name",
    "first_name": "First Name",
    "email": "Email",
    "phone": "Phone Number",
    "address": "Address",
    "city": "City",
    "email_unverified": "Your email address is unverified.",
    "resend_verification": "Click here to re-send the verification email.",
    "verification_sent": "A new verification link has been sent to your email address.",
    "save": "Save",
    "saving": "Saving...",
    "saved": "Saved."
  },
      "login": "Login",
      "not_registered_yet": "Not registered yet?",
      "create_account": "Create an account",
      "email_address": "Email address",
      "password": "Password",
      "sign_in": "Sign in",
      "forgotPassword": {
    "title": "Forgot Password",
    "heading": "Reset Your Password",
    "description": "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",
    "button": "Email Password Reset Link",
    "sending": "Sending...",
    "emailPlaceholder": "Email",
    "statusMessages": {
      "sent": "We've emailed your password reset link!"
    }
  },
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
    "no_reservations_hint": "You don't have any reservations yet.",
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
    "delete": "Delete",
     "browse_cars": "Browse Cars"
  }
},
      



      // Homepage - Hero section
      drive_with_class: "Drive with class.",
      rent_luxury_car: "Rent your luxury car in one click.",
      premium_vehicles: "Premium vehicles for your exceptional moments.",
      book_now: "Book now",
      view_vehicles: "View vehicles",
      "my_bookings": "My Bookings",

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

      "updatePassword": {
    "title": "Update Password",
    "description": "Use a strong and unique password to secure your account.",
    "current": "Current Password",
    "new": "New Password",
    "confirm": "Confirm Password",
    "save": "Save",
    "saving": "Saving...",
    "updated": "Password updated."
      },

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
      "reserve_car": "Reserve {{carName}}",
      "start_date": "Start Date",
      "end_date": "End Date",
      "reserve": "Reserve",
      "email_confirmation": "Confirm your email",
      "cancel": "Cancel",
      "confirm": "Confirm",
      "success": "Success!",
      "success_message": "Your receipt has been sent to your email address.",
      "redirecting": "Redirecting to dashboard...",
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
      registerpage:{
        "title": "Create an account",
        "already_registered": "Already registered?",
        "login": "Log in",
        "registering": "Registering...",
        "register": "Register",
        "lastname": "Last name",
        "firstname": "First name",
        "email": "Email address",
        "phone": "Phone number",
        "address": "Address",
        "city": "City",
        "password": "Password",
        "password_confirmation": "Confirm password"
    },

      // New keys for car listing
      available_cars: "Available Cars",
      available: "Available",
      unavailable: "Unavailable",
      no_image: "No image available",
      starting_from: "Starting from",
      per_day: "day",
      reserve: "Reserve",

       "profiledel": {
    "deleteAccount": {
      "title": "Delete Account",
      "description": "Once your account is deleted, all of your resources and data will be permanently removed. Before deleting your account, please download any data or information you wish to retain.",
      "confirm": "Are you sure you want to delete your account?",
      "password": "Password",
      "cancel": "Cancel",
      "delete": "Delete Account"
    }
  },
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
      updateprofile: {
    "update_title": "Información del perfil",
    "update_description": "Actualice la información de su perfil y dirección de correo electrónico.",
    "last_name": "Apellido",
    "first_name": "Nombre",
    "email": "Correo electrónico",
    "phone": "Teléfono",
    "address": "Dirección",
    "city": "Ciudad",
    "email_unverified": "Su dirección de correo electrónico no está verificada.",
    "resend_verification": "Haga clic aquí para reenviar el correo de verificación.",
    "verification_sent": "Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico.",
    "save": "Guardar",
    "saving": "Guardando...",
    "saved": "Guardado."
  },
      "my_bookings": "Mis Reservas",
      "not_registered_yet": "¿No estás registrado?",
      "email_address": "Correo electrónico",
      "password": "Contraseña",
      "sign_in": "Iniciar sesión",
      "forgotPassword": {
    "title": "Olvidé mi contraseña",
    "heading": "Restablecer su contraseña",
    "description": "¿Olvidó su contraseña? No hay problema. Simplemente indíquenos su dirección de correo electrónico y le enviaremos un enlace para restablecer la contraseña que le permitirá elegir una nueva.",
    "button": "Enviar enlace de restablecimiento",
    "sending": "Enviando...",
    "emailPlaceholder": "Correo electrónico",
    "statusMessages": {
      "sent": "¡Hemos enviado su enlace de restablecimiento de contraseña por correo electrónico!"
    }
  },
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
    "no_reservations_hint": "Todavía no tienes ninguna reserva.",
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
      "annulée": "Cancelada",
      "browse_cars": "Buscar coches"
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
      
        "updateProfile": {
          "title": "Información del perfil",
          "description": "Actualiza la información de tu cuenta y tu correo electrónico.",
          "name": "Nombre",
          "email": "Correo electrónico",
          "unverified": "Tu dirección de correo electrónico no está verificada.",
          "resend": "Haz clic aquí para reenviar el correo de verificación.",
          "linkSent": "Se ha enviado un nuevo enlace de verificación.",
          "save": "Guardar",
          "saving": "Guardando...",
          "saved": "Guardado."
        },      
        registerpage:{
          "title": "Crear una cuenta",
          "already_registered": "¿Ya estás registrado?",
          "login": "Iniciar sesión",
          "registering": "Registrando...",
          "register": "Registrarse",
          "lastname": "Apellido",
          "firstname": "Nombre",
          "email": "Correo electrónico",
          "phone": "Número de teléfono ",
          "address": "Dirección",
          "city": "Ciudad",
          "password": "Contraseña",
          "password_confirmation": "Confirmar contraseña"
        },
      // Nuevas claves para la lista de coches
      available_cars: "Coches Disponibles",
      available: "Disponible",
      unavailable: "No disponible",
      no_image: "Sin imagen disponible",
      starting_from: "Desde",
      per_day: "día",
      reserve: "Reservar",
      "reserve_car": "Reservar {{carName}}",
      "start_date": "Fecha de inicio",
      "end_date": "Fecha de finalización",
      "reserve": "Reservar",
      "email_confirmation": "Confirma tu correo electrónico",
      "cancel": "Cancelar",
      "confirm": "Confirmar",
      "success": "¡Éxito!",
      "success_message": "Tu recibo ha sido enviado a tu dirección de correo electrónico.",
      "redirecting": "Redirigiendo al tablero...",

      "updatePassword": {
  "title": "Cambiar la contraseña",
  "description": "Utiliza una contraseña fuerte y única para proteger tu cuenta.",
  "current": "Contraseña actual",
  "new": "Nueva contraseña",
  "confirm": "Confirmar contraseña",
  "save": "Guardar",
  "saving": "Guardando...",
  "updated": "Contraseña actualizada."
},

      "profiledel": {
        "deleteAccount": {
          "title": "Eliminar cuenta",
          "description": "Una vez que se elimine su cuenta, todos sus recursos y datos serán eliminados permanentemente. Antes de eliminar su cuenta, descargue cualquier dato o información que desee conservar.",
          "confirm": "¿Está seguro de que desea eliminar su cuenta?",
          "password": "Contraseña",
          "cancel": "Cancelar",
          "delete": "Eliminar cuenta"
        }
      },

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