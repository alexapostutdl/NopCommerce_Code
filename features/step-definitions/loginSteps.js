import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/tests';



Then('User logs in', async()=>{
    await tests.loginPageTest.openLoginPage()
    await tests.loginPageTest.login()
    await tests.loginPageTest.validateLogin()
})