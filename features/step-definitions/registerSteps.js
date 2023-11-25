import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/tests';


Given('User opens the main page', async()=>{
    await tests.mainPageTest.openMainPage()
    await tests.mainPageTest.clickRegister()
})

When('User fills in the registration fields', async()=>{
    await tests.registerPageTest.userFillsInTheRegistration()
})

Then('User successfully reigisters', async()=>{
    await tests.registerPageTest.userAssertRegistration()
})