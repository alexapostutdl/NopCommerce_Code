import { MainPageTest } from "../test-objects/mainPageTest";
import { RegisterPageTest } from "../test-objects/registerPageTest";


class Tests{

    constructor(){
        this.mainPageTest = new MainPageTest(),
        this.registerPageTest = new RegisterPageTest()
    }

}

export const tests = new Tests()