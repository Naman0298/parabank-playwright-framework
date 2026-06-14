import { test as base } from '@playwright/test';

import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { OpenAccountPage } from '../pages/OpenAccountPage';
import { AccountOverviewPage } from '../pages/AccountOverviewPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';
import { LoanRequestPage } from '../pages/LoanRequestPage';
import { BillPayPage } from '../pages/BillPayPage';

type Pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    openAccountPage: OpenAccountPage;
    accountOverviewPage: AccountOverviewPage;
    transferFundsPage: TransferFundsPage;
    loanRequestPage: LoanRequestPage;
    billPayPage: BillPayPage;
};

export const test = base.extend<Pages>({

    registerPage: async ({ page }, use) => { await use(new RegisterPage(page)); },
    loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
    openAccountPage: async ({ page }, use) => { await use(new OpenAccountPage(page)); },
    accountOverviewPage: async ({ page }, use) => { await use(new AccountOverviewPage(page)); },
    transferFundsPage: async ({ page }, use) => { await use(new TransferFundsPage(page)); },
    loanRequestPage: async ({ page }, use) => { await use(new LoanRequestPage(page)); },
    billPayPage: async ({ page }, use) => { await use(new BillPayPage(page)); },

});

export { expect } from '@playwright/test';