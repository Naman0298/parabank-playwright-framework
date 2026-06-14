import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Validate Loan Request Through API', async ({ page, registerPage, loanRequestPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await loanRequestPage.navigate();

    await loanRequestPage.requestLoan('100', '30');

    const loanAccountId = await loanRequestPage.getLoanAccountId();

    expect(loanAccountId).toBeTruthy();

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${loanAccountId}`);

    expect(response.status()).toBe(200);

    const account = await response.json();

    expect(account.type).toBe('LOAN');
}
);