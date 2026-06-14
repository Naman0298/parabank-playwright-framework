import { Page, Locator } from '@playwright/test';
import { env } from '../config/env';

export class RegisterPage {
    readonly page: Page;

    readonly registerLink: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phone: Locator;
    readonly ssn: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.registerLink = page.getByRole('link', { name: 'Register' });

        this.firstName = page.locator('#customer\\.firstName');
        this.lastName = page.locator('#customer\\.lastName');
        this.address = page.locator('#customer\\.address\\.street');
        this.city = page.locator('#customer\\.address\\.city');
        this.state = page.locator('#customer\\.address\\.state');
        this.zipCode = page.locator('#customer\\.address\\.zipCode');
        this.phone = page.locator('#customer\\.phoneNumber');
        this.ssn = page.locator('#customer\\.ssn');

        this.username = page.locator('#customer\\.username');
        this.password = page.locator('#customer\\.password');
        this.confirmPassword = page.locator('#repeatedPassword');

        this.registerButton = page.locator('input[value="Register"]');
    }

    async navigateToRegister() {
        await this.registerLink.click();
        await this.firstName.waitFor({ state: 'visible', timeout: 15000 });
    }

    async registerUser(user: {
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        phone: string;
        ssn: string;
        username: string;
        password: string;
    }) {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.address.fill(user.address);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        await this.zipCode.fill(user.zipCode);
        await this.phone.fill(user.phone);
        await this.ssn.fill(user.ssn);
        await this.username.fill(user.username);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.password);
        await this.registerButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
