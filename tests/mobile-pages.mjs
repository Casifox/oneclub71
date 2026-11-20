import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const OUT = path.resolve("docs/captures");
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: "fr-FR", isMobile: true, deviceScaleFactor: 2 });
const page = await ctx.newPage();
const results = [];

for (const [route, name] of [
  ["/le-club", "club-390"],
  ["/evenements", "events-390"],
  ["/galerie", "galerie-390"],
  ["/experience", "experience-390"],
  ["/infos", "infos-390"],
  ["/contact", "contact-390"],
]) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += 600) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(30);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.addStyleTag({ content: ".reveal{opacity:1!important;transform:none!important}" });
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
  results.push({
    name,
    overflow: await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth),
    height: await page.evaluate(() => document.documentElement.scrollHeight),
  });
}
console.log(JSON.stringify(results, null, 2));
await browser.close();
