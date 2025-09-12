Rent My Ride 🚗

Rent My Ride est une application web de réservation de véhicules permettant aux utilisateurs de réserver facilement une voiture, de recevoir un reçu en PDF par email et de gérer leurs réservations via un tableau de bord. L’application prend en charge plusieurs langues (français, anglais, espagnol).

Fonctionnalités

Réservation de voiture : les utilisateurs peuvent sélectionner une voiture, choisir la date et l’heure, et effectuer la réservation voir l'historique et supprimer modifier.

Email et PDF : après chaque réservation, un reçu en PDF est généré et envoyé par email à l’utilisateur.

Dashboard utilisateur : consultation des réservations passées et en cours, modification et annulation voir l'historique .


Multilingue : support de français, anglais et espagnol grâce à i18n.


Technologies utilisées

Frontend : React.js, Tailwind CSS, inertia, i18n pour la traduction.

Backend : Laravel, API REST, génération PDF .

Base de données : MySQL 



Installation

Cloner le dépôt :

git clone https://github.com/ton-utilisateur/rent-my-ride.git
cd rent-my-ride


Installer les dépendances backend :

cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate


Installer les dépendances frontend :

cd frontend
npm install


Lancer le serveur backend :

php artisan serve


Lancer le serveur frontend :

npm run dev




Utilisation

Crée un compte utilisateur et connecte-toi.

Parcours les voitures disponibles et effectue une réservation.

Après réservation, tu recevras un email avec le reçu en PDF.

Accède au dashboard pour consulter, modifier ou annuler tes réservations.

Change la langue de l’interface via le sélecteur (français, anglais, espagnol).

Contribuer

Fork le projet

Crée une branche : git checkout -b feature/ma-fonctionnalité

Commit tes changements : git commit -m "Ajout de ma fonctionnalité"

Push ta branche : git push origin feature/ma-fonctionnalité

Ouvre une Pull Request

Licence

Ce projet est sous licence MIT.
