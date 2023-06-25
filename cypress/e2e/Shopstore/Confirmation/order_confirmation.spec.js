import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { signIn } from '../../../components/Shopstore/Sign In/sign-in-component';
import { orderConfirmation } from '../../../components/Shopstore/Confirmation/order-confirmation-component';
import { checkout } from '../../../components/Shopstore/Checkout/checkout-component';
import { home } from '../../../components/Shopstore/Home/home-component';
import { modal } from '../../../components/Shopstore/Common/modal-component';


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

    it('[TXX] - User Is Able To See The Order Confirmation', function () {
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })

        //CLICK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().should('be.visible').click({ force: true })

        //TYPE OUT A MESSAGE
        checkout.getOrderMessageField().type('Please, if it is possible to give me dresses different colors. Thanks you!')

        //CLICK ON THE PLACE ORDER BUTTON
        checkout.getPlaceOrderButton().click({ force: true })

        //ADD PAYMENT METHOD
        cy.newPaymentMethod()

        //ORDER PLACED HEADING
        orderConfirmation.getOrderPlacedHeading().should('be.visible')

        //ORDER PLACED PARAGRAPH
        orderConfirmation.getOrderPlacedParagraph().should('be.visible')

        //VALIDATE THE LINKS STATUS
        orderConfirmation.getOrderPlacedLinks().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CLICK ON THE CONTINUE BUTTON
        orderConfirmation.getContinueButton().should('be.visible').click({ force: true })

        //CLICK ON THE LOG OUT
        home.getHeaderLogOutOption().should('be.visible').click({ force: true })
    })
})