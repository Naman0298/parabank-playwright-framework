import { expect, Page } from '@playwright/test';
import { env } from '../config/env';
import { RegisterPage } from '../pages/RegisterPage';
import { User } from '../types/User';

export async function ensureAuthenticated(page: Page) {

    const logoutLink = page.getByRole('link', { name: 'Log Out' });

    try {
        await expect(logoutLink).toBeVisible({ timeout: 15000 });
        return;

    } catch {

        throw new Error('User is not authenticated.');
    }
}

export async function registerAndAuthenticate(page: Page, registerPage: RegisterPage, user: User) {

    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        await page.goto(`${env.baseUrl}/register.htm`, { waitUntil: 'domcontentloaded' });
        await registerPage.registerUser(user);

        try {

            await ensureAuthenticated(page);
            return;

        } catch {
            if (attempt === maxAttempts) {

                throw new Error(`Failed to register and authenticate after ${maxAttempts} attempts`);
            }
            await page.waitForTimeout(2000);
        }
    }
}