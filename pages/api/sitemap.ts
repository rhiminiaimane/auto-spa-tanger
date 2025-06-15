import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/xml');
  res.write(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://autospatanger.com/</loc>
      </url>
      <url>
        <loc>https://autospatanger.com/services</loc>
      </url>
      <url>
        <loc>https://autospatanger.com/galerie</loc>
      </url>
      <url>
        <loc>https://autospatanger.com/contact</loc>
      </url>
    </urlset>`
  );
  res.end();
}