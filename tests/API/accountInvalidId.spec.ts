import { test, expect } from '../../fixtures/userFixture';
import { env } from '../../config/env';
import { getAuthenticatedApiContext } from '../../utils/apiHelper';
import { registerAndAuthenticate } from '../../utils/authHelper';

test('Verify API Behavior For Non Numeric Account ID', async ({ page, registerPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`${env.apiUrl}/accounts/abc123`);

    console.log('Status:', response.status());

    const body = await response.text();

    console.log('Response:', body);

    expect(response.status()).not.toBe(200);
}
);