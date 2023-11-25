import { LoginPageTest } from "../test-objects/loginPageTest";
import { MainPageTest } from "../test-objects/mainPageTest";
import { RegisterPageTest } from "../test-objects/registerPageTest";
import { ShoppingCartTest } from "../test-objects/shoppingCartTest";


class Tests{

    constructor(){
        this.mainPageTest = new MainPageTest(),
        this.registerPageTest = new RegisterPageTest(),
        this.loginPageTest = new LoginPageTest(),
        this.shoppingCartTest = new ShoppingCartTest()
    }

}

export const tests = new Tests()