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
    - waiting for navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/register.htm"

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Signing up is easy!" [level=1]
- paragraph: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
- table:
  - rowgroup:
    - 'row "First Name: Leta"':
      - cell "First Name:"
      - cell "Leta":
        - textbox: Leta
      - cell
    - 'row "Last Name: Lynch"':
      - cell "Last Name:"
      - cell "Lynch":
        - textbox: Lynch
      - cell
    - 'row "Address: 84636 Bailey Spur"':
      - cell "Address:"
      - cell "84636 Bailey Spur":
        - textbox: 84636 Bailey Spur
      - cell
    - 'row "City: Jacquescester"':
      - cell "City:"
      - cell "Jacquescester":
        - textbox: Jacquescester
      - cell
    - 'row "State: Louisiana"':
      - cell "State:"
      - cell "Louisiana":
        - textbox: Louisiana
      - cell
    - 'row "Zip Code: 09959"':
      - cell "Zip Code:"
      - cell "09959":
        - textbox: "09959"
      - cell
    - 'row "Phone #: 1-823-713-9278 x44304"':
      - 'cell "Phone #:"'
      - cell "1-823-713-9278 x44304":
        - textbox: 1-823-713-9278 x44304
      - cell
    - 'row "SSN: 467913511"':
      - cell "SSN:"
      - cell "467913511":
        - textbox: "467913511"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781364615232 This username already exists."':
      - cell "Username:"
      - cell "user_1781364615232":
        - textbox: user_1781364615232
      - cell "This username already exists."
    - row "Password:":
      - cell "Password:"
      - cell:
        - textbox
      - cell
    - row "Confirm:":
      - cell "Confirm:"
      - cell:
        - textbox
      - cell
    - row "Register":
      - cell
      - cell "Register":
        - button "Register"
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
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