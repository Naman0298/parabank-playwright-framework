# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hybrid\transferFundsValidation.spec.ts >> Transfer Funds And Validate Through API
- Location: tests\Hybrid\transferFundsValidation.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Transfer Funds' })

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
        - code [ref=e17]: a0b1ad658da7b18f
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
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class TransferFundsPage {
  4  | 
  5  |     readonly page: Page;
  6  | 
  7  |     readonly transferFundsLink: Locator;
  8  | 
  9  |     readonly amountInput: Locator;
  10 |     readonly fromAccountDropdown: Locator;
  11 |     readonly toAccountDropdown: Locator;
  12 | 
  13 |     readonly transferButton: Locator;
  14 | 
  15 |     readonly successMessage: Locator;
  16 | 
  17 |     constructor(page: Page) {
  18 | 
  19 |         this.page = page;
  20 | 
  21 |         this.transferFundsLink =
  22 |             page.getByRole('link', {
  23 |                 name: 'Transfer Funds'
  24 |             });
  25 | 
  26 |         this.amountInput =
  27 |             page.locator('#amount');
  28 | 
  29 |         this.fromAccountDropdown =
  30 |             page.locator('#fromAccountId');
  31 | 
  32 |         this.toAccountDropdown =
  33 |             page.locator('#toAccountId');
  34 | 
  35 |         this.transferButton =
  36 |             page.locator('input[value="Transfer"]');
  37 | 
  38 |         this.successMessage =
  39 |             page.locator('#showResult');
  40 |     }
  41 | 
  42 |     async navigate() {
  43 | 
> 44 |         await this.transferFundsLink.click();
     |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  45 | 
  46 |         await this.page.waitForTimeout(2000);
  47 |     }
  48 | 
  49 |     async transferFunds(
  50 |         amount: string
  51 |     ) {
  52 | 
  53 |         await this.amountInput.fill(amount);
  54 | 
  55 |         await this.transferButton.click();
  56 | 
  57 |         await this.page.waitForLoadState('networkidle');
  58 | 
  59 |         await this.page.waitForTimeout(2000);
  60 |     }
  61 | }
```