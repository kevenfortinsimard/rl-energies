# RL-Station — SaaS RL Énergies

Plateforme interne d'RL Énergies, qui inclut un espace client pour les clients flotte.
Elle remplacera à terme le portail client actuel de rlenergies.com.

> Statut : **squelette**. Le projet contient l'arborescence, la configuration et la documentation. Aucune logique métier n'est encore codée.

## Périmètre

| Espace | Utilisateurs | Contenu |
|---|---|---|
| **Interne** (`/interne`) | Équipe RL Énergies | Stations, inventaire, dispatch et transport, facturation, comptes clients |
| **Client** (`/client`) | Clients flotte (carte RL) | Cartes, transactions, relevés de compte, factures |

Le détail des modules se trouve dans [`docs/modules.md`](docs/modules.md) et la feuille de route dans [`docs/roadmap.md`](docs/roadmap.md).

## Stack

- **Next.js 15** (App Router) avec **TypeScript**, pour le front et l'API dans une seule app
- **PostgreSQL** avec **Prisma** comme ORM
- Déploiement : Heroku pour le dev, puis migration prévue vers un hébergement canadien (conformité)

Les raisons de ce choix sont dans [`docs/decisions/0001-stack.md`](docs/decisions/0001-stack.md).

## Démarrage local

```bash
cp .env.example .env          # ajuster les variables
docker compose up -d db       # PostgreSQL local
npm install
npx prisma migrate dev        # une fois le schéma défini
npm run dev                   # http://localhost:3000
```

## Arborescence

```
docs/                     Architecture, modules, roadmap, décisions (ADR), intégrations
prisma/schema.prisma      Schéma de base de données
src/
  app/
    (interne)/interne/    Pages de l'outil interne
    (client)/client/      Pages de l'espace client flotte
    api/                  Routes API (health, webhooks d'intégrations…)
  modules/                Domaines métier : un dossier par module
    comptes/  flotte/  facturation/  dispatch/  stations/  inventaire/
  integrations/           Connecteurs vers les systèmes externes
    acomba/  agence-petroliere/  cloudics/  global-payments/  relion/
  lib/                    Utilitaires transverses (db, auth, config)
```

## Conventions

- Code (identifiants) en anglais. Docs, interface et noms de domaines métier en français.
- Un module ne lit pas directement les tables d'un autre module : il passe par les fonctions exportées dans le `index.ts` de ce module.
- Les intégrations externes sont isolées dans `src/integrations/`. Les modules n'appellent jamais un système externe directement.
- Branches : `main` (stable), `saas` (développement du SaaS), puis des branches de fonctionnalité `saas/<sujet>` fusionnées par pull request.
