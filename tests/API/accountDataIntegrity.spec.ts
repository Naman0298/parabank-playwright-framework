import { test, expect } from '../../fixtures/userFixture';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';
import { registerAndAuthenticate } from '../../utils/authHelper';


test('Validate Account Data Integrity', async ({ page, registerPage, user, accountOverviewPage }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });

    await registerAndAuthenticate(page, registerPage, user);

    await accountOverviewPage.navigate();

    const apiContext = await getAuthenticatedApiContext(page);

    const accountId = await accountOverviewPage.getFirstAccountId();

    const response = await apiContext.get(`${env.apiUrl}/accounts/${accountId}`);

    expect(response.status()).toBe(200);

    const account = await response.json();

    expect(account.id).toBeGreaterThan(0);

    expect(account.customerId).toBeGreaterThan(0);

    expect(typeof account.balance).toBe('number');

    expect(['CHECKING', 'SAVINGS', 'LOAN'].includes(account.type)).toBeTruthy();
}
);
