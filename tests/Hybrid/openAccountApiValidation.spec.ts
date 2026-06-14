import { test, expect } from '../../fixtures/userFixture';
import { env } from '../../config/env';
import { registerAndAuthenticate } from '../../utils/authHelper';


import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Validate Newly Created Account Through API', async ({ page, registerPage, openAccountPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await openAccountPage.navigate();

    await openAccountPage.createSavingsAccount();

    const accountId = await openAccountPage.getCreatedAccountId();

    console.log('Created Account:', accountId);

    expect(accountId).toBeTruthy();

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountId}`);

    console.log('API Status:', response.status());

    expect(response.status()).toBe(200);

    const account = await response.json();

    console.log(account);

    expect(String(account.id)).toBe(accountId);

    expect(account).toHaveProperty('customerId');

    expect(account).toHaveProperty('type');

    expect(account).toHaveProperty('balance');
}
);