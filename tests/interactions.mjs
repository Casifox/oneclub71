import { chromium } from "playwright-core";
import fs from "node:fs";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const results = {};

// Desktop navigation
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Événements", exact: true }).first().click();
  await page.waitForLoadState("networkidle");
  results.desktopNav = {
    url: page.url(),
    h1: await page.locator("h1").innerText(),
    errors,
  };

  // Gallery lightbox
  await page.goto(`${BASE}/galerie`, { waitUntil: "networkidle" });
  await page.locator(".gallery-item").first().click();
  await page.waitForTimeout(200);
  const dialogOpen = await page.locator('[role="dialog"]').isVisible();
  const caption1 = await page.locator(".lightbox__caption").innerText();
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(200);
  const caption2 = await page.locator(".lightbox__caption").innerText();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(200);
  const dialogClosed = (await page.locator('[role="dialog"]').count()) === 0;
  results.lightbox = { dialogOpen, caption1: caption1.split("\n")[0], caption2: caption2.split("\n")[0], changed: caption1 !== caption2, dialogClosed };

  // FAQ
  await page.goto(`${BASE}/infos`, { waitUntil: "networkidle" });
  const firstSummary = page.locator(".faq summary").first();
  await firstSummary.click();
  results.faq = { open: await page.locator(".faq details").first().evaluate((el) => el.open) };

  // Contact page: no form, direct contact details.
  await page.goto(`${BASE}/contact`, { waitUntil: "networkidle" });
  results.contact = {
    forms: await page.locator("form").count(),
    email: await page.locator('a[href^="mailto:"]').first().getAttribute("href"),
    phone: await page.locator('a[href^="tel:"]').first().getAttribute("href"),
    accounts: await page.locator(".contact-account").count(),
  };

  await ctx.close();
}

// Mobile menu
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: "fr-FR" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await page.waitForTimeout(250);
  const open = await page.locator("#mobile-menu").evaluate((el) => el.classList.contains("is-open"));
  const bodyLocked = await page.evaluate(() => document.body.classList.contains("menu-open"));
  await page.locator("#mobile-menu").getByRole("link", { name: /Galerie/ }).click();
  await page.waitForLoadState("networkidle");
  results.mobileMenu = {
    open,
    bodyLocked,
    url: page.url(),
    closedAfterNav: !(await page.locator("#mobile-menu").evaluate((el) => el.classList.contains("is-open"))),
    errors,
  };
  await ctx.close();
}

// Reduced motion
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  results.reducedMotion = await page.evaluate(() => {
    const reveals = [...document.querySelectorAll(".reveal")];
    return {
      count: reveals.length,
      hidden: reveals.filter((el) => getComputedStyle(el).opacity === "0").length,
    };
  });
  await ctx.close();
}

// Internal links status
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const routes = ["/", "/le-club", "/evenements", "/galerie", "/experience", "/infos", "/contact", "/mentions-legales", "/confidentialite"];
  const statuses = {};
  for (const route of routes) {
    const response = await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    statuses[route] = response?.status() ?? null;
  }
  results.routeStatuses = statuses;
  await ctx.close();
}

fs.writeFileSync("docs/interaction-report.json", JSON.stringify(results, null, 2), "utf8");
console.log(JSON.stringify(results, null, 2));
await browser.close();
