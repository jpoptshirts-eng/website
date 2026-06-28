#!/usr/bin/env python3
"""Import QuickShop assets as transparent PNGs (no JPEG conversion)."""

from __future__ import annotations

from pathlib import Path

import shutil
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    "/Users/jac/.cursor/projects/Users-jac-Desktop-Work-Jacinto-Portfolio-Website/assets"
)
OUT = ROOT / "public" / "images" / "work" / "quickshop"

COPIES = {
    "context/current-favs.png": "/Users/jac/Downloads/Waitrose/Quick Shop/Assets/Mockups/current_favs.png",
    "concepts/favourites-quickshop.png": "Group_mockup-dd839f71-20d2-4335-8922-deb150e92251.png",
    "research/miro-workspace.png": "Screenshot_2026-03-10_at_13.58.45-2735743a-3fbb-41bc-94bf-7a1060ad9b00.png",
    "research/miro-angled.png": "Desktop_-_4-9f4dcd41-6ffd-4443-ba19-4f734ad18aeb.png",
    "solution/mobile-list.png": "375_-_QS_-_list_view_-_top_regulars-1d1fb535-1c27-461d-b57b-ee94d93f9d88.png",
    "solution/desktop-grid.png": "992_-_QS_Variant_A_-_grid_view-161951c8-0dba-4b33-ab3c-a382be67ff9d.png",
    "solution/QS_Flow.png": "/Users/jac/Downloads/Waitrose/Quick Shop/Assets/Mockups/QS_Flow.png",
    "solution/mvp-entry.png": "Rectangle-245e5888-7bb1-4fab-900c-23387f448a05.png",
    "components/recommendation-system-overview.png": "Screenshot_2026-03-21_at_17.07.28-047bbc2d-eb9a-4702-86ba-ddac3be86c59.png",
    "concepts/joy-scrolling-phones.png": "QS_2_phones-ad660f3e-cf6f-4f7d-be2a-22d087482c5e.png",
}

KNOCK_OUT_BLACK = {
    "solution/mvp-entry.png",
    "concepts/joy-scrolling-phones.png",
}

THRESHOLD = 32


def resolve_asset(filename: str) -> Path:
    path = Path(filename) if filename.startswith("/") else ASSETS / filename
    if not path.exists():
        raise FileNotFoundError(path)
    return path


def save_transparent_png(src: Path, dest: Path, *, knock_out: bool) -> None:
    if not knock_out:
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        print(f"  {dest.relative_to(ROOT)} (copied)")
        return
    img = Image.open(src).convert("RGBA")
    if knock_out:
        pixels = img.load()
        width, height = img.size
        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                if r <= THRESHOLD and g <= THRESHOLD and b <= THRESHOLD:
                    pixels[x, y] = (r, g, b, 0)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, format="PNG", compress_level=3)
    print(f"  {dest.relative_to(ROOT)} ({img.size[0]}x{img.size[1]})")


def main() -> None:
    print("Importing QuickShop assets as transparent PNGs...")
    for dest_name, src_name in COPIES.items():
        save_transparent_png(
            resolve_asset(src_name),
            OUT / dest_name,
            knock_out=dest_name in KNOCK_OUT_BLACK,
        )
    print("Done.")


if __name__ == "__main__":
    main()
