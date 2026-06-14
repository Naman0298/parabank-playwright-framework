import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Validate Account Creation Journey', async ({ page, registerPage, openAccountPage, accountOverviewPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await accountOverviewPage.navigate();

    const initialAccounts = await accountOverviewPage.getAccountIds();

    const checkingAccount = initialAccounts[0];

    await openAccountPage.navigate();

    await openAccountPage.createSavingsAccount();

    const savingsAccount = await openAccountPage.getCreatedAccountId();

    expect(savingsAccount).toBeTruthy();

    await accountOverviewPage.navigate();

    const allAccounts = await accountOverviewPage.getAccountIds();

    expect(allAccounts).toContain(savingsAccount);

    expect(checkingAccount).not.toBe(savingsAccount);

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${savingsAccount}`);

    expect(response.status()).toBe(200);

    const account = await response.json();

    expect(account.type).toBe('SAVINGS');

    expect(account.balance).toBe(100);
}
);