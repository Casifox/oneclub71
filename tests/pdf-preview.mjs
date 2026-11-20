import { chromium } from "playwright-core";
import path from "node:path";
import { pathToFileURL } from "node:url";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const source = path.resolve("docs/guide-site.html");
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const page = await browser.newPage({
  viewport: { width: 794, height: 1123 },
  deviceScaleFactor: 2,
  locale: "fr-FR",
});
await page.goto(pathToFileURL(source).href, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.emulateMedia({ media: "print" });
const pages = page.locator(".page");
const count = await pages.count();
for (let i = 0; i < count; i += 1) {
  await pages.nth(i).screenshot({ path: `docs/captures/guide-page-${i + 1}.png` });
}
console.log("pages", count);
await browser.close();
