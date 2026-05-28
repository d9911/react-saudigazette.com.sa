import express from 'express';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distPath = path.join(rootDir, 'dist');
const port = process.env.PORT || 3000;

const app = express();

// Serve the compiled static web files
app.use(express.static(distPath));

// Fallback all other routes to index.html for Single Page App routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Launch server
const server = app.listen(port, '0.0.0.0', () => {
  const url = `http://localhost:${port}`;
  console.log(`\n======================================================`);
  console.log(`🚀 Production server launched successfully!`);
  console.log(`🌐 URL: \x1b[36m${url}\x1b[0m`);
  console.log(`📂 Folder served: ${distPath}`);
  console.log(`======================================================\n`);

  // Simple, robust browser launchers across OS platforms
  let command;
  switch (process.platform) {
    case 'darwin': // macOS
      command = `open "${url}"`;
      break;
    case 'win32': // Windows
      command = `start "" "${url}"`;
      break;
    default: // Linux and others
      command = `xdg-open "${url}"`;
      break;
  }

  console.log(`Opening default web browser using: "${command}"...`);
  exec(command, (err) => {
    if (err) {
      console.log(`⚠️  Could not automatically open web browser (this is expected if running in a headless machine).`);
      console.log(`👉 Please manually copy and navigate to: ${url}`);
    } else {
      console.log(`✅ Default web browser opened successfully!`);
    }
  });
});
