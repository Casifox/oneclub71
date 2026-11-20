import { chromium } from "playwright-core";
import path from "node:path";
import { pathToFileURL } from "node:url";

const EXEC = "C:/Users/Noah/AppData/Local/ms-playwright/chromium-1254/chrome-win64/chrome.exe";
const source = path.resolve("docs/guide-site.html");
const output = path.resolve("docs/ONE-CLUB-71-guide.pdf");
const browser = await chromium.launch({ executablePath: EXEC, headless: true });
const page = await browser.newPage({ viewport: { width: 1240, height: 1754 }, locale: "fr-FR" });
await page.goto(pathToFileURL(source).href, { waitUntil: "load" });
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all(
    [...document.images].map((image) =>
      image.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          })
    )
  );
});
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: output,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
console.log(`PDF: ${output}`);
console.log(
  "images:",
  await page.evaluate(() =>
    [...document.images].map((image) => ({ src: image.getAttribute("src"), ok: image.complete && image.naturalWidth > 0 }))
  )
);
await browser.close();
