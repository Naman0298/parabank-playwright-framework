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
Error: page.goto: Target page, context or browser has been closed
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
            - 'row "First Name: Kate" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Kate" [ref=e52]:
                - textbox [ref=e53]: Kate
              - cell [ref=e54]
            - 'row "Last Name: Stroman" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Stroman" [ref=e57]:
                - textbox [ref=e58]: Stroman
              - cell [ref=e59]
            - 'row "Address: 7199 O''Conner Crescent" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "7199 O'Conner Crescent" [ref=e62]:
                - textbox [ref=e63]: 7199 O'Conner Crescent
              - cell [ref=e64]
            - 'row "City: Macejkovicfort" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "Macejkovicfort" [ref=e67]:
                - textbox [ref=e68]: Macejkovicfort
              - cell [ref=e69]
            - 'row "State: Arkansas" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "Arkansas" [ref=e72]:
                - textbox [ref=e73]: Arkansas
              - cell [ref=e74]
            - 'row "Zip Code: 57770" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "57770" [ref=e77]:
                - textbox [ref=e78]: "57770"
              - cell [ref=e79]
            - 'row "Phone #: 1-833-241-5729 x53157" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "1-833-241-5729 x53157" [ref=e82]:
                - textbox [ref=e83]: 1-833-241-5729 x53157
              - cell [ref=e84]
            - 'row "SSN: 471640785" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "471640785" [ref=e87]:
                - textbox [ref=e88]: "471640785"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: user_1781432456824 This username already exists." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "user_1781432456824" [ref=e94]:
                - textbox [ref=e95]: user_1781432456824
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
  1   | import { Page, Locator } from '@playwright/test';
  2   | import { env } from '../config/env';
  3   | 
  4   | export class RegisterPage {
  5   |     readonly page: Page;
  6   | 
  7   |     readonly registerLink: Locator;
  8   |     readonly firstName: Locator;
  9   |     readonly lastName: Locator;
  10  |     readonly address: Locator;
  11  |     readonly city: Locator;
  12  |     readonly state: Locator;
  13  |     readonly zipCode: Locator;
  14  |     readonly phone: Locator;
  15  |     readonly ssn: Locator;
  16  |     readonly username: Locator;
  17  |     readonly password: Locator;
  18  |     readonly confirmPassword: Locator;
  19  |     readonly registerButton: Locator;
  20  | 
  21  |     constructor(page: Page) {
  22  |         this.page = page;
  23  | 
  24  |         this.registerLink = page.getByRole('link', { name: 'Register' });
  25  | 
  26  |         this.firstName = page.locator('#customer\\.firstName');
  27  |         this.lastName = page.locator('#customer\\.lastName');
  28  |         this.address = page.locator('#customer\\.address\\.street');
  29  |         this.city = page.locator('#customer\\.address\\.city');
  30  |         this.state = page.locator('#customer\\.address\\.state');
  31  |         this.zipCode = page.locator('#customer\\.address\\.zipCode');
  32  |         this.phone = page.locator('#customer\\.phoneNumber');
  33  |         this.ssn = page.locator('#customer\\.ssn');
  34  | 
  35  |         this.username = page.locator('#customer\\.username');
  36  |         this.password = page.locator('#customer\\.password');
  37  |         this.confirmPassword = page.locator('#repeatedPassword');
  38  | 
  39  |         this.registerButton = page.locator('input[value="Register"]');
  40  |     }
  41  | 
  42  |     async navigateToRegister() {
  43  |         await this.registerLink.click();
  44  |         await this.firstName.waitFor({ state: 'visible', timeout: 15000 });
  45  |     }
  46  | 
  47  |     private async fillRegistrationForm(user: {
  48  |         firstName: string;
  49  |         lastName: string;
  50  |         address: string;
  51  |         city: string;
  52  |         state: string;
  53  |         zipCode: string;
  54  |         phone: string;
  55  |         ssn: string;
  56  |         username: string;
  57  |         password: string;
  58  |     }) {
  59  |         await this.firstName.fill(user.firstName);
  60  |         await this.lastName.fill(user.lastName);
  61  |         await this.address.fill(user.address);
  62  |         await this.city.fill(user.city);
  63  |         await this.state.fill(user.state);
  64  |         await this.zipCode.fill(user.zipCode);
  65  |         await this.phone.fill(user.phone);
  66  |         await this.ssn.fill(user.ssn);
  67  |         await this.username.fill(user.username);
  68  |         await this.password.fill(user.password);
  69  |         await this.confirmPassword.fill(user.password);
  70  |     }
  71  | 
  72  |     private async isAuthenticated() {
  73  |         return this.page.getByRole('link', { name: 'Log Out' }).isVisible().catch(() => false);
  74  |     }
  75  | 
  76  |     private async attemptLogin(user: { username: string; password: string }) {
> 77  |         await this.page.goto(`${env.baseUrl}/index.htm`, { waitUntil: 'domcontentloaded' });
      |                         ^ Error: page.goto: Target page, context or browser has been closed
  78  |         await this.page.locator('input[name="username"]').fill(user.username);
  79  |         await this.page.locator('input[name="password"]').fill(user.password);
  80  |         await this.page.locator('input[value="Log In"]').click();
  81  |         await this.page.waitForLoadState('domcontentloaded');
  82  |     }
  83  | 
  84  |     async registerUser(user: {
  85  |         firstName: string;
  86  |         lastName: string;
  87  |         address: string;
  88  |         city: string;
  89  |         state: string;
  90  |         zipCode: string;
  91  |         phone: string;
  92  |         ssn: string;
  93  |         username: string;
  94  |         password: string;
  95  |     }) {
  96  |         for (let attempt = 0; attempt < 3; attempt++) {
  97  |             if (attempt > 0) {
  98  |                 await this.page.goto(`${env.baseUrl}/register.htm`, { waitUntil: 'domcontentloaded' });
  99  |             }
  100 | 
  101 |             await this.fillRegistrationForm(user);
  102 |             await this.registerButton.click();
  103 | 
  104 |             const loggedInAfterRegister = await this.page
  105 |                 .getByRole('link', { name: 'Log Out' })
  106 |                 .waitFor({ state: 'visible', timeout: 20000 })
  107 |                 .then(() => true)
  108 |                 .catch(() => false);
  109 | 
  110 |             if (loggedInAfterRegister) {
  111 |                 return;
  112 |             }
  113 | 
  114 |             await this.attemptLogin(user);
  115 | 
  116 |             if (await this.isAuthenticated()) {
  117 |                 return;
  118 |             }
  119 |         }
  120 | 
  121 |         throw new Error('Registration failed - user not authenticated after registration');
  122 |     }
  123 | }
  124 | 
```