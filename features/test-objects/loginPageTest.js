import { pages } from "../support/pages";
import { data } from "../support/data";

export class LoginPageTest{

    async openLoginPage(){
        await pages.loginPage.getLoginMainPageButton().click()
    }

    async login(){
        await pages.loginPage.getEmail().setValue(data.userData.newUser.email)
        await pages.loginPage.getPassword().setValue(data.userData.newUser.password)
        await pages.loginPage.getLoginButton().click()
    }

    async validateLogin(){
        await pages.loginPage.getMyAccountButton().waitForExist()
    }

}