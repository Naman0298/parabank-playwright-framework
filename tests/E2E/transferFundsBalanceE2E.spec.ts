import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';

import { getAccountBalance } from '../../utils/accountApi';

test('Transfer Funds And Validate Balance', async ({ page, registerPage, openAccountPage, accountOverviewPage, transferFundsPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible({ timeout: 15000 });

    await openAccountPage.navigate();

    await openAccountPage.createSavingsAccount();

    await accountOverviewPage.navigate();

    const accountIds = await accountOverviewPage.getAccountIds();

    const checkingId = accountIds[0];

    const savingsId = accountIds[1];

    expect(checkingId).toBeTruthy();

    expect(savingsId).toBeTruthy();

    console.log('Checking:', checkingId);

    console.log('Savings:', savingsId);

    const apiContext = await getAuthenticatedApiContext(page);

    const checkingBefore = await getAccountBalance(apiContext, checkingId);

    const savingsBefore = await getAccountBalance(apiContext, savingsId);

    await getAccountBalance(apiContext, savingsId);

    await transferFundsPage.navigate();

    await transferFundsPage.transferFunds('50', 0, 1);

    const checkingAfter = await getAccountBalance(apiContext, checkingId);

    const savingsAfter = await getAccountBalance(apiContext, savingsId);

    expect(checkingAfter).toBe(checkingBefore - 50);

    expect(savingsAfter).toBe(savingsBefore + 50);
}
);