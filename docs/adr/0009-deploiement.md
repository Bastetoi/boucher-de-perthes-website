# 0009 – Déploiement automatique
Statut : proposed (à traiter en dernier)

## Pistes
- **Pull** : Watchtower ou script sur la Pi qui récupère l'image du dernier tag (rien d'ouvert depuis Internet vers la Pi).
- **Push** : runner GitHub auto-hébergé sur la Pi (`runs-on: self-hosted`, arm64).
- Image publiée sur GHCR (build multi-arch `linux/arm64`) au tag de release-please.

## Décision proposée
Image GHCR au tag de release + mise à jour côté Pi en pull. À confirmer après ADR 0002.
