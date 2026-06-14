import { test, expect } from '../../fixtures/userFixture';
import { registerAndAuthenticate } from '../../utils/authHelper';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test('Transfer Funds And Validate Through API', async ({ registerPage, transferFundsPage, openAccountPage, page, user }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });

    await registerAndAuthenticate(page, registerPage, user);

    const apiContext = await getAuthenticatedApiContext(page);

    const cookies = await page.context().cookies();

    console.log('Authenticated Session Created');

    await openAccountPage.navigate();

    await openAccountPage.createSavingsAccount();

    await transferFundsPage.navigate();

    await transferFundsPage.transferFunds('50');

    await expect(page.locator('text=has been transferred')).toBeVisible();

    console.log('Transfer completed successfully');
}
);