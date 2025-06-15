export async function GET() {
  const baseUrl = 'https://autospatanger.com';
  
  const staticPages = [
    '',
    '/services',
    '/galerie',
    '/contact'  // ajoute ici tes autres pages si besoin
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((path) => {
        return `
          <url>
            <loc>${baseUrl}${path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}