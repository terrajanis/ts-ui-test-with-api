import {User} from "../entities/User";
import {RandomUtils} from "../utils/RandomUtils";
import {LoginPage} from "../pages/loginPage";
import {DashboardPage} from "../pages/dashboardPage";
import {UsersManagementPage} from "../pages/usersManagementPage";
import {ManagerPage} from "../pages/managerPage";


Feature('Creation of a new manager')

const email = RandomUtils.randomEmail()
const user = new User(email, ["ROLE_ADMIN"])

Scenario('Register a new manager', async () => {

    await LoginPage.createUserViaApi(user)
    await LoginPage.loginUser(user)

    await DashboardPage.goToUsersManagement()

    await UsersManagementPage.createNewManager()

    await ManagerPage.createAffiliateManager(user)
}).tag('smoke')
