# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\unauthorizedAccountAccess.spec.ts >> Unauthorized User Cannot Access Account API
- Location: tests\API\unauthorizedAccountAccess.spec.ts:3:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#accountTable tbody tr').first().locator('a')

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
  27 |         await this.accountOverviewLink.waitFor({ state: 'visible', timeout: 15000 });
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
> 39 |         const accountId = await this.page.locator('#accountTable tbody tr').first().locator('a').textContent();
     |                                                                                                  ^ Error: locator.textContent: Test timeout of 60000ms exceeded.
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