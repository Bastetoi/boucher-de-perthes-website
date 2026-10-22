#!/usr/bin/env python3
"""Réduit les photos originales pour le repo (ADR 0006).

Usage : python3 scripts/optimize-photos.py <dossier-originaux> [dossier-sortie]
Sortie par défaut : web/src/assets/photos

Chaque image est tournée selon son EXIF, réduite à 2400 px max sur le grand
côté, ré-encodée en JPEG progressif (qualité 85) et débarrassée de ses métadonnées
(EXIF, GPS). Les images déjà plus petites ne sont pas agrandies.
"""
import sys
from pathlib import Path

from PIL import Image, ImageOps

MAX_SIDE = 2400
QUALITY = 85
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"}


def optimize(src: Path, dst: Path) -> None:
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
        dst.parent.mkdir(parents=True, exist_ok=True)
        im.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 1
    src_dir = Path(sys.argv[1])
    out_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else Path(__file__).resolve().parent.parent / "web/src/assets/photos"
    for src in sorted(p for p in src_dir.rglob("*") if p.suffix.lower() in EXTS):
        dst = out_dir / src.relative_to(src_dir).with_suffix(".jpg")
        optimize(src, dst)
        print(f"{src} ({src.stat().st_size // 1024} Ko) -> {dst} ({dst.stat().st_size // 1024} Ko)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
