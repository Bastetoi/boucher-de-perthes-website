# Les boucher de Perthes — site web

> Nom de la troupe : « Les boucher de Perthes » (sans « s » à *boucher*, volontairement).

Site vitrine : billetterie (liens externes) + relais des publications Facebook / Instagram.
Hébergé sur Raspberry Pi (Docker Compose), exposé sur Internet à terme.

## État du projet

Les ADR 0001 à 0008 sont acceptés ; le déploiement automatique (0009) sera traité en dernier.

Phase actuelle : **conception** (aucun code). Voir [`docs/`](docs/README.md).

## Conventions

- Commits : [Conventional Commits](https://www.conventionalcommits.org/fr/)
- Releases : [release-please](https://github.com/googleapis/release-please) (mis en place en phase code)

## Développer

```sh
cd web
npm ci
npm run dev      # http://localhost:4321
npm run build    # vérification des types + build statique dans web/dist
```

Workflow : branche → PR (titre en Conventional Commits, squash merge) → release-please ouvre la PR de release.
