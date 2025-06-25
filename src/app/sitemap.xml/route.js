// app/sitemap.xml/route.js
import { NextResponse } from 'next/server';

const BASE_URL = 'https://www.lorem-czechsum.codefit.cz'; // nahraď svou doménou

export async function GET() {
  const staticRoutes = [''];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    route => `
  <url>
    <loc>${BASE_URL}/${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}