import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const assetsDir = path.join(rootDir, 'assets');
const srcDir = path.join(rootDir, 'src');
const indexHtmlPath = path.join(rootDir, 'index.html');
const publicAssetsDir = path.join(rootDir, 'public', 'assets');

// Helper to recursively list files
function getFilesRecursive(dir) {
  if (!fs.existsSync(dir)) return [];
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursive(filePath));
    } else {
      results.push(filePath);
    }
  }
  return results;
}

// 1. Map all items in src and index.html to read their contents
const sourceFiles = getFilesRecursive(srcDir).concat([indexHtmlPath]).filter(f => {
  const ext = path.extname(f);
  return ['.tsx', '.ts', '.html', '.css', '.js'].includes(ext);
});

console.log(`Analyzing ${sourceFiles.length} source/config files for asset references...`);

const sourceContents = sourceFiles.map(filePath => {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    return '';
  }
}).join('\n');

// 2. Scan all files inside the original assets directory
console.log('Mapping files in "./assets"...');
const allAssetFiles = getFilesRecursive(assetsDir);
console.log(`Found ${allAssetFiles.length} total files in the "./assets" folder.`);

const usedAssets = [];
const unusedAssets = [];

// Determine which assets are actively referenced
for (const assetPath of allAssetFiles) {
  const relativeAssetPath = path.relative(rootDir, assetPath).replace(/\\/g, '/'); // e.g. "assets/img/checkmark.png"
  const filename = path.basename(assetPath);
  
  // Exclude structural or system files from pruning
  if (filename === '.gitignore' || filename === '.DS_Store' || filename.startsWith('.')) {
    continue;
  }

  // Check if either the relative path or filename is mentioned in any source file contents
  const isUsed = sourceContents.includes(relativeAssetPath) || sourceContents.includes(filename);

  if (isUsed) {
    usedAssets.push(assetPath);
  } else {
    unusedAssets.push(assetPath);
  }
}

console.log(`\n--- ANALYSIS COMPLETE ---`);
console.log(`▶ Used assets: ${usedAssets.length}`);
console.log(`▶ Unused assets detected: ${unusedAssets.length}`);

// Delete unused assets to free up space and purge bloat
if (unusedAssets.length > 0) {
  console.log(`\nPurging ${unusedAssets.length} unused assets...`);
  for (const unusedPath of unusedAssets) {
    try {
      fs.unlinkSync(unusedPath);
      // Try to clean up empty parent directories
      let parent = path.dirname(unusedPath);
      while (parent !== assetsDir && fs.existsSync(parent)) {
        if (fs.readdirSync(parent).length === 0) {
          fs.rmdirSync(parent);
          parent = path.dirname(parent);
        } else {
          break;
        }
      }
    } catch (e) {
      console.error(`Could not delete: ${unusedPath}`, e);
    }
  }
  console.log('Purge completed successfully!');
} else {
  console.log('No unused assets found to purge.');
}

// Ensure the target public assets directory is clean
if (fs.existsSync(publicAssetsDir)) {
  fs.rmSync(publicAssetsDir, { recursive: true, force: true });
}
fs.mkdirSync(publicAssetsDir, { recursive: true });

// Copy only the used assets to the "public/assets" path for Vite to bundle correctly
console.log('\nCopying used assets to "./public/assets" for Vite production bundling...');
for (const usedPath of usedAssets) {
  const relativeFromAssets = path.relative(assetsDir, usedPath);
  const targetPath = path.join(publicAssetsDir, relativeFromAssets);
  
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(usedPath, targetPath);
}

console.log('Assets successfully optimized and copied to "public/assets"!');
