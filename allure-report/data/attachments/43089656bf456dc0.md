# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\multiAccountFinancialValidation.spec.ts >> Validate Multi Account Financial Integrity
- Location: tests\E2E\multiAccountFinancialValidation.spec.ts:16:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Open New Account')
Expected: visible
Error: strict mode violation: locator('text=Open New Account') resolved to 3 elements:
    1) <a href="openaccount.htm">Open New Account</a> aka getByRole('link', { name: 'Open New Account' })
    2) <h1 class="title">Open New Account</h1> aka locator('h1').filter({ hasText: 'Open New Account' })
    3) <input type="button" class="button" value="Open New Account"/> aka locator('input[type="button"]')

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('text=Open New Account')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome Madilyn Nikolaus
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Account Opened!" [level=1] [ref=e51]
        - paragraph [ref=e52]: Congratulations, your account is now open.
        - paragraph [ref=e53]:
          - text: "Your new account number:"
          - link "16341" [ref=e54] [cursor=pointer]:
            - /url: activity.htm?id=16341
  - generic [ref=e56]:
    - list [ref=e57]:
      - listitem [ref=e58]:
        - link "Home" [ref=e59] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "About Us" [ref=e61] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e62]:
        - link "Services" [ref=e63] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "Products" [ref=e65] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e66]:
        - link "Locations" [ref=e67] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e68]:
        - link "Forum" [ref=e69] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e70]:
        - link "Site Map" [ref=e71] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e72]:
        - link "Contact Us" [ref=e73] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e74]: © Parasoft. All rights reserved.
    - list [ref=e75]:
      - listitem [ref=e76]: "Visit us at:"
      - listitem [ref=e77]:
        - link "www.parasoft.com" [ref=e78] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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