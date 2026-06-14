# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\multiAccountFinancialValidation.spec.ts >> Validate Multi Account Financial Integrity
- Location: tests\E2E\multiAccountFinancialValidation.spec.ts:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Open New Account' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('link', { name: 'Open New Account' })

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
    - 'row "First Name: Amelia"':
      - cell "First Name:"
      - cell "Amelia":
        - textbox: Amelia
      - cell
    - 'row "Last Name: Schaden"':
      - cell "Last Name:"
      - cell "Schaden":
        - textbox: Schaden
      - cell
    - 'row "Address: 8506 Franey Falls"':
      - cell "Address:"
      - cell "8506 Franey Falls":
        - textbox: 8506 Franey Falls
      - cell
    - 'row "City: Guillermoworth"':
      - cell "City:"
      - cell "Guillermoworth":
        - textbox: Guillermoworth
      - cell
    - 'row "State: Wyoming"':
      - cell "State:"
      - cell "Wyoming":
        - textbox: Wyoming
      - cell
    - 'row "Zip Code: 81004"':
      - cell "Zip Code:"
      - cell "81004":
        - textbox: "81004"
      - cell
    - 'row "Phone #: 1-640-604-4397 x54376"':
      - 'cell "Phone #:"'
      - cell "1-640-604-4397 x54376":
        - textbox: 1-640-604-4397 x54376
      - cell
    - 'row "SSN: 669877053"':
      - cell "SSN:"
      - cell "669877053":
        - textbox: "669877053"
      - cell
    - row:
      - cell
    - 'row "Username: user_1781378259443 This username already exists."':
      - cell "Username:"
      - cell "user_1781378259443":
        - textbox: user_1781378259443
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
  3  | import { env } from '../../config/env';
  4  | 
  5  | import { getAuthenticatedApiContext } from '../../utils/apiHelper';
  6  | 
  7  | import { getAccountBalance } from '../../utils/accountApi';
  8  | 
  9  | test('Validate Multi Account Financial Integrity', async ({ page, registerPage, openAccountPage, accountOverviewPage, transferFundsPage, user }) => {
  10 | 
  11 |     await page.goto(env.baseUrl);
  12 | 
  13 |     await registerPage.navigateToRegister();
  14 | 
  15 |     await registerPage.registerUser(user);
  16 | 
> 17 |     await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible({ timeout: 15000 });
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |     await openAccountPage.navigate();
  20 | 
  21 |     await openAccountPage.createSavingsAccount();
  22 | 
  23 |     const savings1 = await openAccountPage.getCreatedAccountId();
  24 | 
  25 |     await openAccountPage.navigate();
  26 | 
  27 |     await openAccountPage.createSavingsAccount();
  28 | 
  29 |     const savings2 = await openAccountPage.getCreatedAccountId();
  30 | 
  31 |     console.log('Savings 1:', savings1);
  32 | 
  33 |     console.log('Savings 2:', savings2);
  34 | 
  35 |     const apiContext = await getAuthenticatedApiContext(page);
  36 | 
  37 |     const balance1Before = await getAccountBalance(apiContext, savings1!);
  38 | 
  39 |     const balance2Before = await getAccountBalance(apiContext, savings2!);
  40 | 
  41 |     const totalBefore = balance1Before + balance2Before;
  42 | 
  43 |     await transferFundsPage.navigate();
  44 | 
  45 |     await transferFundsPage.transferFunds('50', 1, 2);
  46 | 
  47 |     const balance1After = await getAccountBalance(apiContext, savings1!);
  48 | 
  49 |     const balance2After = await getAccountBalance(apiContext, savings2!);
  50 | 
  51 |     const totalAfter = balance1After + balance2After;
  52 | 
  53 |     expect(balance1After).toBe(balance1Before - 50);
  54 | 
  55 |     expect(balance2After).toBe(balance2Before + 50);
  56 | 
  57 |     expect(totalAfter).toBe(totalBefore);
  58 | }
  59 | );
```