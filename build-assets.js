const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const outDir = path.join(rootDir, 'www');

console.log('🚀 Packaging Notybook web assets for Android build...');

// Clean and recreate www/
if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Files to copy
const filesToCopy = ['index.html', '404.html'];
filesToCopy.forEach(file => {
    const src = path.join(rootDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(outDir, file));
        console.log(`  ✓ Copied ${file}`);
    }
});

// Folders to copy
const dirsToCopy = ['js', 'css', 'fonts', 'images'];
dirsToCopy.forEach(dir => {
    const src = path.join(rootDir, dir);
    if (fs.existsSync(src)) {
        fs.cpSync(src, path.join(outDir, dir), { recursive: true });
        console.log(`  ✓ Copied ${dir}/ directory`);
    }
});

console.log('✅ Web assets successfully bundled into www/ directory!');
