import { test, expect } from '../../fixtures/userFixture';
import { env } from '../../config/env';
import { registerAndAuthenticate } from '../../utils/authHelper';

test('Register New User', async ({ registerPage, page, user }) => {
    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await registerAndAuthenticate(page, registerPage, user);
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
    console.log('Created User:', user.username);
});