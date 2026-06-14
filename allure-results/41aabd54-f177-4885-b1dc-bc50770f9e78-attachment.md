# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hybrid\accountValidation.spec.ts >> Validate Created Account Through API
- Location: tests\Hybrid\accountValidation.spec.ts:7:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#repeatedPassword')
    - locator resolved to <input value="" class="input" type="password" id="repeatedPassword" name="repeatedPassword"/>
    - fill("Test@12345")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

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
            - textbox [ref=e34]
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
            - 'row "First Name: Tracey" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Tracey" [ref=e52]:
                - textbox [ref=e53]: Tracey
              - cell [ref=e54]
            - 'row "Last Name: Bruen" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Bruen" [ref=e57]:
                - textbox [active] [ref=e58]: Bruen
              - cell [ref=e59]
            - row "Address:" [ref=e60]:
              - cell "Address:" [ref=e61]
              - cell [ref=e62]:
                - textbox [ref=e63]
              - cell [ref=e64]
            - row "City:" [ref=e65]:
              - cell "City:" [ref=e66]
              - cell [ref=e67]:
                - textbox [ref=e68]
              - cell [ref=e69]
            - row "State:" [ref=e70]:
              - cell "State:" [ref=e71]
              - cell [ref=e72]:
                - textbox [ref=e73]
              - cell [ref=e74]
            - row "Zip Code:" [ref=e75]:
              - cell "Zip Code:" [ref=e76]
              - cell [ref=e77]:
                - textbox [ref=e78]
              - cell [ref=e79]
            - 'row "Phone #:" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell [ref=e82]:
                - textbox [ref=e83]
              - cell [ref=e84]
            - row "SSN:" [ref=e85]:
              - cell "SSN:" [ref=e86]
              - cell [ref=e87]:
                - textbox [ref=e88]
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - row "Username:" [ref=e92]:
              - cell "Username:" [ref=e93]
              - cell [ref=e94]:
                - textbox [ref=e95]
              - cell [ref=e96]
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
  2  | import { env } from '../config/env';
  3  | 
  4  | export class RegisterPage {
  5  | 
  6  |     readonly page: Page;
  7  |     readonly registerLink: Locator;
  8  |     readonly firstName: Locator;
  9  |     readonly lastName: Locator;
  10 |     readonly address: Locator;
  11 |     readonly city: Locator;
  12 |     readonly state: Locator;
  13 |     readonly zipCode: Locator;
  14 |     readonly phone: Locator;
  15 |     readonly ssn: Locator;
  16 |     readonly username: Locator;
  17 |     readonly password: Locator;
  18 |     readonly confirmPassword: Locator;
  19 |     readonly registerButton: Locator;
  20 | 
  21 |     constructor(page: Page) {
  22 | 
  23 |         this.page = page;
  24 |         this.registerLink = page.getByRole('link', { name: 'Register' });
  25 |         this.firstName = page.locator('#customer\\.firstName');
  26 |         this.lastName = page.locator('#customer\\.lastName');
  27 |         this.address = page.locator('#customer\\.address\\.street');
  28 |         this.city = page.locator('#customer\\.address\\.city');
  29 |         this.state = page.locator('#customer\\.address\\.state');
  30 |         this.zipCode = page.locator('#customer\\.address\\.zipCode');
  31 |         this.phone = page.locator('#customer\\.phoneNumber');
  32 |         this.ssn = page.locator('#customer\\.ssn');
  33 |         this.username = page.locator('#customer\\.username');
  34 |         this.password = page.locator('#customer\\.password');
  35 |         this.confirmPassword = page.locator('#repeatedPassword');
  36 |         this.registerButton = page.locator('input[value="Register"]');
  37 |     }
  38 | 
  39 |     async navigateToRegister() {
  40 | 
  41 |         await this.registerLink.click();
  42 |         await this.firstName.waitFor({ state: 'visible', timeout: 15000 });
  43 |     }
  44 | 
  45 |     async registerUser(user: {
  46 |         firstName: string;
  47 |         lastName: string;
  48 |         address: string;
  49 |         city: string;
  50 |         state: string;
  51 |         zipCode: string;
  52 |         phone: string;
  53 |         ssn: string;
  54 |         username: string;
  55 |         password: string;
  56 |     }) {
  57 |         await this.firstName.fill(user.firstName);
  58 |         await this.lastName.fill(user.lastName);
  59 |         await this.address.fill(user.address);
  60 |         await this.city.fill(user.city);
  61 |         await this.state.fill(user.state);
  62 |         await this.zipCode.fill(user.zipCode);
  63 |         await this.phone.fill(user.phone);
  64 |         await this.ssn.fill(user.ssn);
  65 |         await this.username.fill(user.username);
  66 |         await this.password.fill(user.password);
> 67 |         await this.confirmPassword.fill(user.password);
     |                                    ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  68 |         await this.registerButton.click();
  69 |         await this.page.waitForLoadState('domcontentloaded');
  70 |     }
  71 | }
  72 | 
```