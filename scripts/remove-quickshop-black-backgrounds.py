#!/usr/bin/env python3
"""Remove near-black backgrounds from QuickShop PNG assets."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TARGETS = [
    ROOT / "public/images/work/quickshop/concepts/favourites-quickshop.png",
    ROOT / "public/images/work/quickshop/concepts/joy-scrolling-phones.png",
    ROOT / "public/images/work/quickshop/solution/mvp-entry.png",
    ROOT / "public/images/work/quickshop/solution/step-by-step-flow.png",
    ROOT / "public/images/work/quickshop/mockup-explore.png",
    ROOT / "public/images/work/quickshop/mockup-list.png",
]

THRESHOLD = 32


def knock_out_black(path: Path) -> None:
    img = Image.open(path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if r <= THRESHOLD and g <= THRESHOLD and b <= THRESHOLD:
                pixels[x, y] = (r, g, b, 0)
    img.save(path, format="PNG", optimize=True)
    print(f"Processed {path.relative_to(ROOT)}")


def main() -> None:
    for path in TARGETS:
        if path.exists():
            knock_out_black(path)


if __name__ == "__main__":
    main()
