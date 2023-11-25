import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/tests';

When('User acceses the Desktop category', async()=>{
    await tests.shoppingCartTest.openDesktopCategory()
})

When('User adds 1 item to cart', async()=>{
    await tests.shoppingCartTest.addItemToCart()
})

When('User opens and asserts items in cart', async()=>{
    await tests.shoppingCartTest.openShoppingCart()
})

When('User increases the quantity & updates the cart', async()=>{
    await tests.shoppingCartTest.updateCart()
})


Then('User checks out', async()=>{
    await tests.shoppingCartTest.userChecksOut()
})

// Then('User asserts the order was sent', async()=>{

// })