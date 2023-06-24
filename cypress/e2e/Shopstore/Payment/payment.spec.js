import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { signIn } from '../../../components/Shopstore/Sign In/sign-in-component';
import { payment } from '../../../components/Shopstore/Payment/payment-component';
import { modal } from '../../../components/Common/modal-component';
import { checkout } from '../../../components/Shopstore/Checkout/checkout-component';

describe('Payment Tests', () => {

    beforeEach(function () {
        //ADD A NEW PRODUCT
        cy.addNewProduct(21)
        //CLICK ON PROCEED TO CHECKOUT
        cartSummary.getCheckOutButton().click({ force: true })
        //CLICK ON THE REGISTER/LOGIN
        modal.getModal().should('be.visible').within(() =>{
            modal.getModalLink().click({ force: true })
        })
        //SIGN UP NEW USER
        cy.signUpNewUser()
    })

    it('[TXX] - User Is Able To See The Payment Page', function () {
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })

        //CLICK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().should('be.visible').click({ force: true })

        //TYPE OUT A MESSAGE
        checkout.getOrderMessageField().type('Please, if it is possible to give me dresses different colors. Thanks you!')

        //CLICK ON THE PLACE ORDER BUTTON
        checkout.getPlaceOrderButton().click({ force: true })

        //GET HEADING
        payment.getHeading().should('be.visible')

        //GET PAYMENT INFORMATION
        payment.getPaymentInformation().should('be.visible')

        //NAME CARD
        payment.getNameCard().should('be.visible').type('Kimberling Yarihuaman')

        //CARD NUMBER
        payment.getCardNumber().should('be.visible').type('4321567890121234')

        //CVC
        payment.getCVC().should('be.visible').type('346')

        //EXPIRATION MONTH
        payment.getExpirationMonth().should('be.visible').type('12')

        //EXPIRATION YEAR
        payment.getExpirationYear().should('be.visible').type('2029')

        //CLICK ON THE PAY AND CONFIRM ORDER
        payment.getPayConfirmButton().should('be.visible').click({ force: true })
    })
})