import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { modal } from '../../../components/Shopstore/Common/modal-component';

describe('Cart And Cart Summary Tests', () => {

    beforeEach(function () {
        //ADD A NEW PRODUCT IN ORDER TO GO THE VIEW CART WEBSITE
        cy.addNewProduct(21)
    })

    it('[TXX] - User Is Able To See The Cart Summary', function () {
        //GET THE CART INFORMATION
        cartSummary.getCartInformation().should('be.visible')

        //VALIDATE THE TABLE HEADER
        cartSummary.getTableHeader().should('be.visible')
        .its('length').should('eq', 6)

        //VALIDATE THE TABLE BODY
        cartSummary.getTableBody().should('be.visible')
        .its('length').should('eq', 6)

        //VALIDATE PRODUCT LINK
        cartSummary.getProductLink().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CHECKOUT BUTTON
        cartSummary.getCheckOutButton().should('be.visible')

        //DELETE BUTTON
        cartSummary.getDeleteButton().should('be.visible')
    })

    it('[TXX] - User Is Able To Click On The Delete Button', function () {
        //CLIK ON THE DELETE BUTTON
        cartSummary.getDeleteButton().click({ force: true })

        //THE TABLE INFORMATION IS NOT VISIBLE
        cartSummary.getCartInformation().should('not.be.visible')
    })

    it('[TXX] - User Is Able To Click On The Proceed To Checkout Button', function () {
        //CLIK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().click({ force: true })

         //SEE THE CHECKOUT MODAL
         modal.getModal().should('be.visible').within(() =>{
            //HEADER
            modal.getModalHeader().should('be.visible')
            modal.getModalHeaderIcon().should('be.visible')

            //BODY
            modal.getModalBody().should('be.visible')
            modal.getModalText().should('be.visible')
            modal.getModalLink().should('be.visible')
            .and("have.attr", "href").then((href) => {
                cy.pageReturnValidStatus(href);
            })

            //FOOTER
            modal.getModalFooter().should('be.visible')
            modal.getModalButton().should('be.visible')
        })
    })
})