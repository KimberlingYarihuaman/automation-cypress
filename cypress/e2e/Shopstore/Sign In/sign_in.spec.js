import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { home } from '../../../components/Shopstore/Home/home-component';
import { signIn } from '../../../components/Shopstore/Sign In/sign-in-component';
import { modal } from '../../../components/Shopstore/Common/modal-component';
import { productData } from '../../../components/Shopstore/Common/data-provider';

describe('Validations About The Sign In Page Tests', () => {

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

    it('[AE-T23] - User Is Able To Click On The Shopping Cart Is Localized In The Header', function () {
        //VALIDATE THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })
    })

    it('[AE-T25] - User Is Able To Checkout Button In The Sign In', function () {
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })

        //CLICK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().should('be.visible').click({ force: true })
    })

    it('[AE-T24] - User Is Able To Click On The Delete Button In The Sign In', function () {
        //CLICK ON THE SHOPPING CART BUTTON
        signIn.getShoppingCartButton().click({ force: true })

        //CLIK ON THE DELETE BUTTON
        cartSummary.getDeleteButton().click({ force: true })

        //THE TABLE INFORMATION IS NOT VISIBLE
        cartSummary.getCartInformation().should('not.be.visible')
    })
})

describe('Log In Page Tests', () => {

    beforeEach(function () {
       cy.Login()
    })

    it('[AE-T39,T40] - User Is Able To Log In With The Created Previously User And Click On The Contact Us', function () {
       //VALIDATE THE LINK STATUS
       home.getHeaderContactUsOption().should('be.visible')
       .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CLICK ON THE CONTACT US LINK
        home.getHeaderContactUsOption().click({ force: true })

        //SHOW THE CONTACT US PAGE
        cy.url().should('include', '/contact_us')
    })
})