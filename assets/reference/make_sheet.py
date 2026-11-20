import os, glob
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
files = []
for pattern in ("instagram/*", "press/*", "brand/*"):
    files += sorted(glob.glob(os.path.join(ROOT, pattern)))

thumb_w, thumb_h = 320, 320
cols = 4
rows = (len(files) + cols - 1) // cols
sheet = Image.new("RGB", (cols * thumb_w, rows * (thumb_h + 28)), (12, 12, 12))
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("arial.ttf", 13)
except Exception:
    font = ImageFont.load_default()

for idx, path in enumerate(files):
    try:
        im = Image.open(path).convert("RGB")
    except Exception as e:
        print("skip", path, e)
        continue
    im.thumbnail((thumb_w, thumb_h))
    x = (idx % cols) * thumb_w + (thumb_w - im.width) // 2
    y = (idx // cols) * (thumb_h + 28) + (thumb_h - im.height) // 2
    sheet.paste(im, (x, y))
    label = os.path.relpath(path, ROOT).replace("\\", "/")
    draw.text(((idx % cols) * thumb_w + 6, (idx // cols) * (thumb_h + 28) + thumb_h + 6), label[:48], fill=(230, 230, 230), font=font)

out = os.path.join(ROOT, "contact-sheet.jpg")
sheet.save(out, quality=88)
print(out, sheet.size, len(files))
