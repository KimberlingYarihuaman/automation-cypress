import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { signIn } from '../../../components/Shopstore/Sign In/sign-in-component';
import { checkout } from '../../../components/Shopstore/Checkout/checkout-component';
import { modal } from '../../../components/Shopstore/Common/modal-component';
import { messagesData, productData } from '../../../components/Shopstore/Common/data-provider';

describe('Checkout Tests', () => {

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

    it('[AE-T15,T16,T17] - User Is Able To See The Address Details, Review Your Order Sections And Click On The Place Order Button', function () {
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
        .type(messagesData.MESSAGE)

        //VALIDATE THE PLACE ORDER BUTTON
        checkout.getPlaceOrderButton().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CLICK ON THE PLACE ORDER BUTTON
        checkout.getPlaceOrderButton().click({ force: true })
    })
})