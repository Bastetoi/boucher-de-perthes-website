# 0005 – Conventional Commits + release-please
Statut : proposed

## Décision proposée
- Commits en Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`…), vérifiés par commitlint en CI.
- Squash merge des PR avec titre conforme (le titre devient le commit).
- release-please (GitHub Action) ouvre une « release PR » qui met à jour `CHANGELOG.md` et la version, puis crée le tag/Release GitHub au merge.
- Version initiale `0.x` ; `feat!`/`BREAKING CHANGE` pour les ruptures.
- Config : `release-please-config.json` + `.release-please-manifest.json`, type `simple` au départ.

## Conséquences
- Le tag de release pourra déclencher le déploiement (ADR 0009).
- Protection de la branche `main` : PR obligatoire.
