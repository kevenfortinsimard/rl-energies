# Modules métier

Chaque module se trouve dans `src/modules/<nom>/` et contient la même structure :

```
index.ts        API publique du module (seul point d'entrée pour les autres modules)
types.ts        Types du domaine
service.ts      Logique métier
README.md       Rôle, entités, dépendances
```

| Module | Rôle | Entités principales | Dépend de |
|---|---|---|---|
| `comptes` | Clients, utilisateurs, rôles, accès | Compte, Utilisateur, Rôle | — |
| `flotte` | Cartes RL (flotte), limites, transactions carburant | Carte, Véhicule, TransactionCarte | comptes, stations |
| `facturation` | Factures, relevés de compte, envoi | Facture, LigneFacture, Relevé, Paiement | comptes, flotte, integrations/acomba |
| `dispatch` | Transport et livraisons : commandes, tournées, flotte RL et sous-traitants | Commande, Livraison, Camion, Chauffeur, SousTraitant | stations, inventaire, integrations/agence-petroliere |
| `stations` | Réseau de stations (RL Énergies, Pétroles Belzile, Rezzo), équipements | Station, Bannière, Pompe, Réservoir, BorneRecharge | — |
| `inventaire` | Niveaux de réservoirs, piges, prévisions, dépôts (ex. R10) | Pige, NiveauRéservoir, Prévision | stations, integrations/cloudics |

## Intégrations

| Dossier | Système | Usage prévu |
|---|---|---|
| `acomba` | Acomba (comptabilité) | Export des factures et écritures, synchronisation des comptes clients. À terme, possible remplacement par un système plus interactif. |
| `agence-petroliere` | Agence Pétrolière (division transport d'RL) | Intégration de l'outil de transport et des piges dans le module `dispatch` |
| `cloudics` | Cloudics (forecourt) | Ventes, compteurs (meters), transactions par station |
| `global-payments` | Global Payments (TPV et e-commerce) | Rapprochement des paiements par carte |
| `relion` | ReliON (bornes de recharge) | État des bornes et kWh vendus |

NeoTMS (neotms.com) sert seulement de **source d'idées** pour le module `dispatch`. Il n'y a pas d'intégration prévue.
