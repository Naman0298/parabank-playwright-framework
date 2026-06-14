import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';
import { env } from '../../config/env';

test('Transfer With Invalid Amount', async ({ page, registerPage, transferFundsPage, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });
    await registerAndAuthenticate(page, registerPage, user);
    await transferFundsPage.navigate();
    await transferFundsPage.amountInput.fill('-50');
    await transferFundsPage.transferButton.click();
    await page.waitForTimeout(2000);

}
);