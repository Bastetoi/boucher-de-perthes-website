#!/usr/bin/env bash
# Installe le minuteur systemd qui exécute deploy/update.sh toutes les 5 minutes.
# À lancer sur la Pi : sudo ./deploy/install-timer.sh
set -euo pipefail

if [ "$(id -u)" -ne 0 ]; then
  echo "Lancer avec sudo." >&2
  exit 1
fi

DIR="$(cd "$(dirname "$0")/.." && pwd)"
RUN_USER="${SUDO_USER:-$(stat -c %U "$DIR")}"

cat > /etc/systemd/system/boucher-update.service <<UNIT
[Unit]
Description=Met à jour le site Les Boucher de Perthes depuis GHCR
After=docker.service network-online.target
Wants=network-online.target

[Service]
Type=oneshot
User=${RUN_USER}
ExecStart=${DIR}/deploy/update.sh
UNIT

cat > /etc/systemd/system/boucher-update.timer <<'UNIT'
[Unit]
Description=Vérifie toutes les 5 minutes si une nouvelle version du site est publiée

[Timer]
OnBootSec=2min
OnUnitActiveSec=5min
RandomizedDelaySec=30

[Install]
WantedBy=timers.target
UNIT

systemctl daemon-reload
systemctl enable --now boucher-update.timer
systemctl list-timers boucher-update.timer --no-pager
