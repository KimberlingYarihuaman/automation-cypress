import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { signIn } from '../../../components/Shopstore/Sign In/sign-in-component';
import { payment } from '../../../components/Shopstore/Payment/payment-component';
import { checkout } from '../../../components/Shopstore/Checkout/checkout-component';
import { modal } from '../../../components/Shopstore/Common/modal-component';
import { messagesData, paymentMethodData, productData } from '../../../components/Shopstore/Common/data-provider';


describe('Payment Tests', () => {

    beforeEach(function () {
        //ADD A NEW PRODUCT
        cy.addNewProduct(productData.getRandomProduct())
        //CLICK ON PROCEED TO CHECKOUT
        cartSummary.getCheckOutButton().click({ force: true })
        //CLICK ON THE REGISTER/LOGIN
        modal.getModal().should('be.visible').within(() =>{
            modal.getModalLink().click({ force: true })
        })
        //SIGN UP NEW USER
        cy.signUpNewUser()
    })

    it('[AE-T18] - User Is Able To See The Payment Page And Click On The Pay And Confirm Button', function () {
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })

        //CLICK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().should('be.visible').click({ force: true })

        //TYPE OUT A MESSAGE
        checkout.getOrderMessageField().type(messagesData.MESSAGE)

        //CLICK ON THE PLACE ORDER BUTTON
        checkout.getPlaceOrderButton().click({ force: true })

        //GET HEADING
        payment.getHeading().should('be.visible')

        //GET PAYMENT INFORMATION
        payment.getPaymentInformation().should('be.visible')

        //NAME CARD
        payment.getNameCard().should('be.visible').type(paymentMethodData.NAME)

        //CARD NUMBER
        payment.getCardNumber().should('be.visible').type(paymentMethodData.CARD_NUMBER)

        //CVC
        payment.getCVC().should('be.visible').type(paymentMethodData.CVC)

        //EXPIRATION MONTH
        payment.getExpirationMonth().should('be.visible').type(paymentMethodData.EXPIRATION_MONTH)

        //EXPIRATION YEAR
        payment.getExpirationYear().should('be.visible').type(paymentMethodData.EXPIRATION_YEAR)

        //CLICK ON THE PAY AND CONFIRM ORDER
        payment.getPayConfirmButton().should('be.visible').click({ force: true })
    })
})