# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\multiAccountFinancialValidation.spec.ts >> Validate Multi Account Financial Integrity
- Location: tests\E2E\multiAccountFinancialValidation.spec.ts:9:5

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
  - code: a0b372951c7716f0
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/userFixture';
  2  | 
  3  | import { env } from '../../config/env';
  4  | 
  5  | import { getAuthenticatedApiContext } from '../../utils/apiHelper';
  6  | 
  7  | import { getAccountBalance } from '../../utils/accountApi';
  8  | 
  9  | test('Validate Multi Account Financial Integrity', async ({ page, registerPage, openAccountPage, accountOverviewPage, transferFundsPage, user }) => {
  10 | 
  11 |     await page.goto(env.baseUrl);
  12 | 
  13 |     await registerPage.navigateToRegister();
  14 | 
  15 |     await registerPage.registerUser(user);
  16 | 
> 17 |     await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible({ timeout: 15000 });
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |     await openAccountPage.navigate();
  20 | 
  21 |     await openAccountPage.createSavingsAccount();
  22 | 
  23 |     const savings1 = await openAccountPage.getCreatedAccountId();
  24 | 
  25 |     await openAccountPage.navigate();
  26 | 
  27 |     await openAccountPage.createSavingsAccount();
  28 | 
  29 |     const savings2 = await openAccountPage.getCreatedAccountId();
  30 | 
  31 |     console.log('Savings 1:', savings1);
  32 | 
  33 |     console.log('Savings 2:', savings2);
  34 | 
  35 |     const apiContext = await getAuthenticatedApiContext(page);
  36 | 
  37 |     const balance1Before = await getAccountBalance(apiContext, savings1!);
  38 | 
  39 |     const balance2Before = await getAccountBalance(apiContext, savings2!);
  40 | 
  41 |     const totalBefore = balance1Before + balance2Before;
  42 | 
  43 |     await transferFundsPage.navigate();
  44 | 
  45 |     await transferFundsPage.transferFunds('50', 1, 2);
  46 | 
  47 |     const balance1After = await getAccountBalance(apiContext, savings1!);
  48 | 
  49 |     const balance2After = await getAccountBalance(apiContext, savings2!);
  50 | 
  51 |     const totalAfter = balance1After + balance2After;
  52 | 
  53 |     expect(balance1After).toBe(balance1Before - 50);
  54 | 
  55 |     expect(balance2After).toBe(balance2Before + 50);
  56 | 
  57 |     expect(totalAfter).toBe(totalBefore);
  58 | }
  59 | );
```