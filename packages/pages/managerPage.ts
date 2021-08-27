import {User} from "../entities/User";
import {RandomUtils} from "../utils/RandomUtils";

const {I} = inject()

export class ManagerPage {
    static selectors = {
        uploadField: {xpath: '//input[@type="file"]'},
        applyButton: {xpath: '//button[text()="Apply"]'},
        email: {xpath: '//input[@placeholder="username@example.com"]'},
        password: {xpath: '//input[@type="password"]'},
        name: {xpath: '//input[@placeholder="Example"]'},
        surname: {xpath: '//input[@placeholder="User"]'},
        affiliateManagerRadio: {xpath: '//label[contains(., "Affiliate Manager")]'},
        permissionsButton: {xpath: '//div[text()="Permissions"]'},
        generalButton: {xpath: '//span[text()="General"]'},
        readRadio: {xpath: '//label[contains(., "Read")]'},
        denyRadio: {xpath: '//label[contains(., "Deny")]'},
        usersButton: {xpath: '//span/span[text()="Users"]'},
        affiliatesEditingButton: {xpath: '//span[text()="Affiliates editing"]'},
        input: {xpath: '//span[@class="src-shared-components-AsyncMultiSelect-css__placeholder"]'},
        selectedUser: {xpath: '//div[text()="(155) iktest"]'},
        saveButton: {xpath: '//button/span[text()="Save"]'},
        deleteButton: {xpath: '//span[text()="Delete"]'}
    }

    static async createAffiliateManager(user: User): Promise<void> {
        I.waitForVisible(this.selectors.email, 5)
        I.fillField(this.selectors.email, RandomUtils.randomEmail())
        I.clearField(this.selectors.password)
        I.fillField(this.selectors.password, user.password)
        I.fillField(this.selectors.name, user.firstName)
        I.fillField(this.selectors.surname, user.lastName)
        I.attachFile(this.selectors.uploadField, user.avatar)
        I.click(this.selectors.applyButton)
        I.click(this.selectors.affiliateManagerRadio)
        I.click(this.selectors.permissionsButton)
        I.click(this.selectors.generalButton)
        I.click(this.selectors.readRadio)
        I.click(this.selectors.usersButton)
        I.click(this.selectors.affiliatesEditingButton)
        I.click(this.selectors.denyRadio)
        I.click(locate(this.selectors.input).first())
        I.fillField(locate(this.selectors.input).first(), 'ik')
        I.waitForVisible(this.selectors.selectedUser, 5)
        I.click(this.selectors.selectedUser)
        I.click(this.selectors.saveButton)
        I.seeElement(this.selectors.deleteButton)
        I.saveScreenshot("created_user.jpg", true)
    }
}
