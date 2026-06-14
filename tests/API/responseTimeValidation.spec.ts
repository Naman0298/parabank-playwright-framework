import { test, expect } from '../../fixtures/userFixture';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';
import { registerAndAuthenticate } from '../../utils/authHelper';

test('Validate Accounts API Response Time', async ({ page, registerPage, user, accountOverviewPage }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await accountOverviewPage.navigate();

    const apiContext = await getAuthenticatedApiContext(page);

    const start = Date.now();

    const accountId = await accountOverviewPage.getFirstAccountId();

    const response = await apiContext.get(`${env.apiUrl}/accounts/${accountId}`);

    const duration = Date.now() - start;

    console.log('Response Time:', duration, 'ms');

    expect(response.status()).toBe(200);

    expect(duration).toBeLessThan(3000);
}
);