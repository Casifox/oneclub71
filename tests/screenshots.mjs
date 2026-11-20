import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const BASE = process.env.BASE_URL || "http://127.0.0.1:4173";
const OUT = path.resolve("docs/captures");
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: EXEC, headless: true });

async function open(route, width, height) {
  const context = await browser.newContext({ viewport: { width, height }, locale: "fr-FR" });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  return { context, page, errors };
}

async function revealAll(page) {
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < total; y += 500) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(40);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
  await page.addStyleTag({ content: ".reveal{opacity:1!important;transform:none!important}" });
}

const report = [];

// Viewports
for (const [w, h, name] of [[1440, 900, "1440"], [768, 1024, "768"], [390, 844, "390"]]) {
  const { context, page, errors } = await open("/", w, h);
  await page.waitForTimeout(200);
  const layout = await page.evaluate(() => {
    const header = document.querySelector(".site-header")?.getBoundingClientRect();
    const topline = document.querySelector(".hero__topline")?.getBoundingClientRect();
    const h1 = document.querySelector("h1")?.getBoundingClientRect();
    const visual = document.querySelector(".hero__visual")?.getBoundingClientRect();
    const overflowing = [...document.querySelectorAll("body *")]
      .filter((el) => {
        const style = getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") return false;
        return el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0;
      })
      .slice(0, 12)
      .map((el) => `${el.tagName}.${String(el.className).slice(0, 40)} (${el.scrollWidth}/${el.clientWidth})`);
    return {
      headerBottom: header ? Math.round(header.bottom) : null,
      toplineTop: topline ? Math.round(topline.top) : null,
      h1Top: h1 ? Math.round(h1.top) : null,
      visualTop: visual ? Math.round(visual.top) : null,
      viewport: { w: innerWidth, h: innerHeight },
      docWidth: document.documentElement.scrollWidth,
      overflowing,
      title: document.title,
    };
  });
  await page.screenshot({ path: path.join(OUT, `home-${name}-viewport.png`), fullPage: false });
  report.push({ name: `home-${name}`, errors, layout });
  await context.close();
}

// Full pages desktop
for (const [route, name] of [
  ["/", "home-1440-full"],
  ["/le-club", "club-1440-full"],
  ["/evenements", "events-1440-full"],
  ["/galerie", "galerie-1440-full"],
  ["/experience", "experience-1440-full"],
  ["/infos", "infos-1440-full"],
  ["/contact", "contact-1440-full"],
  ["/mentions-legales", "legal-1440-full"],
]) {
  const { context, page, errors } = await open(route, 1440, 900);
  await revealAll(page);
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
  report.push({ name, errors });
  await context.close();
}

// Section captures
const { context, page, errors } = await open("/", 1440, 900);
await revealAll(page);
for (const [selector, name] of [
  ["#manifeste", "section-manifeste"],
  ["#evenements", "section-evenements"],
  ["#galerie", "section-galerie"],
  ["#infos", "section-infos"],
]) {
  const el = page.locator(selector);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: false });
}
report.push({ name: "sections", errors });
await context.close();

fs.writeFileSync("docs/visual-report.json", JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
await browser.close();
