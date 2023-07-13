import { productDetails } from '../../../components/Shopstore/Product Details/product-details-component';
import { modal } from '../../../components/Shopstore/Common/modal-component';
import { edgeData, productData } from '../../../components/Shopstore/Common/data-provider';


describe('Product Details Tests', () => {

    beforeEach(function () {
        cy.visit('/product_details/' + productData.getRandomProduct())
    })

    it('[AE-T2] - User Is Able To See The Product Detail', function () {
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

    it('[AE-T2,T3,T4] - User Is Able To Type Out A Value Into The Quantity Field And Click On Add To Cart Button', function () {
        //TYPE OUT A VALUE
        productDetails.getQuantityField().click({ force: true })
        .clear()
        .type(productData.CHOSEN_QUANTITY)
        
        //CLICK ON THE ADD TO CART BUTTON
        productDetails.getAddToCart().should('be.visible').click({ force: true })

        //SEE THE ADDED MODAL
        cy.externalModal()
    })

    it('[AE-T2,T3,T4] - User Is Able To Type Out A Negative Value Into The Quantity Field And Click On Add To Cart Button', function () {
        //TYPE OUT A VALUE
        productDetails.getQuantityField().click({ force: true })
        .clear()
        .type(edgeData.NEGATIVE_QUANTITY)
        
        //CLICK ON THE ADD TO CART BUTTON
        productDetails.getAddToCart().should('be.visible').click({ force: true })

        //SEE THE ADDED MODAL
        cy.externalModal()
    })
})