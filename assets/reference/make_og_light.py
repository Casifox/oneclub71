import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
W, H = 1200, 630
bg = Image.new("RGB", (W, H), (245, 245, 247))
draw = ImageDraw.Draw(bg)

# soft gold glow
glow = Image.new("RGB", (W, H), (245, 245, 247))
gd = ImageDraw.Draw(glow)
for i in range(300, 0, -2):
    alpha = int(10 * (i / 300) ** 2)
    gd.ellipse((W * 0.78 - i * 2.4, H * 0.2 - i * 1.4, W * 0.78 + i * 2.4, H * 0.2 + i * 1.4), fill=(245 - alpha, 242 - alpha, 236 - alpha))
bg = Image.blend(bg, glow, 0.8)
draw = ImageDraw.Draw(bg)

# black logo tile
tile = (80, 76, 420, 196)
draw.rounded_rectangle(tile, radius=24, fill=(0, 0, 0))
logo = Image.open(os.path.join(ROOT, "public", "images", "brand", "one-club-wordmark.png")).convert("RGBA")
logo.thumbnail((300, 90), Image.LANCZOS)
bg.paste(logo, (100 + (300 - logo.width) // 2, 136 - logo.height // 2), logo)

try:
    font_h = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 62)
    font_s = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 24)
    font_b = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 20)
except Exception:
    font_h = ImageFont.load_default()
    font_s = ImageFont.load_default()
    font_b = ImageFont.load_default()

draw.text((80, 250), "La nuit", font=font_h, fill=(29, 29, 31))
draw.text((80, 318), "a son ", font=font_h, fill=(29, 29, 31))
draw.text((80 + draw.textlength("a son ", font=font_h), 318), "adresse.", font=font_h, fill=(138, 104, 50))
draw.line((80, 418, 230, 418), fill=(200, 164, 94), width=3)
draw.text((80, 444), "Saint-Marcel · 71 · Discothèque", font=font_s, fill=(95, 95, 100))
draw.text((80, 500), "Réouverture prochaine — date à confirmer", font=font_b, fill=(138, 104, 50))

# subtle right-side detail: thin gold line
draw.line((980, 520, 1120, 520), fill=(200, 164, 94), width=2)
draw.line((1120, 520, 1120, 480), fill=(200, 164, 94), width=2)

bg.save(os.path.join(ROOT, "public", "images", "og-image.jpg"), "JPEG", quality=92, optimize=True, progressive=True)
print("WROTE og-image.jpg", bg.size)
