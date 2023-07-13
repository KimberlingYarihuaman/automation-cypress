import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';
import { productData } from '../../../components/Shopstore/Common/data-provider';


describe('Cart And Cart Summary Tests', () => {

    beforeEach(function () {
        //ADD A NEW PRODUCT
        cy.addNewProduct(productData.getRandomProduct())
    })

    it('[AE-T7] - User Is Able To See The Cart Summary', function () {
        //GET THE BREADCRUMB
        cartSummary.getBreadcrumb().should('be.visible')

        //VALIDATE THE LINK OF THE BREADCRUMB
        cartSummary.getBreadcrumbLink().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
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

    it('[AE-T8] - User Is Able To Click On The Delete Button', function () {
        //CLIK ON THE DELETE BUTTON
        cartSummary.getDeleteButton().click({ force: true })

        //THE TABLE INFORMATION IS NOT VISIBLE
        cartSummary.getCartInformation().should('not.be.visible')
    })

    it('[AE-T9,T10] - User Is Able To Click On The Proceed To Checkout Button', function () {
        //CLIK ON THE PROCEED TO CHECKOUT BUTTON
        cartSummary.getCheckOutButton().click({ force: true })

        //SEE THE CHECKOUT MODAL
        cy.externalModal()
    })
})