# 0002 – Hébergement : Raspberry Pi + Docker Compose
Statut : proposed

## Contexte
Site hébergé sur la Pi, exposé sur Internet « à terme ». Une Pi derrière une box domestique implique : IP dynamique, ports fermés, exposition du réseau local à éviter.

## Options
1. **Caddy + port forwarding** : simple, HTTPS auto (Let's Encrypt), mais expose l'IP maison et nécessite DynDNS.
2. **Cloudflare Tunnel (cloudflared)** : pas de port ouvert, IP masquée, HTTPS et cache CDN gratuits ; dépend de Cloudflare et d'un domaine géré chez eux.
3. **Tailscale Funnel** : très simple, mais domaine personnalisé limité.

## Décision proposée
Docker Compose avec : un conteneur web (Caddy servant le site statique) + `cloudflared` au moment de l'exposition. En local/LAN d'abord, sans tunnel.

## Conséquences
- Le site statique résiste bien à une Pi et à un pic de trafic (cache Cloudflare).
- Il faut un nom de domaine (à acheter) avant l'exposition.
- Sauvegardes : le contenu est dans git, rien d'autre à sauvegarder tant qu'il n'y a pas de backend.

## Questions ouvertes
- Nom de domaine souhaité ? Modèle de Pi (arm64 ?) ?
