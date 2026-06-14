import { Page, Locator } from '@playwright/test';

export class BillPayPage {

    readonly page: Page;

    readonly billPayLink: Locator;

    readonly payeeName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phone: Locator;

    readonly accountNumber: Locator;
    readonly verifyAccount: Locator;

    readonly amount: Locator;

    readonly sendPaymentButton: Locator;

    readonly successMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.billPayLink = page.getByRole('link', { name: 'Bill Pay' });

        this.payeeName = page.locator('input[name="payee.name"]');

        this.address = page.locator('input[name="payee.address.street"]');

        this.city = page.locator('input[name="payee.address.city"]');

        this.state = page.locator('input[name="payee.address.state"]');

        this.zipCode = page.locator('input[name="payee.address.zipCode"]');

        this.phone = page.locator('input[name="payee.phoneNumber"]');

        this.accountNumber = page.locator('input[name="payee.accountNumber"]');

        this.verifyAccount = page.locator('input[name="verifyAccount"]');

        this.amount = page.locator('input[name="amount"]');

        this.sendPaymentButton = page.locator('input[value="Send Payment"]');

        this.successMessage = page.locator('#billpayResult');
    }

    async navigate() {
        await this.billPayLink.click();
    }

    async payBill() {

        await this.payeeName.fill('Test Payee');

        await this.address.fill('Street 1');

        await this.city.fill('Lucknow');

        await this.state.fill('UP');

        await this.zipCode.fill('226001');

        await this.phone.fill('9999999999');

        await this.accountNumber.fill('123456');

        await this.verifyAccount.fill('123456');

        await this.amount.fill('50');

        await this.sendPaymentButton.click();

        await this.successMessage.waitFor({ state: 'visible' });
    }
}