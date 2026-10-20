# 0002 – Hébergement : Raspberry Pi + Docker Compose
Statut : proposed

## Contexte
Site hébergé sur la Pi, exposé sur Internet « à terme ». Une Pi derrière une box domestique implique : IP dynamique, ports fermés, exposition du réseau local à éviter.

## Options
1. **Caddy + port forwarding** : simple, HTTPS auto (Let's Encrypt), mais expose l'IP maison et nécessite DynDNS.
2. **Cloudflare Tunnel (cloudflared)** : pas de port ouvert, IP masquée, HTTPS et cache CDN gratuits ; dépend de Cloudflare et d'un domaine géré chez eux.
3. **Tailscale Funnel** : très simple, mais domaine personnalisé limité.

## Décision proposée
Raspberry Pi 5 (arm64) sous Docker Compose : un conteneur web (Caddy servant le site statique) + `cloudflared`. Le domaine sera acheté chez Cloudflare (déjà utilisé pour un autre projet), ce qui rend l'option 2 (Tunnel) naturelle : DNS, certificat et tunnel au même endroit. En LAN d'abord, sans tunnel, puis exposition.

## Conséquences
- Le site statique résiste bien à une Pi et à un pic de trafic (cache Cloudflare).
- Domaine à acheter chez Cloudflare avant l'exposition (nom à choisir, cf. specs/01).
- Images Docker en `linux/arm64` (Pi 5).
- Sauvegardes : le contenu est dans git, rien d'autre à sauvegarder tant qu'il n'y a pas de backend.

## Questions ouvertes
- Quel nom de domaine ? (voir propositions dans specs/01.) Réutiliser le compte/tunnel Cloudflare de l'autre projet ou en créer un dédié ?
