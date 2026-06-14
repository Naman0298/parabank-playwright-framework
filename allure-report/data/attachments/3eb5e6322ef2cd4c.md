# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\login.spec.ts >> Register And Login User
- Location: tests\UI\login.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log Out' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
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
    - 'row "First Name: Mack"':
      - cell "First Name:"
      - cell "Mack":
        - textbox: Mack
      - cell
    - 'row "Last Name: Kerluke"':
      - cell "Last Name:"
      - cell "Kerluke":
        - textbox: Kerluke
      - cell
    - 'row "Address: 50753 Lois Garden"':
      - cell "Address:"
      - cell "50753 Lois Garden":
        - textbox: 50753 Lois Garden
      - cell
    - 'row "City: Carmenton"':
      - cell "City:"
      - cell "Carmenton":
        - textbox: Carmenton
      - cell
    - 'row "State: Virginia"':
      - cell "State:"
      - cell "Virginia":
        - textbox: Virginia
      - cell
    - 'row "Zip Code: 62186-3815"':
      - cell "Zip Code:"
      - cell "62186-3815":
        - textbox: 62186-3815
      - cell
    - 'row "Phone #: 1-751-869-8636 x12566"':
      - 'cell "Phone #:"'
      - cell "1-751-869-8636 x12566":
        - textbox: 1-751-869-8636 x12566
      - cell
    - 'row "SSN: 267302613"':
      - cell "SSN:"
      - cell "267302613":
        - textbox: "267302613"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781358741666 This username already exists."':
      - cell "Username:"
      - cell "user_1781358741666":
        - textbox: user_1781358741666
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
  1  | import { test, expect } from '../../fixtures/testFixtures';
  2  | import { generateUser } from '../../utils/dataGenerator';
  3  | import { env } from '../../config/env';
  4  | 
  5  | test('Register And Login User', async ({ registerPage, loginPage, page }) => {
  6  | 
  7  |     const user = generateUser();
  8  | 
  9  |     await page.goto(env.baseUrl, {
  10 |         waitUntil: 'domcontentloaded'
  11 |     });
  12 | 
  13 |     await registerPage.navigateToRegister();
  14 | 
  15 |     await registerPage.registerUser(user);
  16 | 
  17 |     await page.waitForLoadState('networkidle');
  18 | 
> 19 |     await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  20 | 
  21 |     await page.click('text=Log Out');
  22 | 
  23 |     await loginPage.login(user.username, user.password);
  24 | 
  25 |     console.log('Current URL:', page.url());
  26 | });
```