import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';
import { env } from '../../config/env';

test('Transfer Funds Between Accounts', async ({ registerPage, openAccountPage, transferFundsPage, page, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await registerAndAuthenticate(page, registerPage, user);
    await openAccountPage.navigate();
    await openAccountPage.createSavingsAccount();
    await transferFundsPage.navigate();
    await transferFundsPage.transferFunds('50');
    await expect(page.locator('text=has been transferred')).toBeVisible();
});