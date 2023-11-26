export class CheckoutPage{

    getCountry(){
        return $('#BillingNewAddress_CountryId')
    }

    getCity(){
        return $('[name="BillingNewAddress.City"]')
    }
    getAddress1(){
        return $('#BillingNewAddress_Address1')
    }
    getAddress2(){
        return $('#BillingNewAddress_Address2')
    }
    getZip(){
        return $('#BillingNewAddress_ZipPostalCode')
    }
    getPhoneNumber(){
        return $('#BillingNewAddress_PhoneNumber')
    }
    getContinueButton1(){
        return $('#billing-buttons-container [name="save"]')
    }
    getShippingOption(){
        return $('#shippingoption_1')
    }
    getContinueButton2(){
        return $('.button-1.shipping-method-next-step-button')
    }
    getPaymentMethod(){
        return $('paymentmethod_0')
    }
    getContinueButton3(){
        return $('.button-1.payment-method-next-step-button')
    }
    getContinueButton4(){
        return $('.button-1.payment-info-next-step-button')
    }
    getConfirmButton(){
        return $('.button-1.confirm-order-next-step-button')
    }
    getSuccessfullOrder(){
        return $('//strong')
    }
    getContinueButton5(){
        return $('.button-1.order-completed-continue-button')
    }
    getDeleteButton(){
        return $('#delete-billing-address-button')
    }
    getContinueButtonAfterDelete(){
        return $('#billing-buttons-container [name="save"]')
    }
    xyz(){
        return $()
    }

}