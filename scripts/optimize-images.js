const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '..', 'src', 'assets');
const outDir = path.join(__dirname, '..', 'public', 'optimized');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const input = path.join(srcDir, file);
  try {
    // generate webp at 1x and 2x
    await sharp(input).resize(400).webp({ quality: 75 }).toFile(path.join(outDir, `${name}-400.webp`));
    await sharp(input).resize(800).webp({ quality: 75 }).toFile(path.join(outDir, `${name}-800.webp`));
    // generate jpg fallback
    await sharp(input).resize(800).jpeg({ quality: 80 }).toFile(path.join(outDir, `${name}-800.jpg`));
    console.log('Optimized', file);
  } catch (e) {
    console.error('Failed to optimize', file, e.message);
  }
}

fs.readdir(srcDir, (err, files) => {
  if (err) { console.error(err); return; }
  const images = files.filter(f => /\.(jpe?g|png|webp)$/i.test(f));
  Promise.all(images.map(processFile)).then(() => console.log('Image optimization complete.'));
});
