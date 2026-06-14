# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\openAccount.spec.ts >> Create Savings Account
- Location: tests\UI\openAccount.spec.ts:5:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/register.htm", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | import { env } from '../config/env';
  3  | import { RegisterPage } from '../pages/RegisterPage';
  4  | import { User } from '../types/User';
  5  | 
  6  | export async function ensureAuthenticated(page: Page) {
  7  | 
  8  |     const logoutLink = page.getByRole('link', { name: 'Log Out' });
  9  | 
  10 |     try {
  11 |         await expect(logoutLink).toBeVisible({ timeout: 15000 });
  12 |         return;
  13 | 
  14 |     } catch {
  15 | 
  16 |         console.log('Authentication check failed.');
  17 |         console.log('Current URL:', page.url());
  18 |         throw new Error('User is not authenticated.');
  19 |     }
  20 | }
  21 | 
  22 | export async function registerAndAuthenticate(page: Page, registerPage: RegisterPage, user: User) {
  23 | 
  24 |     const maxAttempts = 3;
  25 | 
  26 |     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  27 | 
  28 |         console.log(`Registration Attempt ${attempt}/${maxAttempts}`);
> 29 |         await page.goto(`${env.baseUrl}/register.htm`, { waitUntil: 'domcontentloaded' });
     |                    ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  30 |         await registerPage.registerUser(user);
  31 | 
  32 |         try {
  33 | 
  34 |             await ensureAuthenticated(page);
  35 |             console.log('User authenticated successfully.');
  36 |             return;
  37 | 
  38 |         } catch {
  39 | 
  40 |             console.log(`Registration attempt ${attempt} failed.`);
  41 |             console.log('Current URL:', page.url());
  42 |             if (attempt === maxAttempts) {
  43 | 
  44 |                 throw new Error(`Failed to register and authenticate after ${maxAttempts} attempts`);
  45 |             }
  46 |             await page.waitForTimeout(2000);
  47 |         }
  48 |     }
  49 | }
```