import { test, expect } from '../../fixtures/userFixture';

import { env } from '../../config/env';

test('Invalid Account Access', async ({ request }) => {

    const response = await request.get(`${env.apiUrl}/accounts/99999999`);

    expect(response.status()).toBe(401);
}
);
