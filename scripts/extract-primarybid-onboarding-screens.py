#!/usr/bin/env python3
"""
Extract individual onboarding screen PNGs from the PrimaryBid onboarding flow PDF.

Usage:
  python3 scripts/extract-primarybid-onboarding-screens.py [path-to-pdf]

Requires: pymupdf, pillow (see .venv-pdf in project root or install locally).
"""

from __future__ import annotations

import io
import sys
from pathlib import Path

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_PDF = Path(
    "/Users/jac/Desktop/Work/PrimaryBid/Work/T-Web/PDFs/User flow onboarding journey PB.pdf"
)
OUTPUT_DIR = ROOT / "public" / "images" / "work" / "primarybid" / "onboarding"
RENDER_SCALE = 4

# Outer screen frame rectangles in PDF coordinates (points), left-to-right, top-to-bottom.
SCREEN_RECTS = [
    (124.0, 282.0, 441.0660095214844, 848.050048828125),
    (520.0659790039062, 282.0, 837.1290283203125, 848.050048828125),
    (916.1329956054688, 282.0, 1233.199951171875, 848.050048828125),
    (1312.199951171875, 282.0, 1629.260009765625, 848.050048828125),
    (124.0, 946.050048828125, 441.0660095214844, 1512.1099853515625),
    (520.0659790039062, 946.050048828125, 837.1290283203125, 1512.1099853515625),
    (916.1329956054688, 946.050048828125, 1233.199951171875, 1512.1099853515625),
    (1312.199951171875, 946.050048828125, 1629.260009765625, 1512.1099853515625),
    (124.0, 1610.1099853515625, 441.0660095214844, 2176.169921875),
    (520.0659790039062, 1610.1099853515625, 837.1290283203125, 2176.169921875),
    (916.1329956054688, 1610.1099853515625, 1233.199951171875, 2176.169921875),
    (1312.199951171875, 1610.1099853515625, 1629.260009765625, 2176.169921875),
    (124.0, 2274.169921875, 441.0660095214844, 2840.22998046875),
    (520.0659790039062, 2274.169921875, 837.1290283203125, 2840.22998046875),
    (916.1329956054688, 2274.169921875, 1233.199951171875, 2840.22998046875),
    (1312.199951171875, 2274.169921875, 1629.260009765625, 2840.22998046875),
]

FILENAMES = [
    "01-email-entry.png",
    "02-code-entry.png",
    "03-code-complete.png",
    "04-personal-details-intro.png",
    "05-full-name.png",
    "06-date-of-birth.png",
    "07-postcode-entry.png",
    "08-address-selection.png",
    "09-phone-entry.png",
    "10-phone-complete.png",
    "11-broker-details-intro.png",
    "12-checking-details.png",
    "13-broker-selection.png",
    "14-trading-account.png",
    "15-nationality.png",
    "16-national-insurance.png",
]


def trim_whitespace(image: Image.Image, tolerance: int = 248) -> Image.Image:
    """Trim outer white margins while preserving the screen frame."""
    rgb = image.convert("RGB")
    pixels = rgb.load()
    width, height = rgb.size

    def row_has_content(y: int) -> bool:
        for x in range(width):
            r, g, b = pixels[x, y]
            if r < tolerance or g < tolerance or b < tolerance:
                return True
        return False

    def col_has_content(x: int, y0: int, y1: int) -> bool:
        for y in range(y0, y1):
            r, g, b = pixels[x, y]
            if r < tolerance or g < tolerance or b < tolerance:
                return True
        return False

    top = next((y for y in range(height) if row_has_content(y)), 0)
    bottom = next((y for y in range(height - 1, -1, -1) if row_has_content(y)), height - 1)
    left = next((x for x in range(width) if col_has_content(x, top, bottom + 1)), 0)
    right = next(
        (x for x in range(width - 1, -1, -1) if col_has_content(x, top, bottom + 1)),
        width - 1,
    )

    # Keep a 1px safety margin so the outer border is never clipped.
    pad = 1
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(width - 1, right + pad)
    bottom = min(height - 1, bottom + pad)

    return rgb.crop((left, top, right + 1, bottom + 1))


def inset_rect(
    rect: tuple[float, float, float, float], index: int
) -> tuple[float, float, float, float]:
    """Remove neighbouring flow-connector artefacts at shared column gutters."""
    x0, y0, x1, y1 = rect
    column = index % 4
    inset = 14.0
    if column < 3:
        x1 -= inset
    if column > 0:
        x0 += inset
    return (x0, y0, x1, y1)


def crop_screen(
    page: fitz.Page, rect: tuple[float, float, float, float], index: int
) -> Image.Image:
    clip = fitz.Rect(*inset_rect(rect, index))
    matrix = fitz.Matrix(RENDER_SCALE, RENDER_SCALE)
    pixmap = page.get_pixmap(matrix=matrix, clip=clip, alpha=False)
    return Image.open(io.BytesIO(pixmap.tobytes("png")))


def main() -> int:
    pdf_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PDF
    if not pdf_path.exists():
        print(f"PDF not found: {pdf_path}", file=sys.stderr)
        return 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(pdf_path)
    page = doc[0]

    print(f"Rendering page 1 at {RENDER_SCALE}x from {pdf_path}")
    sizes: list[tuple[int, int]] = []

    for index, (filename, rect) in enumerate(zip(FILENAMES, SCREEN_RECTS, strict=True)):
        cropped = crop_screen(page, rect, index)
        trimmed = trim_whitespace(cropped)
        out_path = OUTPUT_DIR / filename
        trimmed.save(out_path, format="PNG", optimize=True)
        sizes.append(trimmed.size)
        print(f"  {filename}: {trimmed.size[0]}x{trimmed.size[1]}")

    widths = {w for w, _ in sizes}
    heights = {h for _, h in sizes}
    if len(widths) > 2 or len(heights) > 2:
        print("Warning: crop dimensions vary more than expected.", file=sys.stderr)

    print(f"Wrote {len(FILENAMES)} screens to {OUTPUT_DIR}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
