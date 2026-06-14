import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';
import { env } from '../../config/env';

test('Create Savings Account', async ({ registerPage, openAccountPage, page, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await registerAndAuthenticate(page, registerPage, user);
    await openAccountPage.navigate();
    await openAccountPage.createSavingsAccount();
    await expect(openAccountPage.successMessage).toHaveText('Account Opened!');

    const accountId = await openAccountPage.getCreatedAccountId();
    console.log('Created Account:', accountId);
    expect(accountId?.trim()).not.toBe('');
});