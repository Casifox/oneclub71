import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";

// GitHub Pages and Cloudflare Pages can only send static files. The CSP is
// therefore embedded in the document at build time.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto: tel:",
  "frame-src 'none'",
].join("; ");

export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-404",
      closeBundle() {
        const index = path.resolve("dist", "index.html");
        if (fs.existsSync(index)) {
          fs.copyFileSync(index, path.resolve("dist", "404.html"));
        }
      },
    },
    {
      name: "csp-meta",
      apply: "build",
      transformIndexHtml(html) {
        return html.replace(
          "<head>",
          `<head>\n    <meta http-equiv="Content-Security-Policy" content="${csp}" />`
        );
      },
    },
  ],
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  build: {
    target: "es2022",
    cssCodeSplit: true,
  },
});
