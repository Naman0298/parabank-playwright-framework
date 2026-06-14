import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';
import { env } from '../../config/env';

test('Verify Main Navigation Links', async ({ page, registerPage, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await registerAndAuthenticate(page, registerPage, user);
    await page.getByRole('link', { name: 'Open New Account' }).click();
    await expect(page).toHaveURL(/openaccount/);
    await page.getByRole('link', { name: 'Accounts Overview' }).click();
    await expect(page).toHaveURL(/overview/);
    await page.getByRole('link', { name: 'Transfer Funds' }).click();
    await expect(page).toHaveURL(/transfer/);
}
);