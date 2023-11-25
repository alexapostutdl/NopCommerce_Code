export default class UserData{

    constructor(){
        this.newUser = new NewUser(
            'male',
            'Alex',
            'Apostu',
            '5',
            '5',
            '1999',
            'alexandru.a.costel@testdevlab.com',
            'BestCompany',
            'BestPasswordEver333$'
        )
    }

}

class NewUser{
    constructor(gender, firstName, lastName, birthDay, birthMonth, birthYear, email, company, password){
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.email = email;
        this.company = company;
        this.password = password
    }
}