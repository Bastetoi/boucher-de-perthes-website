# 0006 – Banque de photos
Statut : accepted

## Contexte
Les photos sont l'élément visuel principal. Originaux potentiellement lourds (plusieurs Mo chacun) ; un repo git gonfle vite.

## Options
1. Originaux dans le repo, redimensionnés au build (Astro). Simple, mais repo lourd.
2. **Originaux réduits (≈2400 px, JPEG q85) dans le repo**, variantes responsive (AVIF/WebP) générées au build. Bon compromis.
3. Git LFS ou stockage externe : plus de complexité, à envisager si > ~500 Mo.

## Décision proposée
Option 2, avec un volume de photos < 2 Go à la source (marge haute) et droits à l'image réglés. **Les originaux (jusqu'à 2 Go) restent hors du repo** (disque de la Pi / sauvegarde de la troupe) ; seules les versions réduites (~0,5–1 Mo chacune, soit quelques centaines de Mo au plus) sont versionnées, donc sans Git LFS. Un script `scripts/optimize-photos` (à écrire en phase code) produit les versions réduites depuis un dossier d'originaux.

Photo d'accueil : `web/src/assets/photos/hero.jpg` (1333×2000, portrait). Photos dans `web/src/assets/photos/<spectacle-ou-thème>/`, avec fichier de métadonnées (légende, crédit photographe, droit à l'image validé).

## Questions ouvertes
- Où la troupe stocke-t-elle les originaux aujourd'hui (Drive, disque) ?
