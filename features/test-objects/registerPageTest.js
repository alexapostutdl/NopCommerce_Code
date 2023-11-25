import { pages } from "../support/pages";
import { data } from "../support/data";

export class RegisterPageTest{

    async userFillsInTheRegistration(){

        await pages.registerPage.getGender(await data.userData.newUser.gender).click()
        await pages.registerPage.getFirstName().setValue(await data.userData.newUser.firstName)
        await pages.registerPage.getLastName().setValue(await data.userData.newUser.lastName)
        await pages.registerPage.getBirthDate('Day').selectByAttribute('value',await data.userData.newUser.birthDay)
        await pages.registerPage.getBirthDate('Month').selectByAttribute('value',await data.userData.newUser.birthMonth)
        await pages.registerPage.getBirthDate('Year').selectByAttribute('value',await data.userData.newUser.birthYear)
        await pages.registerPage.getEmail().setValue(await data.userData.newUser.email)
        await pages.registerPage.getCompany().setValue(await data.userData.newUser.company)
        await pages.registerPage.getPassword().setValue(await data.userData.newUser.password)
        await pages.registerPage.getConfirmPassword().setValue(await data.userData.newUser.password)
        await pages.registerPage.getRegisterButton().click()
    }

    async userAssertRegistration(){
        await expect( pages.registerPage.getConfirmRegister() ).toHaveText('Your registration completed')
    }
   




}