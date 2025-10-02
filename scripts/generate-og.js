const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const postsDir = path.join(__dirname, '..', 'src', 'posts');
const outDir = path.join(__dirname, '..', 'public', 'og');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function svgFor(title, profileDataUri) {
  return `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .title { font: 700 56px 'Inter', Arial, sans-serif; fill: #fff; }
        .meta { font: 400 28px 'Inter', Arial, sans-serif; fill: #9ca3af; }
      </style>
    </defs>
    <rect width="1200" height="630" fill="#0b1220" />
    <image href="${profileDataUri}" x="60" y="120" width="220" height="220" clip-path="circle(110px at 170px 230px)" />
    <text x="320" y="200" class="title">${escapeXml(title)}</text>
    <text x="320" y="250" class="meta">Emmanuel "Charley" Raluswinga</text>
  </svg>
  `;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'\"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":"&apos;","\"":"&quot;"}[c]));
}

fs.readdir(postsDir, async (err, files) => {
  if (err) { console.error(err); return; }
  const md = files.filter(f => f.endsWith('.md'));
  await Promise.all(md.map(async (file) => {
    const slug = file.replace('.md', '');
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const titleMatch = raw.match(/title:\s*"(.+)"/i) || raw.match(/title:\s*(.+)/i);
    const title = titleMatch ? titleMatch[1].replace(/"/g, '') : slug;
    try {
      const profilePath = path.join(__dirname, '..', 'public', 'optimized', 'charley1-400.webp');
      let dataUri = '';
      if (fs.existsSync(profilePath)) {
        const buf = fs.readFileSync(profilePath);
        dataUri = `data:image/webp;base64,${buf.toString('base64')}`;
      }
      const svg = Buffer.from(svgFor(title, dataUri));
      await sharp(svg).resize(1200, 630).png().toFile(path.join(outDir, `${slug}.png`));
      console.log('OG generated for', slug);
    } catch (e) { console.error('OG failed', slug, e.message); }
  }));
});
