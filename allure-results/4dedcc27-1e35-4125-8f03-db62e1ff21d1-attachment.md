# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\register.spec.ts >> Register New User
- Location: tests\UI\register.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log Out' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('link', { name: 'Log Out' })

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
    - 'row "First Name: Archie"':
      - cell "First Name:"
      - cell "Archie":
        - textbox: Archie
      - cell
    - 'row "Last Name: Lockman"':
      - cell "Last Name:"
      - cell "Lockman":
        - textbox: Lockman
      - cell
    - 'row "Address: 75571 Gibson Shores"':
      - cell "Address:"
      - cell "75571 Gibson Shores":
        - textbox: 75571 Gibson Shores
      - cell
    - 'row "City: La Mirada"':
      - cell "City:"
      - cell "La Mirada":
        - textbox: La Mirada
      - cell
    - 'row "State: Missouri"':
      - cell "State:"
      - cell "Missouri":
        - textbox: Missouri
      - cell
    - 'row "Zip Code: 20475-1849"':
      - cell "Zip Code:"
      - cell "20475-1849":
        - textbox: 20475-1849
      - cell
    - 'row "Phone #: (581) 381-4951 x84617"':
      - 'cell "Phone #:"'
      - cell "(581) 381-4951 x84617":
        - textbox: (581) 381-4951 x84617
      - cell
    - 'row "SSN: 236148229"':
      - cell "SSN:"
      - cell "236148229":
        - textbox: "236148229"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781366342891 This username already exists."':
      - cell "Username:"
      - cell "user_1781366342891":
        - textbox: user_1781366342891
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
  2  | import { env } from '../../config/env';
  3  | 
  4  | test('Register New User', async ({ registerPage, page, user }) => {
  5  | 
  6  |     await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  7  | 
  8  |     await registerPage.navigateToRegister();
  9  | 
  10 |     await registerPage.registerUser(user);
  11 | 
  12 |     await page.waitForLoadState('networkidle');
  13 | 
> 14 |     await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  15 | 
  16 |     console.log('Created User:', user.username);
  17 | });
```