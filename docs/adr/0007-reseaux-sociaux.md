# 0007 – Relais des publications Facebook / Instagram
Statut : accepted

## Contexte
Relayer les articles de communication. Les API Meta exigent une app, une validation et des tokens à renouveler : lourd pour une petite troupe.

## Options
1. **Liens curatés manuellement** (titre, image, URL du post) dans un fichier de contenu. Fiable, zéro dépendance.
2. Embeds officiels (plugin Facebook, `embed.js` Instagram) : simples mais chargent du tracking tiers (RGPD/bandeau cookies) et ralentissent.
3. Agrégation via API Meta ou service tiers : automatique, mais coûteux en maintenance ou en argent. Nécessite le backend (ADR 0004).

## Décision proposée
v1 : option 1 (carte « Actualités » avec visuel + lien vers le post). Option 3 réévaluée plus tard.

## Conséquences
Pas de cookies tiers, donc pas de bandeau de consentement requis pour cette partie.

## Comptes
Instagram : @lesboucherdeperthes. Facebook : page de la troupe (lien dans specs/01).
