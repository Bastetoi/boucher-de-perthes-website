# 0003 – Front statique avec Astro
Statut : accepted

## Contexte
Besoin : quelques pages, très orientées photos, contenu qui change à chaque saison. Simple, rapide, léger pour la Pi.

## Options
1. **Astro** (génération statique, content collections Markdown/YAML, optimisation d'images intégrée `astro:assets`, zéro JS par défaut).
2. HTML/CSS à la main : simple mais pas d'optimisation d'images ni de templates pour les spectacles.
3. Next.js/SvelteKit : surdimensionné pour ce besoin.

## Décision proposée
Astro en mode statique, CSS simple (pas de framework UI lourd), JS minimal.

## Conséquences
- Build produit des fichiers statiques servis par Caddy : aucun runtime Node en production.
- Les spectacles/événements sont des fichiers dans le repo (cf. specs/02), éditables sans backend.
- Si un backend arrive (ADR 0004), le front reste statique et appelle une API.
