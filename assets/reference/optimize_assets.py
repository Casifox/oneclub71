import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
REF = os.path.join(ROOT, "assets", "reference")
PUB = os.path.join(ROOT, "public")
IMG = os.path.join(PUB, "images")


def ensure(*parts):
    p = os.path.join(*parts)
    os.makedirs(p, exist_ok=True)
    return p


brand = ensure(IMG, "brand")
gallery = ensure(IMG, "gallery")
events = ensure(IMG, "events")
ensure(IMG)


def save_webp(im, path, width=None, quality=84):
    if width and im.width != width:
        h = round(im.height * width / im.width)
        im = im.resize((width, h), Image.LANCZOS)
    im.save(path, "WEBP", quality=quality, method=6)
    print("WROTE", os.path.relpath(path, ROOT), im.size)


def save_jpg(im, path, width=None, quality=88):
    if width and im.width != width:
        h = round(im.height * width / im.width)
        im = im.resize((width, h), Image.LANCZOS)
    im = im.convert("RGB")
    im.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    print("WROTE", os.path.relpath(path, ROOT), im.size)


# ---------- 1. Transparent wordmark ----------
src = Image.open(os.path.join(REF, "brand", "logo-tiktok-avatar.jpg")).convert("RGB")
rgba = src.convert("RGBA")
px = rgba.load()
w, h = rgba.size
for y in range(h):
    for x in range(w):
        r, g, b, _ = px[x, y]
        m = max(r, g, b)
        a = 0 if m <= 10 else min(255, int((m - 10) * 1.12))
        px[x, y] = (r, g, b, a)

bbox = rgba.getbbox()
wordmark = rgba.crop(bbox)
# add a little breathing room
pad = 12
canvas = Image.new("RGBA", (wordmark.width + pad * 2, wordmark.height + pad * 2), (0, 0, 0, 0))
canvas.alpha_composite(wordmark, (pad, pad))
canvas.save(os.path.join(brand, "one-club-wordmark.png"), "PNG", optimize=True)
print("WROTE wordmark", canvas.size)

# ---------- 2. Monogram (left part with the circled 1) ----------
# The monogram occupies roughly the left 40% of the wordmark.
mono = canvas.crop((0, 0, int(canvas.width * 0.42), canvas.height))
mono_bbox = mono.getbbox()
mono = mono.crop(mono_bbox)
mono_canvas = Image.new("RGBA", (mono.width + 16, mono.height + 16), (0, 0, 0, 0))
mono_canvas.alpha_composite(mono, (8, 8))
mono_canvas.save(os.path.join(brand, "one-club-mark.png"), "PNG", optimize=True)
print("WROTE mark", mono_canvas.size)

# ---------- 3. Favicons ----------
def make_icon(size, path):
    icon = Image.new("RGB", (size, size), (5, 5, 5))
    mark = mono_canvas.copy()
    target = int(size * 0.72)
    mark.thumbnail((target, target), Image.LANCZOS)
    icon.paste(mark, ((size - mark.width) // 2, (size - mark.height) // 2), mark)
    icon.save(path, "PNG", optimize=True)
    print("WROTE", os.path.relpath(path, ROOT), icon.size)

make_icon(512, os.path.join(PUB, "icon-512.png"))
make_icon(180, os.path.join(PUB, "apple-touch-icon.png"))
make_icon(32, os.path.join(PUB, "favicon-32.png"))
make_icon(16, os.path.join(PUB, "favicon-16.png"))

# ---------- 4. Photos ----------
press = os.path.join(REF, "press")

hero = Image.open(os.path.join(press, "lg-1893.jpg")).convert("RGB")
# Up-scale gently for large screens, then sharpen very slightly.
hero_big = hero.resize((1600, round(hero.height * 1600 / hero.width)), Image.LANCZOS)
hero_big = hero_big.filter(ImageFilter.UnsharpMask(radius=1.2, percent=55, threshold=3))
save_jpg(hero_big, os.path.join(IMG, "hero.jpg"), quality=86)
save_webp(hero_big, os.path.join(IMG, "hero.webp"), quality=82)
save_webp(hero, os.path.join(IMG, "hero-800.webp"), width=800, quality=82)

gallery_sources = [
    ("club-main", "lg-1893.jpg"),
    ("club-vip", "info-chalon-1894.jpg"),
    ("club-wide", "lg-1896.jpg"),
    ("club-stage", "lg-1903.jpg"),
    ("club-lounge", "lg-the-one.jpg"),
    ("club-bar", "lg-une.jpg"),
]
for name, filename in gallery_sources:
    im = Image.open(os.path.join(press, filename)).convert("RGB")
    save_webp(im, os.path.join(gallery, f"{name}-1200.webp"), width=1200, quality=84)
    save_webp(im, os.path.join(gallery, f"{name}-640.webp"), width=640, quality=82)

event_sources = [
    ("naps-2026", "2026-05-24.jpg"),
    ("celibataire-2026", "2026-06-17.jpg"),
    ("birthday-2026", "2026-06-23.jpg"),
    ("lagui-2026", "2026-09-14_lagui-annule.jpg"),
]
for name, filename in event_sources:
    im = Image.open(os.path.join(REF, "instagram", filename)).convert("RGB")
    save_webp(im, os.path.join(events, f"{name}-640.webp"), quality=86)
    save_webp(im, os.path.join(events, f"{name}-360.webp"), width=360, quality=84)

# ---------- 5. OG image ----------
OG_W, OG_H = 1200, 630
og = Image.new("RGB", (OG_W, OG_H), (5, 5, 5))
# subtle gold radial glow
glow = Image.new("RGB", (OG_W, OG_H), (5, 5, 5))
gd = ImageDraw.Draw(glow)
for i in range(240, 0, -2):
    alpha = int(12 * (i / 240) ** 2)
    gd.ellipse((OG_W * 0.62 - i * 2.2, OG_H * 0.45 - i * 1.2, OG_W * 0.62 + i * 2.2, OG_H * 0.45 + i * 1.2), fill=(5 + alpha, 4 + int(alpha * 0.8), 3 + int(alpha * 0.4)))
og = Image.blend(og, glow, 0.9)

logo = canvas.copy()
logo.thumbnail((720, 360), Image.LANCZOS)
og.paste(logo, ((OG_W - logo.width) // 2, 150), logo)

draw = ImageDraw.Draw(og)
try:
    font_small = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 22)
    font_bold = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 26)
except Exception:
    font_small = ImageFont.load_default()
    font_bold = ImageFont.load_default()

def center_text(text, y, font, fill):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text(((OG_W - tw) / 2, y), text, font=font, fill=fill)

draw.line((OG_W / 2 - 90, 500, OG_W / 2 + 90, 500), fill=(200, 164, 94), width=2)
center_text("SAINT-MARCEL  ·  71380  ·  SAÔNE-ET-LOIRE", 520, font_small, (201, 195, 182))
center_text("RÉOUVERTURE PROCHAINE  ·  DATE À CONFIRMER", 560, font_bold, (200, 164, 94))
og.save(os.path.join(IMG, "og-image.jpg"), "JPEG", quality=90, optimize=True, progressive=True)
print("WROTE og-image.jpg", og.size)

# ---------- 6. Project favicon SVG (vector-ish wrapper around the PNG mark is not possible; use PNG links) ----------
print("DONE")
