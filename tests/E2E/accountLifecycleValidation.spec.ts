import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Validate Account Lifecycle', async ({ page, registerPage, openAccountPage, accountOverviewPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await accountOverviewPage.navigate();

    const beforeAccounts = await accountOverviewPage.getAccountIds();

    const beforeCount = beforeAccounts.length;

    console.log('Before Count:', beforeCount);

    await openAccountPage.navigate();

    await openAccountPage.createSavingsAccount();

    const newAccountId = await openAccountPage.getCreatedAccountId();

    console.log('New Account:', newAccountId);

    await accountOverviewPage.navigate();

    const afterAccounts = await accountOverviewPage.getAccountIds();

    expect(afterAccounts.length).toBe(beforeCount + 1);

    expect(afterAccounts).toContain(newAccountId);

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${newAccountId}`);

    expect(response.status()).toBe(200);

    const account = await response.json();

    expect(account.id).toBe(Number(newAccountId));

    expect(account.type).toBe('SAVINGS');

    expect(account.balance).toBe(100);
}
);