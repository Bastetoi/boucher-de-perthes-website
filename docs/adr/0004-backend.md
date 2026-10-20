# 0004 – Backend FastAPI différé
Statut : accepted

## Contexte
Le besoin initial (liens de billetterie, relais d'articles) ne nécessite pas de backend. Préférence : Python / FastAPI le moment venu.

## Décision proposée
**Pas de backend en v1.** Dossier `api/` non créé tant qu'aucun déclencheur n'est atteint.

Déclencheurs d'introduction de FastAPI :
- formulaire de contact / newsletter avec stockage,
- agrégation automatique des posts Facebook/Instagram (cf. ADR 0007),
- espace d'administration pour éditer les événements sans passer par git,
- billetterie en propre.

## Conséquences
- Architecture prévue pour l'accueillir : monorepo `web/` + `api/`, Compose avec un service de plus.
- Release-please configuré en mode multi-paquets dès le départ pour éviter une migration.
