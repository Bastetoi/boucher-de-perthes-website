# 0009 – Déploiement automatique
Statut : accepted

## Contexte
Le site est servi par la Raspberry Pi derrière un Cloudflare Tunnel : rien n'est ouvert depuis Internet vers la Pi, donc un déploiement par « push » (SSH, runner entrant) est exclu.

## Options
1. **Pull par minuteur systemd** : la Pi vérifie GHCR toutes les 5 minutes (`docker compose pull` puis `up -d`).
2. **Watchtower** : même principe, mais exige de monter le socket Docker (accès root) dans un conteneur tiers, et le projet d'origine n'est plus maintenu.
3. **Runner GitHub auto-hébergé sur la Pi** : exécute du code de la CI sur le réseau local, surface d'attaque plus grande.

## Décision
Option 1 : le workflow `release-please` construit et publie l'image arm64 `ghcr.io/bastetoi/boucher-de-perthes-website` (tags `<version>` et `latest`) uniquement à la création d'une release. Sur la Pi, `deploy/update.sh` est lancé toutes les 5 minutes par un minuteur systemd (`deploy/install-timer.sh`).

Chaîne complète : PR mergée sur `main` → PR de release-please mergée → image publiée → la Pi la récupère (≤ 5 min) → site à jour.

## Conséquences
- Aucun secret ni accès entrant ; la Pi ne fait que des connexions sortantes.
- Le paquet GHCR doit être public.
- Retour arrière : fixer `WEB_TAG=<version précédente>` dans `.env` de la Pi puis `docker compose up -d` (et suspendre le minuteur, sinon `latest` est tiré de nouveau si le tag n'est plus fixé).
- Journaux : `journalctl -u boucher-update.service`.
