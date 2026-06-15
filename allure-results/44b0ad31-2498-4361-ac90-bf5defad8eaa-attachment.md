# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\accountCreationJourney.spec.ts >> Validate Account Creation Journey
- Location: tests\E2E\accountCreationJourney.spec.ts:8:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: Failed to register and authenticate after 3 attempts
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for parabank.parasoft.com" [ref=e5]
        - heading "parabank.parasoft.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e12]:
    - generic [ref=e14]:
      - generic [ref=e16]:
        - text: "Ray ID:"
        - code [ref=e17]: a0bfd778e9f946f3
      - generic [ref=e18]:
        - generic [ref=e19]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e20] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e22] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
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
  16 |         throw new Error('User is not authenticated.');
  17 |     }
  18 | }
  19 | 
  20 | export async function registerAndAuthenticate(page: Page, registerPage: RegisterPage, user: User) {
  21 | 
  22 |     const maxAttempts = 3;
  23 | 
  24 |     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  25 | 
  26 |         await page.goto(`${env.baseUrl}/register.htm`, { waitUntil: 'domcontentloaded' });
  27 |         await registerPage.registerUser(user);
  28 | 
  29 |         try {
  30 | 
  31 |             await ensureAuthenticated(page);
  32 |             return;
  33 | 
  34 |         } catch {
  35 |             if (attempt === maxAttempts) {
  36 | 
> 37 |                 throw new Error(`Failed to register and authenticate after ${maxAttempts} attempts`);
     |                       ^ Error: Failed to register and authenticate after 3 attempts
  38 |             }
  39 |             await page.waitForTimeout(2000);
  40 |         }
  41 |     }
  42 | }
```