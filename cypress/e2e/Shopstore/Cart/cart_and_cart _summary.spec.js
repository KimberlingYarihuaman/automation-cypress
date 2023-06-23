import { cartSummary } from '../../../components/Shopstore/Cart/cart-and-cart -summary-component';

describe('Cart And Cart Summary Tests', () => {

    beforeEach(function () {
        //ADD A NEW PRODUCT IN ORDER TO GO THE VIEW CART WEBSITE
        cy.addNewProduct(21)
    })

    it('[TXX] - User Is Able To See The Cart Summary', function () {
        //GET THE CART INFORMATION
        cartSummary.getCartInformation().should('be.visible')
    })
})