import fs from 'fs';
import path from 'path';

// 1. Read the compiled index.html from Vite
const indexPath = path.join(process.cwd(), 'dist', 'index.html');
let html = fs.readFileSync(indexPath, 'utf-8');

// 2. Inject the custom OG tags into the <head>
const customTags = `
  <title>AI Automation Services | Chubs Media</title>
  <meta property="og:title" content="AI Automation Services | Chubs Media" />
  <meta property="og:description" content="Automate your DMs, save time, and close more leads with our custom AI solutions." />
  <meta property="og:image" content="https://chubsmedia.tech/ai-automation-og.png" />
  <meta name="twitter:card" content="summary_large_image" />
`;

// Insert right before </head>
html = html.replace('</head>', `${customTags}\n</head>`);

// 3. Ensure the output directory exists
const outDir = path.join(process.cwd(), 'dist', 'services', 'ai-automation');
fs.mkdirSync(outDir, { recursive: true });

// 4. Write the specific index.html for this route
fs.writeFileSync(path.join(outDir, 'index.html'), html);

console.log('✅ Successfully created prerendered HTML with OG tags for /services/ai-automation');
