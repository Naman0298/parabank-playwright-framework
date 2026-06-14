# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\negativeTransfer.spec.ts >> Transfer With Invalid Amount
- Location: tests\UI\negativeTransfer.spec.ts:5:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Transfer Funds' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: Zoey" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Zoey" [ref=e52]:
                - textbox [ref=e53]: Zoey
              - cell [ref=e54]
            - 'row "Last Name: Swaniawski" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Swaniawski" [ref=e57]:
                - textbox [ref=e58]: Swaniawski
              - cell [ref=e59]
            - 'row "Address: 8564 Boyer Manors" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "8564 Boyer Manors" [ref=e62]:
                - textbox [ref=e63]: 8564 Boyer Manors
              - cell [ref=e64]
            - 'row "City: Olivershire" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "Olivershire" [ref=e67]:
                - textbox [ref=e68]: Olivershire
              - cell [ref=e69]
            - 'row "State: South Dakota" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "South Dakota" [ref=e72]:
                - textbox [ref=e73]: South Dakota
              - cell [ref=e74]
            - 'row "Zip Code: 70487" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "70487" [ref=e77]:
                - textbox [ref=e78]: "70487"
              - cell [ref=e79]
            - 'row "Phone #: (669) 857-9455 x65498" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "(669) 857-9455 x65498" [ref=e82]:
                - textbox [ref=e83]: (669) 857-9455 x65498
              - cell [ref=e84]
            - 'row "SSN: 513969231" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "513969231" [ref=e87]:
                - textbox [ref=e88]: "513969231"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: user_1781366310973 This username already exists." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "user_1781366310973" [ref=e94]:
                - textbox [ref=e95]: user_1781366310973
              - cell "This username already exists." [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
  21 |         this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });
  22 | 
  23 |         this.amountInput = page.locator('#amount');
  24 | 
  25 |         this.fromAccountDropdown = page.locator('#fromAccountId');
  26 | 
  27 |         this.toAccountDropdown = page.locator('#toAccountId');
  28 | 
  29 |         this.transferButton = page.locator('input[value="Transfer"]');
  30 | 
  31 |         this.successMessage = page.locator('#showResult');
  32 |     }
  33 | 
  34 |     async navigate() {
  35 | 
> 36 |         await this.transferFundsLink.waitFor({ state: 'visible', timeout: 15000 });
     |                                      ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  37 | 
  38 |         await this.transferFundsLink.click();
  39 | 
  40 |         await this.page.waitForLoadState('networkidle');
  41 |     }
  42 | 
  43 |     async transferFunds(amount: string) {
  44 | 
  45 |         await this.amountInput.fill(amount);
  46 | 
  47 |         await this.transferButton.click();
  48 | 
  49 |         await this.page.waitForLoadState('networkidle');
  50 | 
  51 |         await this.page.waitForTimeout(2000);
  52 |     }
  53 | }
```