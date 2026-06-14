import { Page } from '@playwright/test';
import { env } from '../config/env';
import { RegisterPage } from '../pages/RegisterPage';
import { User } from '../types/User';

type AuthCredentials = {
    username: string;
    password: string;
};

export async function ensureAuthenticated(page: Page, credentials?: AuthCredentials) {
    const logoutLink = page.getByRole('link', { name: 'Log Out' });

    for (let i = 0; i < 5; i++) {
        if (await logoutLink.isVisible({ timeout: 5000 }).catch(() => false)) {
            return;
        }

        if (credentials) {
            await page.goto(`${env.baseUrl}/index.htm`, { waitUntil: 'domcontentloaded' });
            await page.locator('input[name="username"]').fill(credentials.username);
            await page.locator('input[name="password"]').fill(credentials.password);
            await page.locator('input[value="Log In"]').click();
            await page.waitForLoadState('domcontentloaded');

            if (await logoutLink.isVisible({ timeout: 10000 }).catch(() => false)) {
                return;
            }

            continue;
        }

        await page.goto(`${env.baseUrl}/overview.htm`, { waitUntil: 'domcontentloaded' });
    }

    throw new Error('Failed to reach authenticated state');
}

export async function registerAndAuthenticate(page: Page, registerPage: RegisterPage, user: User) {
    for (let attempt = 0; attempt < 3; attempt++) {
        if (attempt === 0) {
            await registerPage.navigateToRegister();
        } else {
            await page.goto(`${env.baseUrl}/register.htm`, { waitUntil: 'domcontentloaded' });
        }

        await registerPage.registerUser(user);

        try {
            await ensureAuthenticated(page, user);
            return;
        } catch {
            if (attempt === 2) {
                throw new Error('Failed to register and authenticate user');
            }
        }
    }
}
