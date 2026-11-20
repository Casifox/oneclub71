from pathlib import Path

p = Path("src/data/gallery.ts")
s = p.read_text(encoding="utf-8")
marker = '  {\n    id: "club-stage"'
start = s.find(marker)
if start == -1:
    raise SystemExit("club-stage not found")
end = s.find("  },\n", start)
if end == -1:
    raise SystemExit("end not found")
s = s[:start] + s[end + 5 :]
p.write_text(s, encoding="utf-8")
print("removed club-stage from gallery")
