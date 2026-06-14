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
    - 'row "First Name: Jimmie"':
      - cell "First Name:"
      - cell "Jimmie":
        - textbox: Jimmie
      - cell
    - 'row "Last Name: Steuber"':
      - cell "Last Name:"
      - cell "Steuber":
        - textbox: Steuber
      - cell
    - 'row "Address: 3740 Union Street"':
      - cell "Address:"
      - cell "3740 Union Street":
        - textbox: 3740 Union Street
      - cell
    - 'row "City: Lake Easton"':
      - cell "City:"
      - cell "Lake Easton":
        - textbox: Lake Easton
      - cell
    - 'row "State: South Carolina"':
      - cell "State:"
      - cell "South Carolina":
        - textbox: South Carolina
      - cell
    - 'row "Zip Code: 14909"':
      - cell "Zip Code:"
      - cell "14909":
        - textbox: "14909"
      - cell
    - 'row "Phone #: (293) 760-2758 x52847"':
      - 'cell "Phone #:"'
      - cell "(293) 760-2758 x52847":
        - textbox: (293) 760-2758 x52847
      - cell
    - 'row "SSN: 986841370"':
      - cell "SSN:"
      - cell "986841370":
        - textbox: "986841370"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781373281498 This username already exists."':
      - cell "Username:"
      - cell "user_1781373281498":
        - textbox: user_1781373281498
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
  19 |     const cookies = await page.context().cookies();
  20 | 
  21 |     const apiContext = await getAuthenticatedApiContext(page);
  22 | 
  23 |     const response = await apiContext.get('https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts');
  24 | 
  25 |     expect(response.status()).toBe(200);
  26 | 
  27 |     const accounts = await response.json();
  28 | 
  29 |     const schema = {
  30 | 
  31 |         type: 'object',
  32 | 
  33 |         properties: {
  34 | 
  35 |             id: { type: 'number' },
  36 | 
  37 |             customerId: { type: 'number' },
  38 | 
  39 |             type: { type: 'string' },
  40 | 
  41 |             balance: { type: 'number' }
  42 |         },
  43 | 
  44 |         required: ['id', 'customerId', 'type', 'balance']
  45 |     };
  46 | 
  47 |     const ajv = new Ajv();
  48 | 
  49 |     const validate = ajv.compile(schema);
  50 | 
  51 |     for (const account of accounts) {
  52 | 
  53 |         expect(validate(account)).toBeTruthy();
  54 |     }
  55 | }
  56 | );
```