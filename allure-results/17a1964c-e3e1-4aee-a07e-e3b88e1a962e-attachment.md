# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\customerAccountContract.spec.ts >> Validate Customer Accounts Contract
- Location: tests\API\customerAccountContract.spec.ts:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Log Out')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('text=Log Out')

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
    - 'row "First Name: Marley"':
      - cell "First Name:"
      - cell "Marley":
        - textbox: Marley
      - cell
    - 'row "Last Name: Goldner"':
      - cell "Last Name:"
      - cell "Goldner":
        - textbox: Goldner
      - cell
    - 'row "Address: 5256 Cummings Burg"':
      - cell "Address:"
      - cell "5256 Cummings Burg":
        - textbox: 5256 Cummings Burg
      - cell
    - 'row "City: Tashaport"':
      - cell "City:"
      - cell "Tashaport":
        - textbox: Tashaport
      - cell
    - 'row "State: Alabama"':
      - cell "State:"
      - cell "Alabama":
        - textbox: Alabama
      - cell
    - 'row "Zip Code: 45940"':
      - cell "Zip Code:"
      - cell "45940":
        - textbox: "45940"
      - cell
    - 'row "Phone #: (553) 604-1482 x29688"':
      - 'cell "Phone #:"'
      - cell "(553) 604-1482 x29688":
        - textbox: (553) 604-1482 x29688
      - cell
    - 'row "SSN: 895897593"':
      - cell "SSN:"
      - cell "895897593":
        - textbox: "895897593"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781372854160 This username already exists."':
      - cell "Username:"
      - cell "user_1781372854160":
        - textbox: user_1781372854160
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
  1  | import { test, expect } from '../../fixtures/userFixture';
  2  | 
  3  | import Ajv from 'ajv';
  4  | 
  5  | import { env } from '../../config/env';
  6  | 
  7  | import { getAuthenticatedApiContext } from '../../utils/apiHelper';
  8  | 
  9  | test('Validate Customer Accounts Contract', async ({ page, registerPage, user }) => {
  10 | 
  11 |     await page.goto(env.baseUrl);
  12 | 
  13 |     await registerPage.navigateToRegister();
  14 | 
  15 |     await registerPage.registerUser(user);
  16 | 
> 17 |     await expect(page.locator('text=Log Out')).toBeVisible({ timeout: 15000 });
     |                                                ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |     const apiContext = await getAuthenticatedApiContext(page);
  20 | 
  21 |     const response = await apiContext.get('https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts');
  22 | 
  23 |     expect(response.status()).toBe(200);
  24 | 
  25 |     const accounts = await response.json();
  26 | 
  27 |     const schema = {
  28 | 
  29 |         type: 'object',
  30 | 
  31 |         properties: {
  32 | 
  33 |             id: { type: 'number' },
  34 | 
  35 |             customerId: { type: 'number' },
  36 | 
  37 |             type: { type: 'string' },
  38 | 
  39 |             balance: { type: 'number' }
  40 |         },
  41 | 
  42 |         required: ['id', 'customerId', 'type', 'balance']
  43 |     };
  44 | 
  45 |     const ajv = new Ajv();
  46 | 
  47 |     const validate = ajv.compile(schema);
  48 | 
  49 |     for (const account of accounts) {
  50 | 
  51 |         expect(validate(account)).toBeTruthy();
  52 |     }
  53 | }
  54 | );
```