import { Page, Locator } from '@playwright/test';

export class AccountOverviewPage {

    readonly page: Page;
    readonly accountOverviewLink: Locator;
    readonly accountTable: Locator;

    constructor(page: Page) {

        this.page = page;
        this.accountOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
        this.accountTable = page.locator('#accountTable');
    }

    async getAccountIds() {

        const accountLinks = this.page.locator('#accountTable tbody tr a');
        await accountLinks.first().waitFor({ state: 'visible', timeout: 15000 });
        return await accountLinks.allTextContents();
    }

    async navigate() {
        await this.accountOverviewLink.waitFor({ state: 'visible', timeout: 15000 });
        await this.accountOverviewLink.click();
        await this.accountTable.waitFor({ state: 'visible' });
        await this.page.locator('#accountTable tbody tr a').first().waitFor({ state: 'visible', timeout: 15000 });

    }

    async getFirstAccountId() {

        const accountLink = this.page.locator('#accountTable tbody tr a').first();
        await accountLink.waitFor({ state: 'visible', timeout: 15000 });
        const accountId = await accountLink.textContent();
        return accountId?.trim();
    }

    async accountExists(accountId: string) {

        const locator = this.page.getByRole('link', { name: accountId });
        await locator.waitFor({ state: 'visible', timeout: 15000 });
        return await locator.isVisible();
    }
}