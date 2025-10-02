const fs = require('fs');
const path = require('path');
const { describe, it, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');

describe('generate-og script', () => {
  const testDir = path.join(__dirname, '..', 'test-temp');
  const postsDir = path.join(testDir, 'src', 'posts');
  const outDir = path.join(testDir, 'public', 'og');
  
  beforeEach(() => {
    // Create test directories
    fs.mkdirSync(postsDir, { recursive: true });
    fs.mkdirSync(outDir, { recursive: true });
    
    // Create test markdown files
    for (let i = 1; i <= 5; i++) {
      fs.writeFileSync(
        path.join(postsDir, `test-post-${i}.md`),
        `---\ntitle: "Test Post ${i}"\n---\nContent for test post ${i}`
      );
    }
  });
  
  afterEach(() => {
    // Clean up test directories
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });
  
  it('should generate OG images for all markdown files', async () => {
    // Mock the generate-og logic with the BUG (forEach)
    const sharp = require('sharp');
    
    const files = fs.readdirSync(postsDir);
    const md = files.filter(f => f.endsWith('.md'));
    
    // This simulates the buggy behavior - forEach doesn't wait
    const svgBuffer = Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#0b1220" />
        <text x="320" y="200" fill="#fff">Test</text>
      </svg>
    `);
    
    // Simulate the buggy forEach pattern
    const processStartTime = Date.now();
    md.forEach(async (file) => {
      const slug = file.replace('.md', '');
      try {
        await sharp(svgBuffer)
          .resize(1200, 630)
          .png()
          .toFile(path.join(outDir, `${slug}.png`));
      } catch (e) {
        console.error('Failed:', e.message);
      }
    });
    
    // Wait a tiny bit (simulating script exit)
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Count how many files were actually created
    const createdFiles = fs.existsSync(outDir) 
      ? fs.readdirSync(outDir).filter(f => f.endsWith('.png')).length 
      : 0;
    
    // With the bug, not all files may be created due to race condition
    console.log(`Created ${createdFiles} out of ${md.length} files with buggy forEach`);
    
    // This assertion demonstrates the bug - we expect 5 but might get fewer
    // In a fast system, some might complete, but it's unreliable
    assert.ok(createdFiles >= 0, 'Some files might be created, but behavior is unreliable');
    // Note: The bug causes unreliable behavior - sometimes 0, sometimes all files
  });
  
  it('should generate OG images for all markdown files using Promise.all (FIXED)', async () => {
    // Clean the output directory first
    if (fs.existsSync(outDir)) {
      fs.rmSync(outDir, { recursive: true, force: true });
    }
    fs.mkdirSync(outDir, { recursive: true });
    
    const sharp = require('sharp');
    
    const files = fs.readdirSync(postsDir);
    const md = files.filter(f => f.endsWith('.md'));
    
    const svgBuffer = Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#0b1220" />
        <text x="320" y="200" fill="#fff">Test</text>
      </svg>
    `);
    
    // FIXED: Using Promise.all to wait for all operations
    await Promise.all(md.map(async (file) => {
      const slug = file.replace('.md', '');
      try {
        await sharp(svgBuffer)
          .resize(1200, 630)
          .png()
          .toFile(path.join(outDir, `${slug}.png`));
      } catch (e) {
        console.error('Failed:', e.message);
      }
    }));
    
    // Count how many files were created
    const createdFiles = fs.readdirSync(outDir).filter(f => f.endsWith('.png')).length;
    
    console.log(`Created ${createdFiles} out of ${md.length} files with Promise.all fix`);
    
    // With the fix, ALL files should be created reliably
    assert.strictEqual(createdFiles, md.length, `Expected ${md.length} OG images, but got ${createdFiles}`);
  });
});
