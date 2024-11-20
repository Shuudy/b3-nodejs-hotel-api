
## Introduction

Cette application API REST, développée en Node.js et Express.js, a été conçue pour centraliser et automatiser la gestion des réservations d'un hôtel.

## Prérequis

* **Node.js et npm (ou yarn) installés**
* **Un client HTTP** (Postman, curl, etc.)

## Authentification

L'API utilise un système d'authentification à deux niveaux :

* **Clé API:** Chaque requête doit inclure l'en-tête `x-api-key` avec la valeur `maCleAPI`.
* **Jeton JWT:** Un jeton JWT est requis pour accéder aux ressources protégées. Pour obtenir un JWT, envoyez une requête POST à la route `/login` avec les informations de connexion suivantes dans le corps de la requête :
  * `name` : Nom d'utilisateur
  * `password` : Mot de passe

  **Exemple de requête POST pour obtenir un JWT:**
  ```json
  {
    "name": "John",
    "password": "Bonjour"
  }
Une fois le JWT obtenu, incluez-le dans l'en-tête `Authorization` de vos requêtes au format `Bearer <votre_jwt>`.

## Comptes de test

Pour faciliter les tests, deux comptes sont préconfigurés :

* **Admin:**
  * Nom d'utilisateur : John
  * Mot de passe : Bonjour
* **Utilisateur standard:**
  * Nom d'utilisateur : Alex
  * Mot de passe : Bonjour

## Routes

### Routes d'administration (personnel de l'hôtel)

Les routes suivantes sont réservées au personnel de l'hôtel

| Méthode | Route               | Description                                                                     |
|--------|---------------------|----------------------------------------------------------------------------------|
| GET    | /clients            | Récupère la liste complète des clients de l'hôtel.                                     |
| GET    | /clients/:id        | Récupère les informations détaillées d'un client spécifique, identifié par son ID. |
| POST   | /clients/create     | Crée un nouveau client en envoyant les informations nécessaires dans le corps de la requête. |
| POST   | /clients/:id/edit   | Met à jour les informations d'un client existant, identifié par son ID.                 |
| GET    | /clients/:id/reservation/:chambreId | Effectue une réservation pour un client spécifique dans une chambre donnée. |
| GET    | /clients/:id/annulation/:reservationId | Annule une réservation existante, identifiée par son ID.                   |

### Routes utilisateur

Les routes suivantes sont accessibles aux utilisateurs standard de l'application.

| Méthode | Route               | Description                                                                     |
|--------|---------------------|----------------------------------------------------------------------------------|
| GET    | /hotel              | Récupère les informations générales sur l'hôtel (nom, adresse, etc.).                  |
| GET    | /hotel/chambres     | Récupère la liste de toutes les chambres disponibles à l'hôtel.                       |
| GET    | /hotel/chambres/:id  | Récupère les informations détaillées d'une chambre spécifique, identifiée par son ID. |
| GET    | /hotel/chambres/:id/reservation | Effectue une réservation pour la chambre spécifiée.                                |
| GET    | /hotel/chambres/:id/annulation   | Annule une réservation existante pour la chambre spécifiée.                    |