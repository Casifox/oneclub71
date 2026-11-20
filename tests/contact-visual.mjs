import { chromium } from "playwright-core";
import fs from "node:fs";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = "http://127.0.0.1:4180/oneclub71/";
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
fs.mkdirSync("docs/captures", { recursive: true });

for (const [name, viewport] of [
  ["contact-1440", { width: 1440, height: 1000 }],
  ["contact-390", { width: 390, height: 844 }],
]) {
  const context = await browser.newContext({ viewport, locale: "fr-FR" });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (message) => message.type() === "error" && errors.push(message.text()));
  page.on("pageerror", (error) => errors.push(String(error)));
  await page.goto(`${BASE}contact`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `docs/captures/${name}-full.png`, fullPage: true });
  console.log(name, { errors, overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth) });
  await context.close();
}

await browser.close();
