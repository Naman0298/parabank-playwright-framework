# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\accountOverview.spec.ts >> Verify New Account Appears In Account Overview
- Location: tests\UI\accountOverview.spec.ts:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Open New Account' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('link', { name: 'Open New Account' })

```

```yaml
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a0b1b3be9f7134ac
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/testFixtures';
  2  | 
  3  | import { generateUser } from '../../utils/dataGenerator';
  4  | import { env } from '../../config/env';
  5  | 
  6  | test('Verify New Account Appears In Account Overview', async ({ registerPage, openAccountPage, accountOverviewPage, page }) => {
  7  | 
  8  |     const user = generateUser();
  9  | 
  10 |     await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
  11 | 
  12 |     await registerPage.navigateToRegister();
  13 | 
  14 |     await registerPage.registerUser(user);
  15 | 
> 16 |     await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible({ timeout: 15000 });
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  17 | 
  18 |     await openAccountPage.navigate();
  19 | 
  20 |     await openAccountPage.createSavingsAccount();
  21 | 
  22 |     const accountId = await openAccountPage.getCreatedAccountId();
  23 | 
  24 |     console.log('Created Account:', accountId);
  25 | 
  26 |     await accountOverviewPage.navigate();
  27 | 
  28 |     const exists = await accountOverviewPage.accountExists(accountId!);
  29 | 
  30 |     expect(exists).toBeTruthy();
  31 | });
```