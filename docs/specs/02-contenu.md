# 02 – Contenu et modèle de données

Contenu versionné dans le repo (Markdown + frontmatter YAML, validé par schémas Astro/Zod).

## Spectacle (`show`)
`title`, `slug`, `summary`, `author`, `director`, `cast[]`, `season`, `cover` (photo), `gallery[]`, corps Markdown.

## Représentation (`event`)
`show` (réf.), `date` (ISO + fuseau Europe/Paris), `venue` (nom, adresse, ville), `ticketUrl` (un lien AssoConnect **par date**), `price` (texte libre), `status` : `open | soldout | cancelled | past` (`past` déduit de la date au build).

## Actualité (`news`)
`title`, `date`, `source` : `facebook | instagram`, `url`, `image`, `excerpt`.

## Photo
`file`, `alt`, `credit`, `caption`, `showSlug?`.

## Page troupe / contact
Fichier unique : présentation, membres (optionnel), liens sociaux, email.

## Rythme de mise à jour
Environ 5 représentations par an, donc 5 liens AssoConnect à saisir chaque saison, un fichier par représentation, par exemple `events/2026/2026-05-26-cendrillon.md`. Forme des liens :
`https://les-boucher-de-perthes.assoconnect.com/collect/description/<id>-c-<titre>-<jj-mm-aaaa>`.
Le lien de l'an dernier (Cendrillon, 26/05/2026) sert de donnée d'exemple, marqué `past`.
Un test de build vérifie que `ticketUrl` est bien en `https://les-boucher-de-perthes.assoconnect.com/` pour éviter une faute de frappe ou un lien tiers.
