import UserData from "./data/userData";
import RandomUserData from "./data/randomData";


class Data {
    constructor(){
        this.userData = new UserData(),
        this.randomUserData = new RandomUserData()
    }
}

export const data = new Data()