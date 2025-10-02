const fs = require('fs');
const path = require('path');

const SITE = 'https://charleyraluswinga.space';

function getPosts() {
  const postsDir = path.join(__dirname, '..', 'src', 'posts');
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => ({
      slug: f.replace('.md', ''),
      mtime: fs.statSync(path.join(postsDir, f)).mtime.toISOString()
    }))
    .map(p => ({ loc: `${SITE}/posts/${p.slug}`, lastmod: p.mtime, changefreq: 'monthly', priority: '0.6' }));
}

function build() {
  const now = new Date().toISOString();
  const pages = [
    { loc: `${SITE}/`, lastmod: now, changefreq: 'daily', priority: '1.0' },
    { loc: `${SITE}/#about`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
    { loc: `${SITE}/#services`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
    { loc: `${SITE}/#skills`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
    { loc: `${SITE}/#projects`, lastmod: now, changefreq: 'monthly', priority: '0.9' },
    { loc: `${SITE}/#github`, lastmod: now, changefreq: 'weekly', priority: '0.7' },
    { loc: `${SITE}/#blog`, lastmod: now, changefreq: 'weekly', priority: '0.9' },
    { loc: `${SITE}/#contact`, lastmod: now, changefreq: 'monthly', priority: '0.7' }
  ];

  const posts = getPosts();

  const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

  pages.forEach(p => {
    xml.push('  <url>');
    xml.push(`    <loc>${p.loc}</loc>`);
    if (p.lastmod) xml.push(`    <lastmod>${p.lastmod}</lastmod>`);
    if (p.changefreq) xml.push(`    <changefreq>${p.changefreq}</changefreq>`);
    if (p.priority) xml.push(`    <priority>${p.priority}</priority>`);
    xml.push('  </url>');
  });

  posts.forEach(p => {
    xml.push('  <url>');
    xml.push(`    <loc>${p.loc}</loc>`);
    if (p.lastmod) xml.push(`    <lastmod>${p.lastmod}</lastmod>`);
    if (p.changefreq) xml.push(`    <changefreq>${p.changefreq}</changefreq>`);
    if (p.priority) xml.push(`    <priority>${p.priority}</priority>`);
    xml.push('  </url>');
  });
  xml.push('</urlset>');

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml.join('\n'));
  console.log('Sitemap generated.');
}

build();
