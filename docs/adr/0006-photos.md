# 0006 – Banque de photos
Statut : proposed

## Contexte
Les photos sont l'élément visuel principal. Originaux potentiellement lourds (plusieurs Mo chacun) ; un repo git gonfle vite.

## Options
1. Originaux dans le repo, redimensionnés au build (Astro). Simple, mais repo lourd.
2. **Originaux réduits (≈2400 px, JPEG q85) dans le repo**, variantes responsive (AVIF/WebP) générées au build. Bon compromis.
3. Git LFS ou stockage externe : plus de complexité, à envisager si > ~500 Mo.

## Décision proposée
Option 2. Photos dans `web/src/assets/photos/<spectacle-ou-thème>/`, avec fichier de métadonnées (légende, crédit photographe, droit à l'image validé).

## Questions ouvertes
- Volume attendu ? Droits à l'image des comédiens/public à vérifier avant mise en ligne publique.
