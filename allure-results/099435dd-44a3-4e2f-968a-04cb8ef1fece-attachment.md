# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountSchemaValidation.spec.ts >> Validate Customer Accounts Schema
- Location: tests\API\accountSchemaValidation.spec.ts:11:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log Out' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
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
    - 'row "First Name: Genevieve"':
      - cell "First Name:"
      - cell "Genevieve":
        - textbox: Genevieve
      - cell
    - 'row "Last Name: Morar"':
      - cell "Last Name:"
      - cell "Morar":
        - textbox: Morar
      - cell
    - 'row "Address: 263 Dickinson Estate"':
      - cell "Address:"
      - cell "263 Dickinson Estate":
        - textbox: 263 Dickinson Estate
      - cell
    - 'row "City: Rudyview"':
      - cell "City:"
      - cell "Rudyview":
        - textbox: Rudyview
      - cell
    - 'row "State: North Dakota"':
      - cell "State:"
      - cell "North Dakota":
        - textbox: North Dakota
      - cell
    - 'row "Zip Code: 44356-7632"':
      - cell "Zip Code:"
      - cell "44356-7632":
        - textbox: 44356-7632
      - cell
    - 'row "Phone #: 1-825-578-7445 x82810"':
      - 'cell "Phone #:"'
      - cell "1-825-578-7445 x82810":
        - textbox: 1-825-578-7445 x82810
      - cell
    - 'row "SSN: 616196310"':
      - cell "SSN:"
      - cell "616196310":
        - textbox: "616196310"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781426946733 This username already exists."':
      - cell "Username:"
      - cell "user_1781426946733":
        - textbox: user_1781426946733
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
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export async function ensureAuthenticated(page: Page) {
  4  | 
  5  |     const logoutLink = page.getByRole('link', { name: 'Log Out' });
  6  | 
  7  |     const registerSuccess = page.locator('text=Your account was created successfully');
  8  | 
  9  |     if (await registerSuccess.isVisible().catch(() => false)) {
  10 | 
  11 |         await page.goto('https://parabank.parasoft.com/parabank/overview.htm');
  12 |     }
  13 | 
> 14 |     await expect(logoutLink).toBeVisible({ timeout: 15000 });
     |                              ^ Error: expect(locator).toBeVisible() failed
  15 | }
```