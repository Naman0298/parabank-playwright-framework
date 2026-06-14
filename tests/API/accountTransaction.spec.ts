import { test, expect } from '../../fixtures/userFixture';

import { env } from '../../config/env';

import { registerAndAuthenticate } from '../../utils/authHelper';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';

test(
    'Verify Account Transactions API',
    async ({ page, registerPage, openAccountPage, transferFundsPage, accountOverviewPage, user }) => {

        await page.goto(env.baseUrl);

        await registerAndAuthenticate(page, registerPage, user);

        await openAccountPage.navigate();

        await openAccountPage.createSavingsAccount();

        await accountOverviewPage.navigate();

        const accountIds = await accountOverviewPage.getAccountIds();

        const checkingId = accountIds[0];

        const savingsId = accountIds[1];

        expect(checkingId).toBeTruthy();

        expect(savingsId).toBeTruthy();

        await transferFundsPage.navigate();

        await transferFundsPage.transferFunds('50', 0, 1);

        await expect(page.locator('text=has been transferred')).toBeVisible();

        const apiContext = await getAuthenticatedApiContext(page);

        const response = await apiContext.get(`${env.apiUrl}/accounts/${checkingId}/transactions`);

        expect(response.status()).toBe(200);

        const transactions = await response.json();

        console.log(transactions);

        expect(Array.isArray(transactions)).toBeTruthy();

        expect(transactions.length).toBeGreaterThan(0);

        const transferTransaction = transactions.find((transaction: any) => Number(transaction.amount) === 50);

        expect(transferTransaction).toBeTruthy();

        expect(String(transferTransaction.accountId)).toBe(checkingId);

        expect(transferTransaction).toHaveProperty('id');

        expect(transferTransaction).toHaveProperty('date');

        expect(transferTransaction).toHaveProperty('amount');
    }
);