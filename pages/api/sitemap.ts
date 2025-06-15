import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const urls = [
    { loc: 'https://autospatanger.com/', priority: 1.0, changefreq: 'daily' },
    { loc: 'https://autospatanger.com/services', priority: 0.8, changefreq: 'weekly' },
    { loc: 'https://autospatanger.com/packs', priority: 0.8, changefreq: 'weekly' },
    { loc: 'https://autospatanger.com/galerie', priority: 0.6, changefreq: 'monthly' },
  ];

  const urlsXml = urls.map(({ loc, priority, changefreq }) => `
    <url>
      <loc>${loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlsXml}
</urlset>`;

  res.status(200);
  res.setHeader('Content-Type', 'application/xml');
  res.end(sitemap);
}