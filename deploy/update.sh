#!/usr/bin/env bash
# Met à jour le site depuis l'image publiée sur GHCR (ADR 0009).
# Ne redémarre le conteneur que si une nouvelle image a été téléchargée.
set -euo pipefail

cd "$(dirname "$0")/.."

docker compose pull --quiet web
docker compose up -d --remove-orphans web
docker image prune -f >/dev/null
