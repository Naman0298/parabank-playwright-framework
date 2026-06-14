import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';

test('Validate Bill Payment', async ({ page, registerPage, billPayPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await billPayPage.navigate();

    const billPayResponse = page.waitForResponse(response => response.url().includes('/billpay'));

    await billPayPage.payBill();

    const response = await billPayResponse;

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.amount).toBe(50);

    expect(body.accountId).toBeTruthy();

    expect(body.payeeName).toBeTruthy();
}
);