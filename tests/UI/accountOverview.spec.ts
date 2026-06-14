import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';
import { env } from '../../config/env';

test('Verify New Account Appears In Account Overview', async ({ registerPage, openAccountPage, accountOverviewPage, page, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await registerAndAuthenticate(page, registerPage, user);
    await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible({ timeout: 15000 });
    await openAccountPage.navigate();
    await openAccountPage.createSavingsAccount();
    const accountId = await openAccountPage.getCreatedAccountId();
    console.log('Created Account:', accountId);
    await accountOverviewPage.navigate();

    const exists = await accountOverviewPage.accountExists(accountId!);
    expect(exists).toBeTruthy();
});