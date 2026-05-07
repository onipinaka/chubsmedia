import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';

async function captureScreenshot() {
  console.log('Starting dev server...');
  const server = spawn('npm', ['run', 'dev'], { stdio: 'ignore', shell: true });

  // Wait 3 seconds for server to boot
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Standard OG Image size
  await page.setViewport({ width: 1200, height: 630 });

  console.log('Navigating to local page...');
  await page.goto('http://localhost:5173/services/ai-automation', { waitUntil: 'networkidle2' });

  // Wait a little extra for Framer Motion animations to settle
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Taking screenshot...');
  await page.screenshot({ path: path.join(process.cwd(), 'public', 'ai-automation-og.png') });

  console.log('Closing browser and server...');
  await browser.close();
  server.kill();
  console.log('Done! Saved to public/ai-automation-og.png');
}

captureScreenshot().catch(console.error);
