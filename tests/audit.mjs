import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const OUT = path.resolve("docs/captures");
fs.mkdirSync(OUT, { recursive: true });

const routes = [
  ["/", "home"],
  ["/le-club", "le-club"],
  ["/evenements", "evenements"],
  ["/galerie", "galerie"],
  ["/experience", "experience"],
  ["/infos", "infos"],
  ["/contact", "contact"],
  ["/mentions-legales", "mentions-legales"],
  ["/confidentialite", "confidentialite"],
  ["/page-qui-nexiste-pas", "404"],
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const report = {};

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    locale: "fr-FR",
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => pageErrors.push(String(err)));
  page.on("requestfailed", (req) => failedRequests.push(`${req.url()} :: ${req.failure()?.errorText}`));

  report[vp.name] = { pages: {} };

  for (const [route, name] of routes) {
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    // Scroll through the page to load lazy images before checking them.
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += 600) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(25);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);
    const data = await page.evaluate(() => {
      const h1 = document.querySelector("h1")?.innerText ?? "";
      const broken = [...document.images]
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.currentSrc || img.src);
      const overflow = document.documentElement.scrollWidth - window.innerWidth;
      const links = [...document.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href"));
      return {
        title: document.title,
        h1,
        broken,
        overflow,
        links: [...new Set(links)],
        height: document.documentElement.scrollHeight,
      };
    });
    report[vp.name].pages[name] = data;
    await page.screenshot({
      path: path.join(OUT, `${name}-${vp.name}.png`),
      fullPage: vp.name === "desktop" ? true : false,
    });
  }

  report[vp.name].consoleErrors = [...new Set(consoleErrors)];
  report[vp.name].pageErrors = [...new Set(pageErrors)];
  report[vp.name].failedRequests = [...new Set(failedRequests)];
  await context.close();
}

await browser.close();
fs.writeFileSync("docs/audit-report.json", JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
