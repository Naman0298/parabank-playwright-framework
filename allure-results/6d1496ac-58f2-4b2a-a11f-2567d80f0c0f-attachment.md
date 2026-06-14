# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hybrid\billPayValidation.spec.ts >> Validate Bill Payment
- Location: tests\Hybrid\billPayValidation.spec.ts:5:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Bill Pay' })

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
        - code [ref=e17]: a0b77d3d1d05d2f7
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
  3  | export class BillPayPage {
  4  | 
  5  |     readonly page: Page;
  6  | 
  7  |     readonly billPayLink: Locator;
  8  | 
  9  |     readonly payeeName: Locator;
  10 |     readonly address: Locator;
  11 |     readonly city: Locator;
  12 |     readonly state: Locator;
  13 |     readonly zipCode: Locator;
  14 |     readonly phone: Locator;
  15 | 
  16 |     readonly accountNumber: Locator;
  17 |     readonly verifyAccount: Locator;
  18 | 
  19 |     readonly amount: Locator;
  20 | 
  21 |     readonly sendPaymentButton: Locator;
  22 | 
  23 |     readonly successMessage: Locator;
  24 | 
  25 |     constructor(page: Page) {
  26 | 
  27 |         this.page = page;
  28 | 
  29 |         this.billPayLink = page.getByRole('link', { name: 'Bill Pay' });
  30 | 
  31 |         this.payeeName = page.locator('input[name="payee.name"]');
  32 | 
  33 |         this.address = page.locator('input[name="payee.address.street"]');
  34 | 
  35 |         this.city = page.locator('input[name="payee.address.city"]');
  36 | 
  37 |         this.state = page.locator('input[name="payee.address.state"]');
  38 | 
  39 |         this.zipCode = page.locator('input[name="payee.address.zipCode"]');
  40 | 
  41 |         this.phone = page.locator('input[name="payee.phoneNumber"]');
  42 | 
  43 |         this.accountNumber = page.locator('input[name="payee.accountNumber"]');
  44 | 
  45 |         this.verifyAccount = page.locator('input[name="verifyAccount"]');
  46 | 
  47 |         this.amount = page.locator('input[name="amount"]');
  48 | 
  49 |         this.sendPaymentButton = page.locator('input[value="Send Payment"]');
  50 | 
  51 |         this.successMessage = page.locator('#billpayResult');
  52 |     }
  53 | 
  54 |     async navigate() {
> 55 |         await this.billPayLink.click();
     |                                ^ Error: locator.click: Test timeout of 60000ms exceeded.
  56 |     }
  57 | 
  58 |     async payBill() {
  59 | 
  60 |         await this.payeeName.fill('Test Payee');
  61 | 
  62 |         await this.address.fill('Street 1');
  63 | 
  64 |         await this.city.fill('Lucknow');
  65 | 
  66 |         await this.state.fill('UP');
  67 | 
  68 |         await this.zipCode.fill('226001');
  69 | 
  70 |         await this.phone.fill('9999999999');
  71 | 
  72 |         await this.accountNumber.fill('123456');
  73 | 
  74 |         await this.verifyAccount.fill('123456');
  75 | 
  76 |         await this.amount.fill('50');
  77 | 
  78 |         await this.sendPaymentButton.click();
  79 | 
  80 |         await this.successMessage.waitFor({ state: 'visible' });
  81 |     }
  82 | }
```