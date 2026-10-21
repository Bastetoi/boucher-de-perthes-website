# 04 – Identité visuelle

Base : `web/src/assets/photos/hero.jpg` (photo d'accueil) et `brand/logo-150px.jpg` (logo d'origine). La première photo de référence a été retirée à la demande de la personne photographiée.

## Ce que disent les références
- **Photo** : fond noir profond, une comédienne de profil assise au bord de la scène, éclairée par un projecteur chaud (peau ambrée, paillettes argent), grand espace noir à gauche et en haut (texte du hero). Ambiance cabaret / théâtre, mystérieuse et élégante.
- **Logo** : tracé « one line » de deux visages entremêlés (le masque du théâtre) en bordeaux sur fond blanc, texte « Les Boucher / de Perthes » en écriture manuscrite.

## Direction proposée
- **Thème sombre** par défaut : fond quasi noir, texte clair.
- **Palette « rouge et noir »** (base Coolors fournie : https://coolors.co/800020-6b001b-550015-400010-2b000b-150005-000000) :
  - bordeaux `#800020` (couleur du logo), puis ses nuances sombres `#6b001b` `#550015` `#400010` `#2b000b` `#150005`, noir `#000000` ;
  - fond de page : noir `#0b0908` à `#150005` ;
  - texte : blanc cassé `#f4efe8` (contraste 17:1) ;
  - accent lisible (liens, boutons, survol) : rouge éclairci `#e0405a` (contraste 4,8:1 sur fond sombre, conforme AA).
  - Les paillettes argent / ambre de la photo restent un clin d'œil éventuel, pas une couleur de l'interface.
- **Hero** d'accueil : la photo plein écran, titre et bouton « Réserver » dans l'espace noir à gauche (le cadrage s'y prête, aussi bien en paysage qu'en mobile avec recadrage `object-position` sur la silhouette).
- **Typographie** : titres en serif élégant à contraste marqué (ex. Playfair Display / Cormorant), texte en sans-serif sobre (ex. Inter). Polices auto-hébergées (pas de Google Fonts, cf. RGPD).
- **Logo** : `brand/logo.svg` (bordeaux, pour fond clair) et `brand/logo-light.svg` (blanc cassé, pour fond sombre, version à utiliser sur le site). Trait fin : taille minimale ~80 px de haut.
- **Graphisme** : un seul motif, le trait continu du logo, en filigrane ou séparateur. Pas d'ornements en plus.

## Points d'attention
- Le logo fourni fait **150×150 px en JPG** ; `brand/logo*.svg` est une **recréation** : les deux visages au trait continu sont retracés depuis l'image, et le texte « Les Boucher de Perthes » est recomposé avec la police Caveat Brush (licence OFL, glyphes convertis en tracés, aucune police à charger) sur deux arcs comme à l'origine. Le « B » majuscule de *Boucher* vient du logo d'origine. L'original n'existe plus : ces fichiers font référence.
- Contraste : le bordeaux `#800020` sur fond noir est trop faible pour du texte (1,8:1). Il sert au décor (aplats, bandeaux, dégradés) ; texte, liens et boutons utilisent le blanc cassé ou le rouge éclairci `#e0405a`.
- Photo : l'image est très sombre ; prévoir un dégradé et un poids optimisé (AVIF/WebP) pour un bon chargement sur mobile.
