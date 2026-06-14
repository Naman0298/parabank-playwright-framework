# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\customerAccountContract.spec.ts >> Validate Customer Accounts Contract
- Location: tests\API\customerAccountContract.spec.ts:9:5

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
  - contentinfo [ref=e12]:
    - generic [ref=e14]:
      - generic [ref=e16]:
        - text: "Ray ID:"
        - code [ref=e17]: a0b28bc6cee67943
      - generic [ref=e18]:
        - generic [ref=e19]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e20] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e22] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
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
  17 |     const apiContext = await getAuthenticatedApiContext(page);
  18 | 
  19 |     const response = await apiContext.get('https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts');
  20 | 
> 21 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  22 | 
  23 |     const accounts = await response.json();
  24 | 
  25 |     const schema = {
  26 | 
  27 |         type: 'object',
  28 | 
  29 |         properties: {
  30 | 
  31 |             id: { type: 'number' },
  32 | 
  33 |             customerId: { type: 'number' },
  34 | 
  35 |             type: { type: 'string' },
  36 | 
  37 |             balance: { type: 'number' }
  38 |         },
  39 | 
  40 |         required: ['id', 'customerId', 'type', 'balance']
  41 |     };
  42 | 
  43 |     const ajv = new Ajv();
  44 | 
  45 |     const validate = ajv.compile(schema);
  46 | 
  47 |     for (const account of accounts) {
  48 | 
  49 |         expect(validate(account)).toBeTruthy();
  50 |     }
  51 | }
  52 | );
```