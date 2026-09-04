// global-setup.ts
import { chromium } from '@playwright/test';


async function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to site and solve CAPTCHA manually once
  await page.goto(process.env.BASE_URL );
  

  await browser.close();
}

export default globalSetup;
