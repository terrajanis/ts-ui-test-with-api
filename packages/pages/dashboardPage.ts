const {I} = inject()

export class DashboardPage {
    static selectors = {
        userDropDown: {xpath: '//span[text() ="Users"]'},
        usersManagementLink: {xpath: '//a[text() ="Users Management"]'},
    }

    static async goToUsersManagement(): Promise<void> {
        I.waitForVisible(this.selectors.userDropDown, 5)
        I.click(this.selectors.userDropDown)
        I.click(this.selectors.usersManagementLink)
    }
}
