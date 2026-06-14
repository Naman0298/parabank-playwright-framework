import { test, expect } from '../../fixtures/userFixture';
import { env } from '../../config/env';
import { registerAndAuthenticate } from '../../utils/authHelper';

test('Register And Login User', async ({ registerPage, loginPage, page, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await registerAndAuthenticate(page, registerPage, user);
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
    await page.click('text=Log Out');
    await loginPage.login(user.username, user.password);

    console.log('Current URL:', page.url());
});