# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountSchemaValidation.spec.ts >> Validate Customer Accounts Schema
- Location: tests\API\accountSchemaValidation.spec.ts:9:5

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
    - 'row "First Name: Darren"':
      - cell "First Name:"
      - cell "Darren":
        - textbox: Darren
      - cell
    - 'row "Last Name: Schmidt"':
      - cell "Last Name:"
      - cell "Schmidt":
        - textbox: Schmidt
      - cell
    - 'row "Address: 598 W Main Street"':
      - cell "Address:"
      - cell "598 W Main Street":
        - textbox: 598 W Main Street
      - cell
    - 'row "City: South Jana"':
      - cell "City:"
      - cell "South Jana":
        - textbox: South Jana
      - cell
    - 'row "State: Massachusetts"':
      - cell "State:"
      - cell "Massachusetts":
        - textbox: Massachusetts
      - cell
    - 'row "Zip Code: 20793"':
      - cell "Zip Code:"
      - cell "20793":
        - textbox: "20793"
      - cell
    - 'row "Phone #: 1-397-710-5419 x01397"':
      - 'cell "Phone #:"'
      - cell "1-397-710-5419 x01397":
        - textbox: 1-397-710-5419 x01397
      - cell
    - 'row "SSN: 810201746"':
      - cell "SSN:"
      - cell "810201746":
        - textbox: "810201746"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781373451402 This username already exists."':
      - cell "Username:"
      - cell "user_1781373451402":
        - textbox: user_1781373451402
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
  9  | test('Validate Customer Accounts Schema', async ({ page, registerPage, user }) => {
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
  27 |     expect(accounts.length).toBeGreaterThan(0);
  28 | 
  29 |     const account = accounts[0];
  30 | 
  31 |     const schema = {
  32 | 
  33 |         type: 'object',
  34 | 
  35 |         properties: {
  36 | 
  37 |             id: { type: 'number' },
  38 | 
  39 |             customerId: { type: 'number' },
  40 | 
  41 |             type: { type: 'string' },
  42 | 
  43 |             balance: { type: 'number' }
  44 |         },
  45 | 
  46 |         required: ['id', 'customerId', 'type', 'balance']
  47 |     };
  48 | 
  49 |     const ajv = new Ajv();
  50 | 
  51 |     const validate = ajv.compile(schema);
  52 | 
  53 |     expect(validate(account)).toBeTruthy();
  54 | }
  55 | );
```