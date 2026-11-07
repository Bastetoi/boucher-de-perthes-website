#!/usr/bin/env python3
"""Génère les pages d'erreur Cloudflare (5XX et 1XXX) à partir de deploy/maintenance.html.

Cloudflare exige un marqueur différent par classe d'erreur dans la page ;
il le remplace par son encadré (code d'erreur, identifiant de requête).
Les sorties vont dans web/public/ pour être servies par le site, puis
copiées par Cloudflare au moment de leur application (voir docs/adr/0010).
"""
from pathlib import Path

root = Path(__file__).resolve().parent.parent
src = (root / "deploy" / "maintenance.html").read_text(encoding="utf-8")
assert "<!--CF_ERROR_BOX-->" in src

for name, token in {
    "maintenance-5xx.html": "::CLOUDFLARE_ERROR_500S_BOX::",
    "maintenance-1xxx.html": "::CLOUDFLARE_ERROR_1000S_BOX::",
}.items():
    out = src.replace("<!--CF_ERROR_BOX-->", f'<div class="cf">{token}</div>')
    (root / "web" / "public" / name).write_text(out, encoding="utf-8")
    print(name, len(out.encode()), "octets")
