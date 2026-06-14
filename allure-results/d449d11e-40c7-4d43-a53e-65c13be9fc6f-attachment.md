# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\customerAccountContract.spec.ts >> Validate Customer Accounts Contract
- Location: tests\API\customerAccountContract.spec.ts:10:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Page snapshot

```yaml
- main [ref=e2]
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
  8  | import { ensureAuthenticated } from '../../utils/authHelper';
  9  | 
  10 | test('Validate Customer Accounts Contract', async ({ page, registerPage, user }) => {
  11 | 
  12 |     await page.goto(env.baseUrl);
  13 | 
  14 |     await registerPage.navigateToRegister();
  15 | 
  16 |     await registerPage.registerUser(user);
  17 | 
  18 |     await ensureAuthenticated(page);
  19 | 
  20 |     const apiContext = await getAuthenticatedApiContext(page);
  21 | 
  22 |     const response = await apiContext.get('https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts');
  23 | 
> 24 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  25 | 
  26 |     const accounts = await response.json();
  27 | 
  28 |     const schema = {
  29 | 
  30 |         type: 'object',
  31 | 
  32 |         properties: {
  33 | 
  34 |             id: { type: 'number' },
  35 | 
  36 |             customerId: { type: 'number' },
  37 | 
  38 |             type: { type: 'string' },
  39 | 
  40 |             balance: { type: 'number' }
  41 |         },
  42 | 
  43 |         required: ['id', 'customerId', 'type', 'balance']
  44 |     };
  45 | 
  46 |     const ajv = new Ajv();
  47 | 
  48 |     const validate = ajv.compile(schema);
  49 | 
  50 |     for (const account of accounts) {
  51 | 
  52 |         expect(validate(account)).toBeTruthy();
  53 |     }
  54 | }
  55 | );
```