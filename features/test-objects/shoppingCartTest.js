import { pages } from "../support/pages"

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


    }
}