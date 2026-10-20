# 02 – Contenu et modèle de données

Contenu versionné dans le repo (Markdown + frontmatter YAML, validé par schémas Astro/Zod).

## Spectacle (`show`)
`title`, `slug`, `summary`, `author`, `director`, `cast[]`, `season`, `cover` (photo), `gallery[]`, corps Markdown.

## Représentation (`event`)
`show` (réf.), `date` (ISO + fuseau Europe/Paris), `venue` (nom, adresse, ville), `ticketUrl`, `price` (texte libre), `status` : `open | soldout | cancelled | past` (`past` déduit de la date au build).

## Actualité (`news`)
`title`, `date`, `source` : `facebook | instagram`, `url`, `image`, `excerpt`.

## Photo
`file`, `alt`, `credit`, `caption`, `showSlug?`.

## Page troupe / contact
Fichier unique : présentation, membres (optionnel), liens sociaux, email.
