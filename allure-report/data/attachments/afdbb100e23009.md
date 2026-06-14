# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountDataIntegrity.spec.ts >> Validate Account Data Integrity
- Location: tests\API\accountDataIntegrity.spec.ts:9:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
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
            - 'row "First Name: Patty" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Patty" [ref=e52]:
                - textbox [ref=e53]: Patty
              - cell [ref=e54]
            - 'row "Last Name: Denesik" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Denesik" [ref=e57]:
                - textbox [ref=e58]: Denesik
              - cell [ref=e59]
            - 'row "Address: 995 S 6th Street" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "995 S 6th Street" [ref=e62]:
                - textbox [ref=e63]: 995 S 6th Street
              - cell [ref=e64]
            - 'row "City: Lake Coralie" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "Lake Coralie" [ref=e67]:
                - textbox [ref=e68]: Lake Coralie
              - cell [ref=e69]
            - 'row "State: Nevada" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "Nevada" [ref=e72]:
                - textbox [ref=e73]: Nevada
              - cell [ref=e74]
            - 'row "Zip Code: 09442-1470" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "09442-1470" [ref=e77]:
                - textbox [ref=e78]: 09442-1470
              - cell [ref=e79]
            - 'row "Phone #: 1-574-329-4358 x41123" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "1-574-329-4358 x41123" [ref=e82]:
                - textbox [ref=e83]: 1-574-329-4358 x41123
              - cell [ref=e84]
            - 'row "SSN: 799691380" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "799691380" [ref=e87]:
                - textbox [ref=e88]: "799691380"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: user_1781420147020 This username already exists." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "user_1781420147020" [ref=e94]:
                - textbox [ref=e95]: user_1781420147020
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
  1  | import { test, expect } from '../../fixtures/userFixture';
  2  | 
  3  | import { env } from '../../config/env';
  4  | 
  5  | import { getAuthenticatedApiContext } from '../../utils/apiHelper';
  6  | import { ensureAuthenticated } from '../../utils/authHelper';
  7  | 
  8  | 
  9  | test('Validate Account Data Integrity', async ({ page, registerPage, user }) => {
  10 | 
  11 |     await page.goto(env.baseUrl);
  12 | 
  13 |     await registerPage.navigateToRegister();
  14 | 
  15 |     await registerPage.registerUser(user);
  16 | 
  17 |     await ensureAuthenticated(page);
  18 | 
  19 |     const apiContext = await getAuthenticatedApiContext(page);
  20 | 
  21 |     const response = await apiContext.get('https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts');
  22 | 
> 23 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  24 | 
  25 |     const accounts = await response.json();
  26 | 
  27 |     for (const account of accounts) {
  28 | 
  29 |         expect(account.id).toBeGreaterThan(0);
  30 | 
  31 |         expect(account.customerId).toBeGreaterThan(0);
  32 | 
  33 |         expect(typeof account.balance).toBe('number');
  34 | 
  35 |         expect(['CHECKING', 'SAVINGS', 'LOAN'].includes(account.type)).toBeTruthy();
  36 |     }
  37 | }
  38 | );
```