import { chromium } from "playwright-core";
import fs from "node:fs";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = "https://casifox.github.io/oneclub71/";
const routes = ["", "contact", "le-club", "galerie", "mentions-legales", "confidentialite"];
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR" });
const page = await context.newPage();
const report = { routes: {}, failedAssets: [], errors: [] };
page.on("requestfailed", (request) => report.failedAssets.push(`${request.url()} ${request.failure()?.errorText}`));
page.on("response", (response) => {
  if (
    response.status() >= 400 &&
    response.request().resourceType() !== "document" &&
    !response.url().includes("favicon")
  ) {
    report.failedAssets.push(`${response.status()} ${response.url()}`);
  }
});
page.on("pageerror", (error) => report.errors.push(String(error)));

for (const route of routes) {
  const response = await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  report.routes[route || "home"] = {
    status: response?.status(),
    title: await page.title(),
    h1: (await page.locator("h1").first().innerText()).slice(0, 60),
  };
}

await page.goto(`${BASE}contact`, { waitUntil: "networkidle" });
report.contact = {
  forms: await page.locator("form").count(),
  email: await page.locator('a[href^="mailto:"]').first().getAttribute("href"),
  phone: await page.locator('a[href^="tel:"]').first().getAttribute("href"),
  accounts: await page.locator(".contact-account").count(),
  labels: await page.locator(".contact-account strong").allInnerTexts(),
};

report.failedAssets = [...new Set(report.failedAssets)];
report.note =
  "Les routes profondes sont servies via des dossiers index.html pour obtenir un statut 200 sur GitHub Pages.";
fs.writeFileSync("docs/live-site-test.json", JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
await browser.close();
