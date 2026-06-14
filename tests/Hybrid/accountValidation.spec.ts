import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';
import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Validate Created Account Through API', async ({ registerPage, openAccountPage, page, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });

    await registerAndAuthenticate(page, registerPage, user);

    await openAccountPage.navigate();

    await openAccountPage.createSavingsAccount();

    const accountId = await openAccountPage.getCreatedAccountId();

    console.log('Account ID:', accountId);

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountId}`);

    console.log('Status:', response.status());

    expect(response.ok()).toBeTruthy();

    const account = await response.json();

    console.log(account);

    expect(account.id.toString()).toBe(accountId);

    expect(account.type).toBe('SAVINGS');

    expect(account.balance).toBe(100.00);
});