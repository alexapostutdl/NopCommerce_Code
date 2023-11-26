import { pages } from "../support/pages"
import { data } from "../support/data"

export class ShoppingCartTest{

    async openDesktopCategory(){
        await  pages.shoppingCartPage.getComputers().click()
        await  pages.shoppingCartPage.getDesktopCategory().click()
        
    }

    async addItemToCart(){
        await  pages.shoppingCartPage.getProduct().click()
        await  pages.shoppingCartPage.getAddToCartButton().click()
    }

    async openShoppingCart(){
        await  pages.shoppingCartPage.getShoppingCart().click()

        const element = await  pages.shoppingCartPage.getEmptyCart()
        await element.waitForDisplayed({reverse : true})
    }

    async updateCart(){
        await  pages.shoppingCartPage.getQuantity().clearValue()
        await  pages.shoppingCartPage.getQuantity().setValue('2')
        await  pages.shoppingCartPage.getUpdateCart().click()
        await  pages.shoppingCartPage.getTerms().click()
        await  pages.shoppingCartPage.getCheckoutButton().click()

        await browser.pause(5000)
    }


    async userChecksOut(){
        
        const delete_button = await pages.checkoutPage.getDeleteButton()
        
        if(await delete_button.isDisplayed() === true){
            await pages.checkoutPage.getContinueButtonAfterDelete().click()
            await browser.pause(5000)
        }else{
            await browser.pause(3000)

            await pages.checkoutPage.getCountry().click()
            await pages.checkoutPage.getCountry().selectByVisibleText(data.randomUserData.randomUser.country)
            await pages.checkoutPage.getCity().setValue(data.randomUserData.randomUser.city)
            await pages.checkoutPage.getAddress1().setValue(data.randomUserData.randomUser.address)
            await pages.checkoutPage.getAddress2().setValue(data.randomUserData.randomUser.address)
            await pages.checkoutPage.getZip().setValue(data.randomUserData.randomUser.zipCode)
            await pages.checkoutPage.getPhoneNumber().setValue(data.randomUserData.randomUser.phoneNumber)
            await pages.checkoutPage.getContinueButton1().click()
            await browser.pause(5000)
        }

        await pages.checkoutPage.getShippingOption().click()
        await pages.checkoutPage.getContinueButton2().click()
        await browser.pause(3000)

        await pages.checkoutPage.getContinueButton3().click()
        await browser.pause(3000)
        await pages.checkoutPage.getContinueButton4().click()
        await browser.pause(3000)
        await pages.checkoutPage.getConfirmButton().click()

        await browser.pause(3000)

        const successfull_message = await pages.checkoutPage.getSuccessfullOrder()
        await expect(successfull_message).toHaveText('Your order has been successfully processed!')

        await pages.checkoutPage.getContinueButton5().click()

    }
}