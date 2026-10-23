# Reste à faire

## Contenu (bloquant pour la V1)
- [ ] Mentions légales : siège (fait)
- [ ] Zoo : valider le résumé et la saison, dates et liens AssoConnect (lieu : 40 rue Boucher de Perthes, Lille, fait)
- [ ] Prochaines dates : jour, heure, lieu, prix, lien AssoConnect de chaque date (un fichier par date dans `web/src/content/events/`)
- [x] Texte de présentation de la troupe (à relire)
- [ ] Actualités Facebook / Instagram à relayer (`web/src/content/news/`)
- [ ] Accord des personnes photographiées pour les photos de l'accueil (dont le public)

## Décisions à prendre
- [ ] Ancienne photo d'accueil encore dans l'historique git du repo public : réécrire l'historique ou laisser (voir échange)
- [x] Domaine acheté chez Cloudflare : `lesboucherdeperthes.com` (`site` mis à jour dans `web/astro.config.mjs`)
- [ ] Logo : original vectoriel perdu, version recréée dans `brand/` (à remplacer si retrouvé)

## Technique
- [ ] Script d'optimisation des photos (originaux hors repo, versions réduites versionnées), cf. ADR 0006
- [ ] Dockerfile + `docker-compose.yml` (Caddy + site statique, arm64 pour la Pi 5), cf. ADR 0002
- [ ] Exposition via Cloudflare Tunnel (`cloudflared`)
- [ ] Protection de `main` : PR obligatoire, checks `ci / web`, `pr-lint / title`, `pr-lint / commits`, squash uniquement
- [ ] Déploiement automatique à la release (image GHCR arm64 + mise à jour côté Pi), cf. ADR 0009, en dernier
- [ ] Publier la V1 en mergeant la PR de release-please quand le contenu est prêt

## Décisions déjà prises
- Nom : « Les Boucher de Perthes » (Boucher = nom de famille)
- Accueil en vue large : accordéon vertical de 5 photos, teinte bordeaux sur les bandes repliées, bandes décoratives ; téléphone et tablette : photo unique
- Variante « faisceau de lumière » abandonnée
