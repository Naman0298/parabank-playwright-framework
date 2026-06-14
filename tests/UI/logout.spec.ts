import { test, expect } from '../../fixtures/userFixture';
import { env } from '../../config/env';
import { registerAndAuthenticate } from '../../utils/authHelper';

test('User Can Logout Successfully', async ({ page, registerPage, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await registerAndAuthenticate(page, registerPage, user);
    await page.getByRole('link', { name: 'Log Out' }).click();
    await expect(page.locator('input[name="username"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
}
);