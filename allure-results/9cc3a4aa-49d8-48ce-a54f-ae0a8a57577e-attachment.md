# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountSchemaValidation.spec.ts >> Validate Customer Accounts Schema
- Location: tests\API\accountSchemaValidation.spec.ts:11:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: Registration failed - user not authenticated after registration
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
        - code [ref=e17]: a0b888b78e63794a
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
  3  | export class RegisterPage {
  4  |     readonly page: Page;
  5  | 
  6  |     readonly registerLink: Locator;
  7  |     readonly firstName: Locator;
  8  |     readonly lastName: Locator;
  9  |     readonly address: Locator;
  10 |     readonly city: Locator;
  11 |     readonly state: Locator;
  12 |     readonly zipCode: Locator;
  13 |     readonly phone: Locator;
  14 |     readonly ssn: Locator;
  15 |     readonly username: Locator;
  16 |     readonly password: Locator;
  17 |     readonly confirmPassword: Locator;
  18 |     readonly registerButton: Locator;
  19 | 
  20 |     constructor(page: Page) {
  21 |         this.page = page;
  22 | 
  23 |         this.registerLink = page.locator('text=Register');
  24 | 
  25 |         this.firstName = page.locator('#customer\\.firstName');
  26 |         this.lastName = page.locator('#customer\\.lastName');
  27 |         this.address = page.locator('#customer\\.address\\.street');
  28 |         this.city = page.locator('#customer\\.address\\.city');
  29 |         this.state = page.locator('#customer\\.address\\.state');
  30 |         this.zipCode = page.locator('#customer\\.address\\.zipCode');
  31 |         this.phone = page.locator('#customer\\.phoneNumber');
  32 |         this.ssn = page.locator('#customer\\.ssn');
  33 | 
  34 |         this.username = page.locator('#customer\\.username');
  35 |         this.password = page.locator('#customer\\.password');
  36 |         this.confirmPassword = page.locator('#repeatedPassword');
  37 | 
  38 |         this.registerButton = page.locator('input[value="Register"]');
  39 |     }
  40 | 
  41 |     async navigateToRegister() {
  42 |         await this.registerLink.click();
  43 |     }
  44 | 
  45 |     async registerUser(user: any) {
  46 |         await this.firstName.fill(user.firstName);
  47 |         await this.lastName.fill(user.lastName);
  48 |         await this.address.fill(user.address);
  49 |         await this.city.fill(user.city);
  50 |         await this.state.fill(user.state);
  51 |         await this.zipCode.fill(user.zipCode);
  52 |         await this.phone.fill(user.phone);
  53 |         await this.ssn.fill(user.ssn);
  54 | 
  55 |         await this.username.fill(user.username);
  56 |         await this.password.fill(user.password);
  57 |         await this.confirmPassword.fill(user.password);
  58 | 
  59 |         await this.registerButton.click();
  60 | 
  61 |         for (let attempt = 0; attempt < 3; attempt++) {
  62 |             const isAuthenticated = await this.page
  63 |                 .getByRole('link', { name: 'Log Out' })
  64 |                 .waitFor({ state: 'visible', timeout: 20000 })
  65 |                 .then(() => true)
  66 |                 .catch(() => false);
  67 | 
  68 |             if (isAuthenticated) {
  69 |                 return;
  70 |             }
  71 | 
  72 |             const hasError = await this.page.locator('text=An internal error').isVisible().catch(() => false);
  73 |             if (hasError && attempt < 2) {
  74 |                 await this.registerButton.click();
  75 |                 continue;
  76 |             }
  77 |         }
  78 | 
> 79 |         throw new Error('Registration failed - user not authenticated after registration');
     |               ^ Error: Registration failed - user not authenticated after registration
  80 |     }
  81 | }
```