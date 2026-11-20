from pathlib import Path

p = Path("src/data/gallery.ts")
s = p.read_text(encoding="utf-8")
for key in ("club-lounge", "club-bar"):
    marker = '  {\n    id: "' + key + '"'
    start = s.find(marker)
    if start == -1:
        print("not found", key)
        continue
    end = s.find("  },\n", start)
    if end == -1:
        print("end not found", key)
        continue
    s = s[:start] + s[end + 5 :]
    print("removed", key)
p.write_text(s, encoding="utf-8")
