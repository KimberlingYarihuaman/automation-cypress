import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { signIn } from '../../../components/Shopstore/Sign In/sign-in-component';
import { modal } from '../../../components/Common/modal-component';
import { checkout } from '../../../components/Shopstore/Checkout/checkout-component';

describe('Checkout Tests', () => {

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

    it('[TXX] - User Is Able To See The Address Details And Review Your Order Sections', function () {
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })

        //CLICK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().should('be.visible').click({ force: true })

        //GET THE BREADCRUMB
        checkout.getBreadcrumb().should('be.visible')

        //VALIDATE THE LINK OF THE BREADCRUMB
        checkout.getBreadcrumbLink().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //HEADING
        checkout.getHeading().should('be.visible')
        .its('length').should('eq', 2)

        //CHECKOUT INFORMATION
        checkout.getCheckOutInformation().should('be.visible')

        //GET ADDRESS DELIVERY INFORMATION
        checkout.getAddressDeliveryInformation().should('be.visible')
        .its('length').should('eq', 8)

        //GET ADDRESS INVOICE INFORMATION
        checkout.getAddressInvoiceInformation().should('be.visible')
        .its('length').should('eq', 8)

        //GET CARD INFORMATION
        checkout.getCartInformation().should('be.visible')

        //GET ORDER MESSAGE
        checkout.getOrderMessage().should('be.visible')

        //TITLE OF THE ORDER MESSAGE
        checkout.getOrderMessageParagraph().should('be.visible')

        //TYPE OUT A MESSAGE
        checkout.getOrderMessageField().should('be.visible')
        .type('Please, if it is possible to give me dresses different colors. Thanks you!')

        //VALIDATE THE PLACE ORDER BUTTON
        checkout.getPlaceOrderButton().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CLICK ON THE PLACE ORDER BUTTON
        checkout.getPlaceOrderButton().click({ force: true })
    })
})