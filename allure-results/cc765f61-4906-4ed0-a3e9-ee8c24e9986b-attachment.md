# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\accountCreationJourney.spec.ts >> Validate Account Creation Journey
- Location: tests\E2E\accountCreationJourney.spec.ts:7:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: "13788"
Received array: []
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
        - paragraph [ref=e29]: Welcome Mark Reinger
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
        - heading "Accounts Overview" [level=1] [ref=e51]
        - table [ref=e52]:
          - rowgroup [ref=e53]:
            - row "Account Balance* Available Amount" [ref=e54]:
              - columnheader "Account" [ref=e55]
              - columnheader "Balance*" [ref=e56]
              - columnheader "Available Amount" [ref=e57]
          - rowgroup
          - rowgroup [ref=e58]:
            - row "*Balance includes deposits that may be subject to holds" [ref=e59]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=e60]
  - generic [ref=e62]:
    - list [ref=e63]:
      - listitem [ref=e64]:
        - link "Home" [ref=e65] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "About Us" [ref=e67] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Services" [ref=e69] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e70]:
        - link "Products" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Locations" [ref=e73] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e74]:
        - link "Forum" [ref=e75] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e76]:
        - link "Site Map" [ref=e77] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e78]:
        - link "Contact Us" [ref=e79] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e80]: © Parasoft. All rights reserved.
    - list [ref=e81]:
      - listitem [ref=e82]: "Visit us at:"
      - listitem [ref=e83]:
        - link "www.parasoft.com" [ref=e84] [cursor=pointer]:
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
  7  | test('Validate Account Creation Journey', async ({ page, registerPage, openAccountPage, accountOverviewPage, user }) => {
  8  | 
  9  |     await page.goto(env.baseUrl);
  10 | 
  11 |     await registerPage.navigateToRegister();
  12 | 
  13 |     await registerPage.registerUser(user);
  14 | 
  15 |     await accountOverviewPage.navigate();
  16 | 
  17 |     const initialAccounts = await accountOverviewPage.getAccountIds();
  18 | 
  19 |     const checkingAccount = initialAccounts[0];
  20 | 
  21 |     await openAccountPage.navigate();
  22 | 
  23 |     await openAccountPage.createSavingsAccount();
  24 | 
  25 |     const savingsAccount = await openAccountPage.getCreatedAccountId();
  26 | 
  27 |     expect(savingsAccount).toBeTruthy();
  28 | 
  29 |     await accountOverviewPage.navigate();
  30 | 
  31 |     const allAccounts = await accountOverviewPage.getAccountIds();
  32 | 
> 33 |     expect(allAccounts).toContain(savingsAccount);
     |                         ^ Error: expect(received).toContain(expected) // indexOf
  34 | 
  35 |     expect(checkingAccount).not.toBe(savingsAccount);
  36 | 
  37 |     const apiContext = await getAuthenticatedApiContext(page);
  38 | 
  39 |     const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${savingsAccount}`);
  40 | 
  41 |     expect(response.status()).toBe(200);
  42 | 
  43 |     const account = await response.json();
  44 | 
  45 |     expect(account.type).toBe('SAVINGS');
  46 | 
  47 |     expect(account.balance).toBe(100);
  48 | }
  49 | );
```