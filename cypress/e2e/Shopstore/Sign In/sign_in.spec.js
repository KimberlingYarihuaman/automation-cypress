import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { signIn } from '../../../components/Shopstore/Sign In/sign-in-component';
import { modal } from '../../../components/Common/modal-component';

describe('Sign In Tests', () => {

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

    it('[TXX] - User Is Able To Click On The Shopping Cart Is Localized In The Header', function () {
        //VALIDATE THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })
    })

    it('[TXX] - User Is Able To Checkout Button In The Sign In', function () {
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })

        //CLICK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().should('be.visible').click({ force: true })
    })
})