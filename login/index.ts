import { Page } from 'puppeteer';

import ask from '../utils/ask';
import selectors from '../selectors';

interface Params {
  page: Page;
  email: string;
  password: string;
}

async function login({ page, email, password }: Params): Promise<void> {
  // Navigate to LinkedIn
  await page.goto('https://www.linkedin.com/login', { waitUntil: 'load' });

  // Enter login credentials and submit the form
  await page.type(selectors.emailInput, email);
  await page.type(selectors.passwordInput, password);

  await page.click(selectors.loginSubmit);

  // Wait for the login to complete
  await page.waitForNavigation({ waitUntil: 'load', timeout: 60000 });

  const captcha = await page.$(selectors.captcha);

  if (captcha) {
    await ask('Please solve the captcha and then press enter');
    await page.goto('https://www.linkedin.com/', { waitUntil: 'load' });
  }

  // Check for in-app verification card
  const inAppVerificationHeading = await page.$(selectors.inAppVerificationHeading);
  if (inAppVerificationHeading) {
    const headingText = await page.evaluate(
      (el) => el.textContent?.trim(),
      inAppVerificationHeading
    );
    if (headingText === 'Check your LinkedIn app') {
      await ask('Please complete the verification in your LinkedIn app, then press enter to continue...');
      // Wait for the heading to disappear
      await page.waitForFunction(
        (selector, expectedText) => {
          const el = document.querySelector(selector);
          return !el || el.textContent?.trim() !== expectedText;
        },
        {},
        selectors.inAppVerificationHeading,
        'Check your LinkedIn app'
      );
    }
  }

  console.log('Logged in to LinkedIn');

  await page.click(selectors.skipButton).catch(() => { });
}

export default login;
