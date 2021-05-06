# Post-It API

Post-It API est une API de gestion de notes similaire à Google Keep.

L'API permet de :

- Se connecter
- Ajouter / Supprimer / Modifier une note, sécurisé par un token d'authentification
- Récupérer toutes les notes d'un utilisateur grâce à l'utilisation d'un token d'authentification
- Créer un compte

L'API est utilisée par la [web app Post-It](https://github.com/lsinquin/post-it-WIP)

## Status

L'API est dans un état fonctionnel même si certains points sont à améliorer parmi lesquels :

- Mise en place de tests de validation de l'API
- Utilisation de [Passport OAuth](http://www.passportjs.org/docs/oauth/) pour l'authentification plutôt que JWT
- Modification du mot de passe d'un utilisateur
- Permettre l'authentification à partir d'un compte Google, Facebook, etc..
- Procédure de réinitialisation du mot de passe utilisateur en cas de perte.

## Démo

L'API est hébergée sur [heroku](https://post-it-api.herokuapp.com/) et utilise leur service de base de données PostgreSQL as a service.

Le web app Post-It est quant à elle hébergée sur [Netlify](https://trusting-gates-880974.netlify.app/)

## Technologies

L'API a été développée pour NodeJS et utilise le framework [Express (V4)](https://expressjs.com/). Etant familier des modules CommonJS, j'ai préféré utiliser les modules ES6 pour tester leur intégration dans l'écosystème NodeJS.

[joi](https://joi.dev/) est utilisé pour valider le contenu des requêtes HTTP entrantes.

L'authentification se fait via JWT grâce au module [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) qui permet la génération et la validation de token JWT.  
Le mot de passe est haché avant d'être enregistré dans la base de données grâce au package [bcrypt](https://www.npmjs.com/package/bcrypt).

Dans le but de revoir les fondamentaux de SQL, les interactions avec la base de donnés PostgreSQL ont été réalisées avec le module [pg](https://node-postgres.com/) (node-postgres).

Le module [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) a été utilisé pour rendre accessible un fichier de description d'API [OpenAPI](https://swagger.io/specification/) sur le endpoint `/docs`.

## Installation

Pour utiliser l'API en local, **NodeJS (15+)** et yarn sont nécessaires.

Après avoir cloné le dépôt Git. Tapez la commande suivante pour installer les dépendances :

`yarn`

Pour lancer le serveur, tapez la commande :

`yarn start`

Vous pouvez aussi lancer le serveur en mode dev (le serveur prend alors en compte les modifications apportées au code automatiquement) via la commande :

`yarn dev`

**2 variables d'environnement sont obligatoires** au bon fonctionnement du serveur :

- **DATABASE_URL** : L'url de connection à la base PostgreSQL.
- **JWT_SECRET** : La clé secréte utilisée pour les tokens JWT.
