import { test, expect } from '../../fixtures/userFixture';

import Ajv from 'ajv';

import { env } from '../../config/env';

import { getAuthenticatedApiContext } from '../../utils/apiHelper';
import { registerAndAuthenticate } from '../../utils/authHelper';


test('Validate Customer Accounts Schema', async ({ page, registerPage, user, accountOverviewPage }) => {

    await page.goto(env.baseUrl, { waitUntil: 'domcontentloaded' });

    await registerAndAuthenticate(page, registerPage, user);

    await accountOverviewPage.navigate();

    const apiContext = await getAuthenticatedApiContext(page);

    const accountId = await accountOverviewPage.getFirstAccountId();

    const response = await apiContext.get(`${env.apiUrl}/accounts/${accountId}`);

    expect(response.status()).toBe(200);

    const account = await response.json();

    const schema = {

        type: 'object',

        properties: {

            id: { type: 'number' },

            customerId: { type: 'number' },

            type: { type: 'string' },

            balance: { type: 'number' }
        },

        required: ['id', 'customerId', 'type', 'balance']
    };

    const ajv = new Ajv();

    const validate = ajv.compile(schema);

    expect(validate(account)).toBeTruthy();
}
);
