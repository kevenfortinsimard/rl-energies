# ADR 0001 — Stack technique

- **Date** : 2026-10-27
- **Statut** : accepté

## Contexte

RL Énergies construit son premier SaaS avec une petite équipe. Il faut un outil interne et un espace client, une base relationnelle (comptes, cartes, factures, livraisons), un déploiement sur Heroku en dev, puis un hébergement canadien.

## Décision

- **Next.js (App Router) + TypeScript** : front et API dans une seule app, avec un seul langage.
- **PostgreSQL + Prisma** : base relationnelle standard, migrations versionnées, typage généré.
- **Monolithe modulaire** (voir `docs/architecture.md`).

## Conséquences

- Simplicité : un seul dépôt, un seul déploiement et un seul langage.
- Portabilité : PostgreSQL est offert chez tous les hébergeurs canadiens envisagés.
- Discipline nécessaire : les frontières entre modules sont des conventions qu'il faut faire respecter en revue de code.
