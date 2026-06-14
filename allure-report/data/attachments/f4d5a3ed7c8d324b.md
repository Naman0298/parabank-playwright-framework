# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\accountCreationJourney.spec.ts >> Validate Account Creation Journey
- Location: tests\E2E\accountCreationJourney.spec.ts:7:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Accounts Overview' }) to be visible

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
        - code [ref=e17]: a0b748a7ed226d9f
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
  3  | export class AccountOverviewPage {
  4  |     readonly page: Page;
  5  | 
  6  |     readonly accountOverviewLink: Locator;
  7  |     readonly accountTable: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 | 
  12 |         this.accountOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
  13 | 
  14 |         this.accountTable = page.locator('#accountTable');
  15 |     }
  16 | 
  17 |     async getAccountIds() {
  18 | 
  19 |         const accountLinks = this.page.locator('#accountTable tbody tr a');
  20 | 
  21 |         await accountLinks.first().waitFor({ state: 'visible', timeout: 15000 });
  22 | 
  23 |         return await accountLinks.allTextContents();
  24 |     }
  25 | 
  26 |     async navigate() {
> 27 |         await this.accountOverviewLink.waitFor({ state: 'visible', timeout: 15000 });
     |                                        ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  28 | 
  29 |         await this.accountOverviewLink.click();
  30 | 
  31 |         await this.accountTable.waitFor({ state: 'visible' });
  32 | 
  33 |         await this.page.locator('#accountTable tbody tr a').first().waitFor({ state: 'visible', timeout: 15000 });
  34 | 
  35 |     }
  36 | 
  37 |     async getFirstAccountId() {
  38 | 
  39 |         const accountId = await this.page.locator('#accountTable tbody tr').first().locator('a').textContent();
  40 | 
  41 |         return accountId?.trim();
  42 |     }
  43 | 
  44 |     async accountExists(accountId: string) {
  45 | 
  46 |         const locator = this.page.getByRole('link', { name: accountId });
  47 | 
  48 |         await locator.waitFor({ state: 'visible', timeout: 15000 });
  49 | 
  50 |         return await locator.isVisible();
  51 |     }
  52 | }
```