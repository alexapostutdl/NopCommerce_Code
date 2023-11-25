export class RegisterPage{

    getGender(gender){
        return $(`.${gender}`)
    }

    getFirstName(){
        return $('[name="FirstName"]')
    }

    getLastName(){
        return $('[name="LastName"]')
    }

    getBirthDate(date){
        return $(`[name="DateOfBirth${date}"]`)
    }

    getEmail(){
        return $('#Email')
    }

    getCompany(){
        return $('#Company')
    }

    getPassword(){
        return $('[name="Password"]')
    }

    getConfirmPassword(){
        return $('[name="ConfirmPassword"]')
    }

    getRegisterButton(){
        return $('[name="register-button"]')
    }

    getConfirmRegister(){
        return $('.page-body .result')
    }

    xyz(){
        return $()
    }

    xyz(){
        return $()
    }

    xyz(){
        return $()
    }





}