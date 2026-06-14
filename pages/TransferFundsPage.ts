import { Page, Locator } from '@playwright/test';

export class TransferFundsPage {

    readonly page: Page;

    readonly transferFundsLink: Locator;

    readonly amountInput: Locator;
    readonly fromAccountDropdown: Locator;
    readonly toAccountDropdown: Locator;

    readonly transferButton: Locator;

    readonly successMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.transferFundsLink = page.getByRole('link', { name: 'Transfer Funds' });

        this.amountInput = page.locator('#amount');

        this.fromAccountDropdown = page.locator('#fromAccountId');

        this.toAccountDropdown = page.locator('#toAccountId');

        this.transferButton = page.locator('input[value="Transfer"]');

        this.successMessage = page.locator('#showResult');
    }

    async getFromAccountsCount() {

        return await this.fromAccountDropdown.locator('option').count();
    }

    async getAccountOptions() {

        return await this.fromAccountDropdown.locator('option').allTextContents();
    }
    async navigate() {

        await this.transferFundsLink.waitFor({ state: 'visible', timeout: 15000 });

        await this.transferFundsLink.click();

        await this.page.waitForLoadState('networkidle');
    }

    async transferFunds(amount: string, fromIndex = 0, toIndex = 1) {

        await this.amountInput.fill(amount);

        await this.fromAccountDropdown.selectOption({ index: fromIndex });

        await this.toAccountDropdown.selectOption({ index: toIndex });

        await this.transferButton.click();

        await this.page.waitForLoadState('networkidle');

        await this.successMessage.waitFor({ state: 'visible' });
    }
}