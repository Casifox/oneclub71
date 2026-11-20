import { chromium } from "playwright-core";
import fs from "node:fs";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = "http://127.0.0.1:4180/oneclub71/";
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const report = { routes: {}, errors: [] };

const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR" });
const page = await context.newPage();
const failed = [];
page.on("requestfailed", (request) => failed.push(`${request.url()} ${request.failure()?.errorText}`));
page.on("response", (response) => {
  if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`);
});
page.on("pageerror", (error) => report.errors.push(String(error)));

for (const route of [
  "",
  "contact",
  "le-club",
  "galerie",
  "mentions-legales",
  "confidentialite",
]) {
  const url = `${BASE}${route}`;
  await page.goto(url, { waitUntil: "networkidle" });
  report.routes[route || "home"] = {
    status: 200,
    title: await page.title(),
    h1: (await page.locator("h1").first().innerText()).slice(0, 80),
  };
}

// Contact page: no form, direct contact details and the three official accounts.
await page.goto(`${BASE}contact`, { waitUntil: "networkidle" });
report.contact = {
  forms: await page.locator("form").count(),
  emailLink: await page.locator('a[href^="mailto:"]').first().getAttribute("href"),
  phoneLink: await page.locator('a[href^="tel:"]').first().getAttribute("href"),
  accounts: await page.locator(".contact-account").count(),
  accountLabels: await page.locator(".contact-account strong").allInnerTexts(),
};

// Internal links must stay inside the /oneclub71/ base.
await page.goto(`${BASE}mentions-legales`, { waitUntil: "networkidle" });
await page.getByRole("link", { name: "politique de confidentialité" }).click();
await page.waitForURL(`${BASE}confidentialite`);
report.legalLink = { url: page.url(), title: await page.title() };

const fontStatus = await page.evaluate(async () => {
  const response = await fetch("/oneclub71/fonts/inter-variable.woff2");
  return response.status;
});
report.fontStatus = fontStatus;
report.failedRequests = [...new Set(failed)];
fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/pages-build-test.json", JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
await browser.close();
