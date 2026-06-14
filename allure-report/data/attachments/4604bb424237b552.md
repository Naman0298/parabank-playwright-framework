# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\customerAccounts.spec.ts >> Get Customer Accounts
- Location: tests\API\customerAccounts.spec.ts:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for parabank.parasoft.com" [ref=e5]
        - heading "parabank.parasoft.com" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e9]:
    - generic [ref=e11]:
      - generic [ref=e13]:
        - text: "Ray ID:"
        - code [ref=e14]: a0b2fb5ace28a3af
      - generic [ref=e15]:
        - generic [ref=e16]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e17] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e19] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/userFixture';
  2  | 
  3  | import { env } from '../../config/env';
  4  | 
  5  | import { getAuthenticatedApiContext } from '../../utils/apiHelper';
  6  | 
  7  | test('Get Customer Accounts', async ({ page, registerPage, user }) => {
  8  | 
  9  |     await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
  10 | 
  11 |     await registerPage.navigateToRegister();
  12 | 
  13 |     await registerPage.registerUser(user);
  14 | 
  15 |     const apiContext = await getAuthenticatedApiContext(page);
  16 | 
  17 |     const response = await apiContext.get('https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts');
  18 | 
> 19 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  20 | 
  21 |     const accounts = await response.json();
  22 | 
  23 |     expect(Array.isArray(accounts)).toBeTruthy();
  24 | 
  25 |     expect(accounts.length).toBeGreaterThan(0);
  26 | 
  27 |     console.log('Accounts Found:', accounts.length);
  28 | }
  29 | );
```