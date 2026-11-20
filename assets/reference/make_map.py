import math, os, urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
OUT = os.path.join(ROOT, "public", "images")
os.makedirs(OUT, exist_ok=True)

LAT, LON = 46.762511, 4.867369
Z = 16
TILE = 256
W, H = 1200, 900

def deg2num(lat, lon, z):
    lat_r = math.radians(lat)
    n = 2.0 ** z
    x = (lon + 180.0) / 360.0 * n
    y = (1.0 - math.log(math.tan(lat_r) + 1.0 / math.cos(lat_r)) / math.pi) / 2.0 * n
    return x, y

xf, yf = deg2num(LAT, LON, Z)
cx, cy = int(xf), int(yf)
# 4x4 tiles around the point
cols, rows = 5, 4
start_x, start_y = cx - 2, cy - 2
canvas = Image.new("RGB", (cols * TILE, rows * TILE), (245, 245, 247))

headers = {"User-Agent": "ONE-CLUB-site-demo/1.0 (contact: oneclub71.fr)"}
for dx in range(cols):
    for dy in range(rows):
        url = f"https://tile.openstreetmap.org/{Z}/{start_x + dx}/{start_y + dy}.png"
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as r:
                tile = Image.open(r).convert("RGB")
            canvas.paste(tile, (dx * TILE, dy * TILE))
        except Exception as e:
            print("tile fail", url, e)

# Position of the marker inside the stitched canvas
mx = (xf - start_x) * TILE
my = (yf - start_y) * TILE
# Crop a 1200x900 area centered on the marker, clamped
left = int(max(0, min(canvas.width - W, mx - W / 2)))
top = int(max(0, min(canvas.height - H, my - H / 2)))
crop = canvas.crop((left, top, left + W, top + H)).convert("RGB")

# Light, warm, Apple-like treatment: slightly desaturate and lift
crop = crop.filter(ImageFilter.GaussianBlur(0.3))
crop = ImageEnhance.Color(crop).enhance(0.10)
crop = ImageEnhance.Brightness(crop).enhance(1.04)
crop = ImageEnhance.Contrast(crop).enhance(0.92)
px = crop.load()
for y in range(H):
    for x in range(W):
        r, g, b = px[x, y]
        # blend toward warm off-white for a quieter map
        nr = int(r * 0.72 + 245 * 0.28)
        ng = int(g * 0.72 + 245 * 0.28)
        nb = int(b * 0.72 + 247 * 0.28)
        px[x, y] = (nr, ng, nb)

draw = ImageDraw.Draw(crop)
marker_x = int(mx - left)
marker_y = int(my - top)

# Gold pin: outer halo, gold circle, white center
for radius, color in [(46, (200, 164, 94, 30)), (30, (255, 255, 255)), (22, (200, 164, 94))]:
    if len(color) == 4:
        overlay = Image.new("RGBA", crop.size, (0, 0, 0, 0))
        od = ImageDraw.Draw(overlay)
        od.ellipse((marker_x - radius, marker_y - radius, marker_x + radius, marker_y + radius), fill=color)
        crop = Image.alpha_composite(crop.convert("RGBA"), overlay).convert("RGB")
        draw = ImageDraw.Draw(crop)
    else:
        draw.ellipse((marker_x - radius, marker_y - radius, marker_x + radius, marker_y + radius), fill=color)

draw.ellipse((marker_x - 7, marker_y - 7, marker_x + 7, marker_y + 7), fill=(29, 29, 31))

# Label card
try:
    font_bold = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 22)
    font_small = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 15)
except Exception:
    font_bold = ImageFont.load_default()
    font_small = ImageFont.load_default()

label = "ONE CLUB"
sub = "1 rue Joseph Cugnot, Saint-Marcel"
pad = 14
tw = max(draw.textlength(label, font=font_bold), draw.textlength(sub, font=font_small))
box_w = int(tw + pad * 2)
box_h = 72
bx = marker_x + 40
by = marker_y - box_h - 20
if bx + box_w > W - 20:
    bx = marker_x - box_w - 40
if by < 20:
    by = marker_y + 40
# rounded rectangle
draw.rounded_rectangle((bx, by, bx + box_w, by + box_h), radius=14, fill=(255, 255, 255), outline=(229, 229, 231), width=1)
draw.text((bx + pad, by + 12), label, font=font_bold, fill=(29, 29, 31))
draw.text((bx + pad, by + 42), sub, font=font_small, fill=(110, 110, 115))

crop.save(os.path.join(OUT, "map-oneclub.jpg"), "JPEG", quality=90, optimize=True, progressive=True)
crop.save(os.path.join(OUT, "map-oneclub.webp"), "WEBP", quality=86, method=6)
print("WROTE map", crop.size, "marker", marker_x, marker_y)
