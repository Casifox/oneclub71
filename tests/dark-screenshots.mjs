import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = "http://127.0.0.1:4173";
const OUT = path.resolve("docs/captures");
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR", colorScheme: "dark" });
const page = await ctx.newPage();

for (const [route, name] of [
  ["/", "dark-home-full"],
  ["/le-club", "dark-club-full"],
  ["/evenements", "dark-events-full"],
  ["/galerie", "dark-galerie-full"],
  ["/infos", "dark-infos-full"],
  ["/contact", "dark-contact-full"],
]) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += 600) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(30);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.addStyleTag({ content: ".reveal{opacity:1!important;transform:none!important}" });
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
  console.log(name, await page.evaluate(() => document.documentElement.scrollWidth - innerWidth));
}
await browser.close();
