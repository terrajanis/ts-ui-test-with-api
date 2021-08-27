const {I} = inject()

export class UsersManagementPage {
    static selectors = {
        plusButton: {xpath: '//span[@class="src-app-routes-UsersManagement-components-Actions-css__action"]'},
    }

    static async createNewManager(): Promise<void> {
        I.waitForVisible(this.selectors.plusButton, 5)
        I.click(this.selectors.plusButton)
    }
}
