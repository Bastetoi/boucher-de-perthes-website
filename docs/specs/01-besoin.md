# 01 – Besoin

## Objectif v1
Une vitrine publique pour la troupe qui :
1. présente la troupe et ses spectacles (avec photos) ;
2. donne accès à la billetterie (liens externes) pour les prochaines dates ;
3. relaie les publications Facebook / Instagram ;
4. permet de contacter la troupe (lien mail / réseaux, pas de formulaire en v1).

## Hors périmètre v1
Backend, comptes utilisateurs, paiement, formulaire avec stockage, espace admin.

## Contraintes
Français, mobile d'abord, rapide, accessible (RGAA/WCAG AA visé), pas de cookies tiers, hébergement sur Raspberry Pi.

## Nom
- Troupe : **Les boucher de Perthes** (pas de « s » à *boucher*, à respecter partout : titres, SEO, métadonnées).
- Repo / projet : `boucher-de-perthes-website`.
- Domaine (à acheter chez Cloudflare, à valider) : `boucherdeperthes.fr` en premier choix, alternatives `lesboucherdeperthes.fr`, `boucherdeperthes.com`. Vérifier la disponibilité avant de trancher.
- Prévoir plus tard une redirection depuis la variante avec « s » (`bouchersdeperthes.*`) si les gens se trompent.

## Reçu / à fournir
Reçu : nom, logo (150×150 JPG, voir specs/04), photo de référence, plateforme de billetterie (AssoConnect), volume photos (< 2 Go).
À fournir : logo en vectoriel (SVG/PDF/AI) ou haute définition, texte de présentation, liens Facebook / Instagram / mail, liste des spectacles (passés / à venir), les photos.
