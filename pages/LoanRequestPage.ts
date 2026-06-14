import { Page, Locator } from '@playwright/test';

export class LoanRequestPage {

    readonly page: Page;

    readonly requestLoanLink: Locator;

    readonly loanAmountInput: Locator;
    readonly downPaymentInput: Locator;
    readonly fromAccountDropdown: Locator;

    readonly applyButton: Locator;

    readonly approvalMessage: Locator;
    readonly loanAccountId: Locator;

    constructor(page: Page) {

        this.page = page;

        this.requestLoanLink = page.getByRole('link', { name: 'Request Loan' });

        this.loanAmountInput = page.locator('#amount');

        this.downPaymentInput = page.locator('#downPayment');

        this.fromAccountDropdown = page.locator('#fromAccountId');

        this.applyButton = page.locator('input[value="Apply Now"]');

        this.approvalMessage = page.locator('#loanRequestApproved');

        this.loanAccountId = page.locator('#newAccountId');
    }

    async navigate() {

        await this.requestLoanLink.click();
    }

    async requestLoan(amount: string, downPayment: string) {

        await this.loanAmountInput.fill(amount);

        await this.downPaymentInput.fill(downPayment);

        await this.applyButton.click();

        await this.approvalMessage.waitFor({ state: 'visible' });
    }

    async getLoanAccountId() {

        return await this.loanAccountId.textContent();
    }
}