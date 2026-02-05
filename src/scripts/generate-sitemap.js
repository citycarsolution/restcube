import fs from "fs";
import path from "path";
import { cities, products } from "../data/cityProductData.js";

const BASE_URL = "https://www.restcube.in";

const staticPages = [
  "/",
  "/about",
  "/privacy-policy",
  "/terms-conditions",
  "/services/toilet-cubicle-installation",
  "/services/urinal-partition-systems",
];

function generateSitemap() {
  let urls = [];

  /* ================= STATIC PAGES ================= */
  staticPages.forEach((page) => {
    urls.push(`
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  /* ================= CITY × PRODUCT PAGES ================= */
  products.forEach((product) => {
    cities.forEach((city) => {
      urls.push(`
  <url>
    <loc>${BASE_URL}/${product.slug}-${city.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  const outputPath = path.resolve("public", "sitemap.xml");

  fs.writeFileSync(outputPath, sitemap.trim());
  console.log("✅ sitemap.xml generated successfully at /public/sitemap.xml");
}

generateSitemap();
