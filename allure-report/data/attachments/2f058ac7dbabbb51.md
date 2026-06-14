# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hybrid\accountValidation.spec.ts >> Validate Created Account Through API
- Location: tests\Hybrid\accountValidation.spec.ts:6:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - paragraph [ref=e29]: Welcome William Willms
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Account Opened!" [level=1] [ref=e51]
        - paragraph [ref=e52]: Congratulations, your account is now open.
        - paragraph [ref=e53]:
          - text: "Your new account number:"
          - link "18117" [ref=e54] [cursor=pointer]:
            - /url: activity.htm?id=18117
  - generic [ref=e56]:
    - list [ref=e57]:
      - listitem [ref=e58]:
        - link "Home" [ref=e59] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "About Us" [ref=e61] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e62]:
        - link "Services" [ref=e63] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "Products" [ref=e65] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e66]:
        - link "Locations" [ref=e67] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e68]:
        - link "Forum" [ref=e69] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e70]:
        - link "Site Map" [ref=e71] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e72]:
        - link "Contact Us" [ref=e73] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e74]: © Parasoft. All rights reserved.
    - list [ref=e75]:
      - listitem [ref=e76]: "Visit us at:"
      - listitem [ref=e77]:
        - link "www.parasoft.com" [ref=e78] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/userFixture';
  2  | 
  3  | import { env } from '../../config/env';
  4  | import { getAuthenticatedApiContext } from '../../utils/apiHelper';
  5  | 
  6  | test('Validate Created Account Through API', async ({ registerPage, openAccountPage, page, user }) => {
  7  | 
  8  |     await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
  9  | 
  10 |     await registerPage.navigateToRegister();
  11 | 
  12 |     await registerPage.registerUser(user);
  13 | 
  14 |     await openAccountPage.navigate();
  15 | 
  16 |     await openAccountPage.createSavingsAccount();
  17 | 
  18 |     const accountId = await openAccountPage.getCreatedAccountId();
  19 | 
  20 |     console.log('Account ID:', accountId);
  21 | 
  22 |     const apiContext = await getAuthenticatedApiContext(page);
  23 | 
  24 |     const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountId}`);
  25 | 
  26 |     console.log('Status:', response.status());
  27 | 
> 28 |     expect(response.ok()).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  29 | 
  30 |     const account = await response.json();
  31 | 
  32 |     console.log(account);
  33 | 
  34 |     expect(account.id.toString()).toBe(accountId);
  35 | 
  36 |     expect(account.type).toBe('SAVINGS');
  37 | 
  38 |     expect(account.balance).toBe(100.00);
  39 | });
```