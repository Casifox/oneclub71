from pathlib import Path

for p in Path("src").rglob("*"):
    if p.suffix not in {".tsx", ".ts", ".css"}:
        continue
    s = p.read_text(encoding="utf-8")
    n = s.replace("var(--bone-faint)", "var(--muted-2)").replace("var(--bone-dim)", "var(--muted)").replace("var(--bone)", "var(--ink)")
    if n != s:
        p.write_text(n, encoding="utf-8")
        print("fixed", p)
