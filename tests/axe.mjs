import { chromium } from "playwright-core";
import { AxeBuilder } from "@axe-core/playwright";
import fs from "node:fs";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const routes = ["/", "/le-club", "/evenements", "/galerie", "/experience", "/infos", "/contact", "/mentions-legales", "/confidentialite"];
const report = {};

for (const viewport of [{ w: 1440, h: 900, name: "desktop" }, { w: 390, h: 844, name: "mobile" }]) {
  const ctx = await browser.newContext({ viewport: { width: viewport.w, height: viewport.h }, locale: "fr-FR" });
  const page = await ctx.newPage();
  report[viewport.name] = {};
  for (const route of routes) {
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    report[viewport.name][route] = results.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })).slice(0, 6),
    }));
  }
  await ctx.close();
}

fs.writeFileSync("docs/axe-report.json", JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
await browser.close();
