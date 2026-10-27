# Feuille de route

Il s'agit d'une proposition de départ, à ajuster au fil du projet.

## Phase 0 — Fondations
- [x] Structure du dépôt et documentation
- [ ] Choix du fournisseur d'authentification (Auth.js, Clerk, etc.)
- [ ] Schéma de BD initial : `comptes`, `stations`
- [ ] CI : lint, typecheck et build sur chaque pull request
- [ ] Déploiement dev sur Heroku

## Phase 1 — Espace client flotte (remplace le portail rlenergies.com)
- [ ] Connexion client et gestion des utilisateurs d'un compte
- [ ] Cartes RL : liste, statut, limites
- [ ] Transactions et relevés de compte mensuels
- [ ] Factures (PDF) et envoi par courriel
- [ ] Plan de redirection depuis l'ancien portail

## Phase 2 — Outil interne
- [ ] Gestion des comptes clients et des cartes
- [ ] Fiches stations et équipements
- [ ] Export vers Acomba

## Phase 3 — Dispatch et transport
- [ ] Intégration de l'outil Agence Pétrolière
- [ ] Commandes, tournées, flotte RL et sous-traitants
- [ ] Inventaire et prévisions des réservoirs (dépôt R10)

## Phase 4 — Production
- [ ] Choix et migration vers l'hébergement canadien
- [ ] Sauvegardes, surveillance, journal d'audit
