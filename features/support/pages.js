import { MainPage } from "../page-objects/mainPage";
import { RegisterPage } from "../page-objects/registerPage";


class Pages{

    constructor(){
        this.mainPage = new MainPage(),
        this.registerPage = new RegisterPage()
    }


}
export const pages = new Pages()