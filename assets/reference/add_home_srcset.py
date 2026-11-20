import re
from pathlib import Path

p = Path("src/pages/Home.tsx")
s = p.read_text(encoding="utf-8")

pattern = re.compile(r'(\n\s*)src="/images/gallery/([a-z-]+)-1200\.webp"')
def repl(m):
    indent, name = m.group(1), m.group(2)
    return (
        f'{indent}src="/images/gallery/{name}-1200.webp"'
        f'{indent}srcSet="/images/gallery/{name}-640.webp 640w, /images/gallery/{name}-1200.webp 1200w"'
        f'{indent}sizes="(max-width: 900px) 100vw, 600px"'
    )
s2, n = pattern.subn(repl, s)
p.write_text(s2, encoding="utf-8")
print("updated", n, "images")
