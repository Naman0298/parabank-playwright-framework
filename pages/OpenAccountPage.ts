import { Page, Locator, expect } from '@playwright/test';

export class OpenAccountPage {

    readonly page: Page;
    readonly openAccountLink: Locator;
    readonly accountTypeDropdown: Locator;
    readonly fromAccountDropdown: Locator;
    readonly openNewAccountButton: Locator;
    readonly successMessage: Locator;
    readonly accountIdLink: Locator;

    constructor(page: Page) {

        this.page = page;
        this.openAccountLink = page.getByRole('link', { name: 'Open New Account' });
        this.accountTypeDropdown = page.locator('#type');
        this.fromAccountDropdown = page.locator('#fromAccountId');
        this.openNewAccountButton = page.locator('input[value="Open New Account"]');
        this.successMessage = page.locator('#openAccountResult h1');
        this.accountIdLink = page.locator('#newAccountId');
    }

    async navigate() {

        await this.openAccountLink.waitFor({ state: 'visible', timeout: 15000 });
        await this.openAccountLink.click();
        await this.accountTypeDropdown.waitFor({ state: 'visible' });
    }

    async createSavingsAccount() {

        await this.accountTypeDropdown.selectOption('1');
        await this.page.waitForTimeout(2000);
        await this.openNewAccountButton.click();
        await Promise.race([
            this.page.locator('#openAccountResult').waitFor({ state: 'visible', timeout: 15000 }),
            this.page.locator('#openAccountError').waitFor({ state: 'visible', timeout: 15000 })
        ]);
        if (await this.page.locator('#openAccountError').isVisible()) {
            throw new Error('Open Account failed - ParaBank returned an error');
        }
    }

    async createCheckingAccount() {

        await expect(this.openNewAccountButton).toBeVisible();
        await this.accountTypeDropdown.selectOption('0');
        await this.openNewAccountButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.locator('#openAccountResult').waitFor({ state: 'visible', timeout: 15000 });
    }

    async getCreatedAccountId() {

        const accountId = await this.accountIdLink.textContent();
        return accountId?.trim();
    }
}