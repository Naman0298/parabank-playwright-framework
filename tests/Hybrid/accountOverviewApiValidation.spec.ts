import { test, expect } from '../../fixtures/userFixture';
import { env } from '../../config/env';
import { getAuthenticatedApiContext } from '../../utils/apiHelper';
import { registerAndAuthenticate } from '../../utils/authHelper';


test('Validate Account Overview Data Through API', async ({ page, registerPage, accountOverviewPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await accountOverviewPage.navigate();

    const uiAccountId = await accountOverviewPage.getFirstAccountId();

    console.log('UI Account ID:', uiAccountId);

    expect(uiAccountId).toBeTruthy();

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${uiAccountId}`);

    expect(response.status()).toBe(200);

    const account = await response.json();

    console.log(account);

    expect(String(account.id)).toBe(uiAccountId);

    expect(account).toHaveProperty('customerId');

    expect(account).toHaveProperty('type');

    expect(account).toHaveProperty('balance');
}
);