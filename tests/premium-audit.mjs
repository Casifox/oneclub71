import { chromium } from "playwright-core";
import { AxeBuilder } from "@axe-core/playwright";
import fs from "node:fs";
import path from "node:path";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = "http://127.0.0.1:4173";
const OUT = path.resolve("docs/captures");
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const report = { breakpoints: {}, dark: {}, axeDark: {} };

for (const width of [320, 375, 390, 430, 768, 1024, 1280, 1440, 1600, 1920]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, locale: "fr-FR" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(200);
  const data = await page.evaluate(() => {
    const vis = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return false;
      const s = getComputedStyle(el);
      return s.display !== "none" && s.visibility !== "hidden" && el.getBoundingClientRect().width > 0;
    };
    const h1 = document.querySelector("h1")?.getBoundingClientRect();
    const header = document.querySelector(".site-header")?.getBoundingClientRect();
    const topline = document.querySelector(".hero__topline")?.getBoundingClientRect();
    const overflowing = [...document.querySelectorAll("body *")]
      .filter((el) => {
        const s = getComputedStyle(el);
        if (s.display === "none" || s.visibility === "hidden") return false;
        if (el.classList.contains("marquee") || el.classList.contains("sr-only")) return false;
        return el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0;
      })
      .slice(0, 8)
      .map((el) => `${el.tagName}.${String(el.className).slice(0, 30)}`);
    return {
      overflow: document.documentElement.scrollWidth - innerWidth,
      headerHeight: header ? Math.round(header.height) : null,
      h1Top: h1 ? Math.round(h1.top) : null,
      toplineTop: topline ? Math.round(topline.top) : null,
      nav: vis(".main-nav"),
      menu: vis(".menu-toggle"),
      theme: vis(".header-actions .theme-toggle"),
      status: vis(".header-actions .status-pill"),
      contact: vis(".header-actions .btn"),
      overflowing,
    };
  });
  report.breakpoints[width] = { ...data, errors };
  if ([320, 430, 1024, 1600].includes(width)) {
    await page.screenshot({ path: path.join(OUT, `premium-${width}.png`), fullPage: false });
  }
  await ctx.close();
}

// Dark mode: manual toggle, persistence, and axe.
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR", colorScheme: "light" });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(BASE, { waitUntil: "networkidle" });
  const before = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.locator(".header-actions .theme-toggle").click();
  await page.waitForTimeout(300);
  const after = await page.evaluate(() => ({
    theme: document.documentElement.dataset.theme,
    stored: localStorage.getItem("oneclub-theme"),
    bodyBg: getComputedStyle(document.body).backgroundColor,
    meta: document.querySelector('meta[name="theme-color"]')?.getAttribute("content"),
  }));
  await page.screenshot({ path: path.join(OUT, "dark-home-1440.png"), fullPage: true });
  await page.reload({ waitUntil: "networkidle" });
  const persisted = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.locator(".header-actions .theme-toggle").click();
  await page.waitForTimeout(200);
  const back = await page.evaluate(() => document.documentElement.dataset.theme);
  report.dark.toggle = { before, after, persisted, back, errors };
  await ctx.close();
}

// System dark preference, no stored preference.
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR", colorScheme: "dark" });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  report.dark.system = await page.evaluate(() => ({
    theme: document.documentElement.dataset.theme,
    bodyBg: getComputedStyle(document.body).backgroundColor,
  }));
  await ctx.close();
}

// Dark mode routes: axe + screenshots.
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR", colorScheme: "dark" });
  const page = await ctx.newPage();
  for (const route of ["/", "/le-club", "/evenements", "/galerie", "/experience", "/infos", "/contact", "/mentions-legales", "/confidentialite"]) {
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    report.axeDark[route] = results.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length }));
    if (["/", "/contact", "/evenements", "/galerie"].includes(route)) {
      const name = route === "/" ? "dark-home" : `dark-${route.replace("/", "")}`;
      await page.screenshot({ path: path.join(OUT, `${name}-1440.png`), fullPage: true });
    }
  }
  await ctx.close();
}

fs.writeFileSync("docs/premium-report.json", JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
await browser.close();
