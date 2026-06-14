import { test, expect } from '../../fixtures/userFixture';

import { env } from '../../config/env';

test('Unauthorized User Cannot Access Account API', async ({ request }) => {

    const response = await request.get(`${env.apiUrl}/accounts/12345`);

    expect(response.status()).toBe(401);

    const body = await response.json();

    expect(body.message).toBe('User login required');
}
);
