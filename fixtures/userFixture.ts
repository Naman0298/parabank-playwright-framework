import { test as base } from './testFixtures';

import { generateUser } from '../utils/dataGenerator';

type UserFixture = {
    user: ReturnType<typeof generateUser>;
};

export const test = base.extend<UserFixture>({

    user: async ({ }, use) => {
        await use(generateUser());
    }
});

export { expect } from '@playwright/test';