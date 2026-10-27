# Architecture

## Vue d'ensemble

Le SaaS est un **monolithe modulaire** : une seule app Next.js, une seule base PostgreSQL, et un code découpé en modules métier aux frontières claires. Pour une petite équipe qui démarre, ce choix est plus simple qu'une architecture en microservices. Un module pourra être extrait plus tard au besoin.

```
             ┌──────────────────────── Next.js ────────────────────────┐
Équipe RL ──▶│ /interne  (pages)                                       │
Clients   ──▶│ /client   (pages)          ┌──────── src/modules ─────┐ │
             │ /api      (routes) ──────▶ │ comptes  flotte  factu.  │ │──▶ PostgreSQL
             │                            │ dispatch stations invent.│ │
             │                            └────────────┬─────────────┘ │
             │                             src/integrations            │
             └──────┬──────────┬──────────┬──────────┬──────────┬──────┘
                 Acomba   Agence Pétr.  Cloudics  Global Pay.  ReliON
```

## Couches

1. **`src/app`** : routes, pages et handlers API. Contient uniquement la présentation et l'orchestration, pas de règles métier.
2. **`src/modules/<module>`** : la logique métier. Chaque module expose son API publique dans `index.ts`.
3. **`src/integrations/<système>`** : les clients des systèmes externes (API, import de fichiers, scraping au besoin). Leur rôle est de traduire les données externes en types internes.
4. **`src/lib`** : le transverse (client Prisma, auth, config, journalisation).

## Accès et sécurité

- Deux espaces séparés par route group : `(interne)` et `(client)`. Chacun a son layout et sa vérification d'accès.
- Rôles prévus : `admin`, `employe`, `dispatch`, `client_admin`, `client_utilisateur`.
- Un utilisateur client ne voit **que** les données de son compte. Ce filtrage est appliqué dans les modules, pas seulement dans l'interface.
- Les secrets sont fournis par des variables d'environnement (`.env.example` en donne la liste). Ils ne sont jamais commités.

## Hébergement

- **Dev** : Heroku (app existante) avec Heroku Postgres.
- **Production** : un hébergement canadien est visé (données de clients québécois). Les options restent à évaluer (ex. AWS ca-central-1, Azure Canada, OVHcloud Beauharnois). L'app reste portable : `Procfile` et `Dockerfile` à venir, aucune dépendance propre à Heroku.
