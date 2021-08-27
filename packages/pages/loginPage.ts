import {ApiHelper} from "../helpers/ApiHelper";
import {User} from "../entities/User";

const {I} = inject()

export class LoginPage {
    static selectors = {
        email: {id: 'email'},
        password: {id: 'password'},
        signInButton: {xpath: '//button[text() ="Sign in"]'}
    }

    static async loginUser(user: User): Promise<void> {
        I.amOnPage('')
        I.waitForVisible(this.selectors.email, 5)
        I.fillField(this.selectors.email, user.email)
        I.fillField(this.selectors.password, user.password)
        I.click(this.selectors.signInButton)
    }

    static async createUserViaApi(user: User): Promise<void>{
        await ApiHelper.createNewUser(user)
    }
}
