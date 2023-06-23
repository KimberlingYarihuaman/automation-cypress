import { productDetails } from '../../../components/Shopstore/Product Details/product-details-component';
import { modal } from '../../../components/Common/modal-component';


describe('Product Details Tests', () => {

    beforeEach(function () {
        cy.visit('/product_details/21');
    })

    it('[TXX] - User Is Able To See The Product Detail', function () {
        //GET PRODUCT
        productDetails.getProduct().should('be.visible')

        //IMAGE PRODUCT AND STAR RATING
        productDetails.getProductImages().should('be.visible')
        .its('length').should('eq', 3)

        //TITLE PRODUCT
        productDetails.getTitleProduct().should('be.visible')

        //CATEGORY PRODUCT
        productDetails.getCategoryProduct().should('be.visible')

        //PRICE
        productDetails.getPriceProduct().should('be.visible')

        //QUANTITY FIELD
        productDetails.getQuantityLabel().should('be.visible')
        productDetails.getQuantityField().should('be.visible')

        //ADD TO CART
        productDetails.getAddToCart().should('be.visible')

        //GET ADDITIONAL INFORMATION
        productDetails.getAdditionalInformation().should('be.visible')
    })

    it('[TXX] - User Is Able To Type Out A Value Into The Quantity Field And Click On Add To Cart Button', function () {
        //TYPE OUT A VALUE
        productDetails.getQuantityField().click({ force: true })
        .clear()
        .type('30')
        
        //CLICK ON THE ADD TO CART BUTTON
        productDetails.getAddToCart().should('be.visible').click({ force: true })

        //SEE THE ADDED MODAL
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