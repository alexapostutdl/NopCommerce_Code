import { pages } from "../support/pages";

export class MainPageTest{

    async openMainPage(){
        await browser.url('https://demo.nopcommerce.com/')
        await pages.mainPage.validateMainPage().waitForExist()
    }

    async clickRegister(){
        await pages.mainPage.registerButton().click()
    }




}