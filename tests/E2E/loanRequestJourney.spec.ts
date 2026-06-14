import { test, expect } from '../../fixtures/userFixture';
import { env } from '../../config/env';
import { registerAndAuthenticate } from '../../utils/authHelper';
import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Validate Loan Request Journey', async ({ page, registerPage, accountOverviewPage, loanRequestPage, user }) => {

    await page.goto(env.baseUrl);

    await registerAndAuthenticate(page, registerPage, user);

    await loanRequestPage.navigate();

    await loanRequestPage.requestLoan('100', '30');

    const loanAccountId = await loanRequestPage.getLoanAccountId();

    expect(loanAccountId).toBeTruthy();

    await accountOverviewPage.navigate();

    const exists = await accountOverviewPage.accountExists(loanAccountId!);

    expect(exists).toBeTruthy();

    const apiContext = await getAuthenticatedApiContext(page);

    const response = await apiContext.get(`https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${loanAccountId}`);

    expect(response.status()).toBe(200);

    const account = await response.json();

    expect(account.type).toBe('LOAN');
}
);