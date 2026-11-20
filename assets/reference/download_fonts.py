import os, re, urllib.request

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
FONT_DIR = os.path.join(ROOT, "public", "fonts")
os.makedirs(FONT_DIR, exist_ok=True)

URL = ("https://fonts.googleapis.com/css2?"
       "family=Bebas+Neue&family=Syncopate:wght@400;700&"
       "family=Manrope:wght@300;400;500;600;700&"
       "family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap")
HDRS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                      "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"}

req = urllib.request.Request(URL, headers=HDRS)
css = urllib.request.urlopen(req, timeout=45).read().decode("utf-8")

# Split into blocks with their preceding subset comment.
pattern = re.compile(r"/\*\s*([a-z0-9-]+)\s*\*/\s*@font-face\s*\{(.*?)\}", re.S)
faces = []
for subset, body in pattern.findall(css):
    if subset != "latin":
        continue
    family = re.search(r"font-family:\s*'([^']+)'", body).group(1)
    style = re.search(r"font-style:\s*([a-z]+)", body).group(1)
    weight = re.search(r"font-weight:\s*(\d+)", body).group(1)
    url = re.search(r"url\((https://[^)]+\.woff2)\)", body).group(1)
    faces.append((family, style, weight, url))

out_css = ["/* Polices auto-hébergées — sous-ensemble latin. Licences SIL Open Font License. */", ""]
seen = set()
for family, style, weight, url in faces:
    slug = family.lower().replace(" ", "-")
    fname = f"{slug}-{weight}-{style}.woff2"
    if fname in seen:
        continue
    seen.add(fname)
    dest = os.path.join(FONT_DIR, fname)
    if not os.path.exists(dest):
        r = urllib.request.Request(url, headers=HDRS)
        with urllib.request.urlopen(r, timeout=45) as resp, open(dest, "wb") as f:
            f.write(resp.read())
    print("FONT", fname, os.path.getsize(dest))
    out_css.append(f"""@font-face {{
  font-family: '{family}';
  font-style: {style};
  font-weight: {weight};
  font-display: swap;
  src: url('/fonts/{fname}') format('woff2');
}}""")

with open(os.path.join(ROOT, "src", "fonts.css"), "w", encoding="utf-8") as f:
    f.write("\n".join(out_css) + "\n")
print("WROTE src/fonts.css", len(faces), "faces")
