# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\transferFunds.spec.ts >> Transfer Funds Between Accounts
- Location: tests\UI\transferFunds.spec.ts:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Open New Account')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('text=Open New Account')

```

```yaml
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a0b21c2e789ee864
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class OpenAccountPage {
  4  |     readonly page: Page;
  5  | 
  6  |     readonly openAccountLink: Locator;
  7  |     readonly accountTypeDropdown: Locator;
  8  |     readonly fromAccountDropdown: Locator;
  9  |     readonly openNewAccountButton: Locator;
  10 | 
  11 |     readonly successMessage: Locator;
  12 |     readonly accountIdLink: Locator;
  13 | 
  14 |     constructor(page: Page) {
  15 |         this.page = page;
  16 | 
  17 |         this.openAccountLink = page.locator('text=Open New Account');
  18 | 
  19 |         this.accountTypeDropdown = page.locator('#type');
  20 |         this.fromAccountDropdown = page.locator('#fromAccountId');
  21 | 
  22 |         this.openNewAccountButton = page.locator('input[value="Open New Account"]');
  23 | 
  24 |         this.successMessage = page.locator('#openAccountResult h1');
  25 |         this.accountIdLink = page.locator('#newAccountId');
  26 |     }
  27 | 
  28 |     async navigate() {
> 29 |         await expect(this.openAccountLink).toBeVisible({ timeout: 15000 });
     |                                            ^ Error: expect(locator).toBeVisible() failed
  30 | 
  31 |         await this.openAccountLink.click();
  32 | 
  33 |         await expect(this.accountTypeDropdown).toBeVisible({ timeout: 15000 });
  34 |         await expect(this.openNewAccountButton).toBeVisible({ timeout: 15000 });
  35 |     }
  36 | 
  37 |     async createSavingsAccount() {
  38 |         await this.accountTypeDropdown.selectOption('1');
  39 | 
  40 |         await this.page.waitForTimeout(2000);
  41 | 
  42 |         await this.openNewAccountButton.click();
  43 |         await Promise.race([
  44 |             this.page.locator('#openAccountResult').waitFor({ state: 'visible', timeout: 15000 }),
  45 |             this.page.locator('#openAccountError').waitFor({ state: 'visible', timeout: 15000 })
  46 |         ]);
  47 |         if (await this.page.locator('#openAccountError').isVisible()) {
  48 |             throw new Error('Open Account failed - ParaBank returned an error');
  49 |         }
  50 |     }
  51 | 
  52 |     async createCheckingAccount() {
  53 |         await expect(this.openNewAccountButton).toBeVisible();
  54 | 
  55 |         await this.accountTypeDropdown.selectOption('0');
  56 | 
  57 |         await this.openNewAccountButton.click();
  58 | 
  59 |         await this.page.waitForLoadState('networkidle');
  60 | 
  61 |         await this.page.locator('#openAccountResult').waitFor({ state: 'visible', timeout: 15000 });
  62 |     }
  63 | 
  64 |     async getCreatedAccountId() {
  65 |         const accountId = await this.accountIdLink.textContent();
  66 | 
  67 |         return accountId?.trim();
  68 |     }
  69 | }
```