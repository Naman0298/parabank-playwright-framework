# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\accountApi.spec.ts >> Get Account By ID
- Location: tests\API\accountApi.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 16563
Received: undefined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Get Account By ID', async ({ request }) => {
  4  | 
  5  |     const accountId = 16563;
  6  | 
  7  |     const response = await request.get(
  8  |         `https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountId}`
  9  |     );
  10 | 
  11 | 
  12 | 
  13 | 
  14 | 
  15 |     console.log('Status:', response.status());
  16 |     console.log('Status Text:', response.statusText());
  17 | 
  18 |     const body = await response.text();
  19 | 
  20 |     console.log(body);
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 |     const account = await response.json();
  29 | 
  30 |     console.log(account);
  31 | 
> 32 |     expect(account.id).toBe(accountId);
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  33 | 
  34 |     expect(account).toHaveProperty('customerId');
  35 |     expect(account).toHaveProperty('type');
  36 |     expect(account).toHaveProperty('balance');
  37 | });
```