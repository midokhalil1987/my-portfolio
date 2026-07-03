import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/projects");

const targets = [
  { url: "https://furns-snip-cart-next-js.vercel.app/", file: "furns.png" },
  { url: "https://tracker-pied-five.vercel.app/", file: "time-tracker.png" },
  { url: "https://resume-new-three.vercel.app/", file: "resume.png" },
  { url: "https://ge-techs.com/", file: "ge-techs.png" },
  { url: "https://gold.sa/", file: "gold-sa.png" },
  { url: "https://zoric-test.vercel.app/", file: "zoric.png" },
  { url: "http://dash.gasgo.matrixzone.net", file: "gasgo-admin.png" },
  { url: "http://stationdash.gasgo.matrixzone.net", file: "gasgo-station.png" },
  { url: "https://my.gov.sa/", file: "gov-sa.png" },
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 2,
});

for (const { url, file } of targets) {
  const page = await context.newPage();
  try {
    console.log(`Capturing ${url}...`);
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000);
    await page.screenshot({
      path: path.join(outputDir, file),
      type: "png",
      fullPage: false,
    });
    console.log(`  ✓ Saved ${file}`);
  } catch (err) {
    console.error(`  ✗ Failed ${file}:`, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done.");
