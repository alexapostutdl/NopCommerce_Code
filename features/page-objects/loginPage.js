export class LoginPage{

    getLoginMainPageButton(){
        return $('.ico-login')
    }

    getEmail(){
        return $('#Email')
    }

    getPassword(){
        return $('[type="password"]')
    }

    getLoginButton(){
        return $('.buttons [type="submit"]')
    }

    getMyAccountButton(){
        return $('.ico-account')
    }
}