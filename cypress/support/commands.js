import { productDetails } from '../components/Shopstore/Product Details/product-details-component.js'
import { modal } from '../components/Common/modal-component.js'

//VALIDATE THE LINK STATUS
Cypress.Commands.add('pageReturnValidStatus', (url) => {
    return cy
      .request({
        url: url,
        failOnStatusCode: false,
      })
      .then((resp) => {
        const validStatusCodes = [200, 201];
        expect(resp.status).to.be.oneOf(validStatusCodes);
      });
});

//ADD A NEW PRODUCT
Cypress.Commands.add('addNewProduct', (productNumber) => {
    //GO TO THE WEBSITE
    cy.visit('/product_details/' + productNumber)

    //TYPE OUT A VALUE
    productDetails.getQuantityField().click({ force: true })
    .clear()
    .type('30')
    
    //CLICK ON THE ADD TO CART BUTTON
    productDetails.getAddToCart().click({ force: true })

    //SEE THE ADDED MODAL
    modal.getModal().should('be.visible').within(() =>{
       //CLICK ON THE VIEW CART
        modal.getModalLink().click({ force: true })
    })
});