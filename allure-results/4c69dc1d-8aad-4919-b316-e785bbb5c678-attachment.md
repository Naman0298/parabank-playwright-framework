# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\openAccount.spec.ts >> Create Savings Account
- Location: tests\UI\openAccount.spec.ts:6:5

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
- main:
  - img "Icon for parabank.parasoft.com"
  - heading "parabank.parasoft.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a0b820086a8518cb
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
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