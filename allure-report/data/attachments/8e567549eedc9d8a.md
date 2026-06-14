# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\transferFundsBalanceE2E.spec.ts >> Transfer Funds And Validate Balance
- Location: tests\E2E\transferFundsBalanceE2E.spec.ts:9:5

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
    - 'row "Last Name: Runolfsson"':
      - cell "Last Name:"
      - cell "Runolfsson":
        - textbox: Runolfsson
      - cell
    - 'row "Address: 24060 Grady Estates"':
      - cell "Address:"
      - cell "24060 Grady Estates":
        - textbox: 24060 Grady Estates
      - cell
    - 'row "City: Port Rick"':
      - cell "City:"
      - cell "Port Rick":
        - textbox: Port Rick
      - cell
    - 'row "State: Ohio"':
      - cell "State:"
      - cell "Ohio":
        - textbox: Ohio
      - cell
    - 'row "Zip Code: 05374"':
      - cell "Zip Code:"
      - cell "05374":
        - textbox: "05374"
      - cell
    - 'row "Phone #: (735) 424-6579 x92939"':
      - 'cell "Phone #:"'
      - cell "(735) 424-6579 x92939":
        - textbox: (735) 424-6579 x92939
      - cell
    - 'row "SSN: 693156245"':
      - cell "SSN:"
      - cell "693156245":
        - textbox: "693156245"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781377450183 This username already exists."':
      - cell "Username:"
      - cell "user_1781377450183":
        - textbox: user_1781377450183
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