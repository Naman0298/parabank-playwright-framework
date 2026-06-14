# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\logout.spec.ts >> User Can Logout Successfully
- Location: tests\UI\logout.spec.ts:6:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Log Out' })
    - waiting for" https://parabank.parasoft.com/parabank/register.htm" navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/register.htm"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26]:
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
            - link "Forgot login info?" [ref=e41]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: Jaron" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Jaron" [ref=e52]:
                - textbox [ref=e53]: Jaron
              - cell [ref=e54]
            - 'row "Last Name: Baumbach" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Baumbach" [ref=e57]:
                - textbox [ref=e58]: Baumbach
              - cell [ref=e59]
            - 'row "Address: 11588 Weissnat Lane" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "11588 Weissnat Lane" [ref=e62]:
                - textbox [ref=e63]: 11588 Weissnat Lane
              - cell [ref=e64]
            - 'row "City: Lake Jenniestad" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "Lake Jenniestad" [ref=e67]:
                - textbox [ref=e68]: Lake Jenniestad
              - cell [ref=e69]
            - 'row "State: Arizona" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "Arizona" [ref=e72]:
                - textbox [ref=e73]: Arizona
              - cell [ref=e74]
            - 'row "Zip Code: 70725-1720" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "70725-1720" [ref=e77]:
                - textbox [ref=e78]: 70725-1720
              - cell [ref=e79]
            - 'row "Phone #: (391) 808-8494 x62756" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "(391) 808-8494 x62756" [ref=e82]:
                - textbox [ref=e83]: (391) 808-8494 x62756
              - cell [ref=e84]
            - 'row "SSN: 224447002" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "224447002" [ref=e87]:
                - textbox [ref=e88]: "224447002"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: user_1781364497757 This username already exists." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "user_1781364497757" [ref=e94]:
                - textbox [ref=e95]: user_1781364497757
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
        - link "Home" [ref=e115]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/testFixtures';
  2  | 
  3  | import { generateUser } from '../../utils/dataGenerator';
  4  | import { env } from '../../config/env';
  5  | 
  6  | test('User Can Logout Successfully', async ({ page, registerPage }) => {
  7  | 
  8  |     const user = generateUser();
  9  | 
  10 |     await page.goto(env.baseUrl);
  11 | 
  12 |     await registerPage.navigateToRegister();
  13 | 
  14 |     await registerPage.registerUser(user);
  15 | 
> 16 |     await page.getByRole('link', { name: 'Log Out' }).click();
     |                                                       ^ Error: locator.click: Test timeout of 60000ms exceeded.
  17 | 
  18 |     await expect(page.locator('input[name="username"]')).toBeVisible();
  19 | 
  20 |     await expect(page.locator('input[name="password"]')).toBeVisible();
  21 | }
  22 | );
```