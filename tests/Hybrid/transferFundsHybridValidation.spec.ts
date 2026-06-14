import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Validate Account Balance Through API', async ({ registerPage, transferFundsPage, openAccountPage, page, user, accountOverviewPage }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });

    await registerAndAuthenticate(page, registerPage, user);

    await accountOverviewPage.navigate();

    const apiContext = await getAuthenticatedApiContext(page);

    const accountId = await accountOverviewPage.getFirstAccountId();

    const customerAccountsResponse = await apiContext.get(`${env.apiUrl}/accounts/${accountId}`);

    const accounts = await customerAccountsResponse.json();

    console.log(accounts);

    await openAccountPage.navigate();

    await openAccountPage.createSavingsAccount();

    await transferFundsPage.navigate();

    await transferFundsPage.transferFunds('50');

    await expect(page.locator('text=has been transferred')).toBeVisible();

    console.log('Transfer completed successfully');
}
);