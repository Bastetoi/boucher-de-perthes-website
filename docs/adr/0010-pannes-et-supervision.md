# 0010 – Pannes, page d'erreur et supervision
Statut : accepted

## Contexte
Le site tourne sur une Raspberry Pi 5 et passe par un Cloudflare Tunnel. Si la Pi, Docker ou le tunnel tombe, les visiteurs voient une page d'erreur Cloudflare (502, 530, 1033…) qui ne parle pas de la troupe. Il faut aussi être prévenu, et ne pas être trompé par Always Online.

## État de la zone relevé le 2026-11-07 (plan Free, lecture seule)
- SSL/TLS `strict`, TLS 1.3 actif, Always Use HTTPS actif, réécriture HTTPS automatique active.
- Aucune règle de redirection ni Page Rule ; pas d'enregistrement `www` (l'adresse `www` ne répond pas). Pas de boucle http/https/www.
- Un seul enregistrement DNS : CNAME apex proxifié vers le tunnel `boucher-de-perthes` (`http://localhost:8080`).
- Version TLS minimale : 1.0 (à relever à 1.2).
- Always Online : actif.
- Notifications existantes : deux alertes SQL sur les réponses 5xx (SLO < 99,8 % sur 5 min ; seuil > 0 sur 1 min).

## Décisions
1. **Alerte de santé du tunnel** (Notifications Cloudflare, type `tunnel_health_event`) envoyée par email. Créée.
2. **Page d'erreur de marque** pour les classes 5XX et 1XXX (dont 1033, tunnel injoignable). Source : `deploy/maintenance.html` (CSS en ligne, sans JavaScript ni URL externe, logo en SVG). Cloudflare exige un marqueur propre à chaque classe ; `scripts/build-maintenance.py` génère donc `web/public/maintenance-5xx.html` et `web/public/maintenance-1xxx.html`. Les deux pages sont servies par le site (HTTP 200) pour que Cloudflare puisse en garder une copie.
   **Résultat du 2026-11-08 : le plan Free refuse l'enregistrement** (API `PUT /zones/{id}/custom_pages/500_errors` et `1000_errors`, erreur 1219 « Please upgrade to access this feature »). Les pages d'erreur par défaut de Cloudflare restent donc actives. Les fichiers sont conservés pour un éventuel plan payant (Error Pages ou règles d'erreur personnalisées). Piste gratuite non retenue : un Worker qui remplace les réponses 5xx, non testé, notamment pour l'erreur 1033.
3. **Supervision externe** (UptimeRobot) sur `https://lesboucherdeperthes.com/?check=uptime`, pour contourner Always Online qui pourrait renvoyer une copie en cache pendant une vraie panne. À valider par un test : `docker compose stop web`, attendre l'alerte, puis `docker compose up -d`.
4. **Alertes SQL supplémentaires** (5xx sur 5–10 min, nombre de 502/530, latence de l'origine) : à proposer après vérification des colonnes du jeu `events.httpRequests`.

## À savoir
- Rien de secret dans le dépôt : l'accès à Cloudflare se fait par connexion OAuth, hors dépôt.
