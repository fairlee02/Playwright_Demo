class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "#email1";
        this.passwordInput = "#password1";
        this.signInBtn = ".submit-btn";
    }

    async loginToApplication(userName, userPassword) {
        await this.page.fill(this.usernameInput, userName);
        await this.page.fill(this.passwordInput, userPassword);
        await this.page.click(this.signInBtn);
    }
}

module.exports = LoginPage;
