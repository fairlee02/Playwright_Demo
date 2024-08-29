class HomePage {
    constructor(page) {
        this.page = page;
        this.menuBtn = "//img[@alt='menu']";
        this.signOutBtn = "//button[contains(text(),'Sign out')]";
    }

    async OpenSideBar() {
        await this.page.click(this.menuBtn);
    }

    async SignOut() {
        await this.page.click(this.signOutBtn);
    }
}

module.exports = HomePage;
