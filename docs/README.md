# Documentation de conception

Ordre de travail : **specs → ADR → code → déploiement automatique**.
Le code ne démarre que lorsque les ADR ci-dessous sont passés en `accepted`.

## Specs (le « quoi »)
- [01 – Besoin](specs/01-besoin.md)
- [02 – Contenu et modèle de données](specs/02-contenu.md)
- [03 – Front](specs/03-front.md)
- [04 – Identité visuelle](specs/04-identite-visuelle.md)

## ADR (le « comment », une décision par fichier)
| # | Décision | Statut |
|---|----------|--------|
| [0001](adr/0001-adr-format.md) | Format des décisions | accepted |
| [0002](adr/0002-hebergement.md) | Hébergement Pi + Docker Compose | proposed |
| [0003](adr/0003-front.md) | Front statique (Astro) | proposed |
| [0004](adr/0004-backend.md) | Backend FastAPI différé | proposed |
| [0005](adr/0005-release.md) | Conventional Commits + release-please | proposed |
| [0006](adr/0006-photos.md) | Banque de photos | proposed |
| [0007](adr/0007-reseaux-sociaux.md) | Relais Facebook / Instagram | proposed |
| [0008](adr/0008-billetterie.md) | Billetterie par liens externes (AssoConnect) | accepted |
| [0009](adr/0009-deploiement.md) | Déploiement auto (en dernier) | proposed |

Statuts : `proposed` → `accepted` | `rejected` | `superseded by NNNN`.
