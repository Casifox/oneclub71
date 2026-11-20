const BASE = import.meta.env.BASE_URL || "/";

/** Prefix a public asset path with Vite's base (needed for GitHub Pages project sites). */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  return `${BASE}${path.replace(/^\/+/, "")}`;
}

/** Prefix every URL in a srcset string. */
export function assetSrcSet(srcSet?: string): string | undefined {
  if (!srcSet) return undefined;
  return srcSet
    .split(",")
    .map((entry) => {
      const [url, ...descriptor] = entry.trim().split(/\s+/);
      return `${asset(url)}${descriptor.length ? ` ${descriptor.join(" ")}` : ""}`;
    })
    .join(", ");
}
