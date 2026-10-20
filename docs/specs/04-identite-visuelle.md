# 04 – Identité visuelle

Base : `brand/hero-reference.jpg` (photo) et `brand/logo-150px.jpg` (logo).

## Ce que disent les références
- **Photo** : fond noir profond, une silhouette éclairée par un projecteur chaud (peau ambrée, paillettes argent), cadrage serré sur le buste, énorme espace vide à gauche. Ambiance cabaret / théâtre, mystérieuse et élégante.
- **Logo** : tracé « one line » de deux visages entremêlés (le masque du théâtre) en bordeaux sur fond blanc, texte « Les boucher / de Perthes » en capitales fines.

## Direction proposée
- **Thème sombre** par défaut : fond quasi noir, texte clair.
- **Palette** (à valider à l'œil, valeurs approchées) : noir `#0b0908`, bordeaux du logo `#8a1c2b`, ambre de la lumière `#e8a15a`, argent `#c9c9cc`, blanc cassé `#f4efe8`.
- **Hero** d'accueil : la photo plein écran, titre et bouton « Réserver » dans l'espace noir à gauche (le cadrage s'y prête, aussi bien en paysage qu'en mobile avec recadrage `object-position` sur la silhouette).
- **Typographie** : titres en serif élégant à contraste marqué (ex. Playfair Display / Cormorant), texte en sans-serif sobre (ex. Inter). Polices auto-hébergées (pas de Google Fonts, cf. RGPD).
- **Logo** : à utiliser en bordeaux clair ou en blanc sur fond sombre ; trait fin = petite taille limitée.
- **Graphisme** : un seul motif, le trait continu du logo, en filigrane ou séparateur. Pas d'ornements en plus.

## Points d'attention
- Le logo fourni fait **150×150 px en JPG sur fond blanc** : insuffisant pour l'écran haute densité et la favicon. Il faut le vectoriel d'origine, sinon on le re-vectorise (retracé) en SVG, ce qui est faisable vu la simplicité du trait.
- Contraste : le bordeaux `#8a1c2b` sur fond noir est trop faible pour du texte (rapport < 3:1). Il sert au décor ; les liens et boutons utilisent l'ambre ou le blanc cassé.
- Photo : l'image est très sombre ; prévoir un dégradé et un poids optimisé (AVIF/WebP) pour un bon chargement sur mobile.
