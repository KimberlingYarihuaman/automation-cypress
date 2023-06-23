export const productDetails = {
    getProduct: () => {
        return cy.get('.product-details')
    },
    getTitleProduct: () => {
        return cy.get('.product-details').find('h2')
    },
    getCategoryProduct: () => {
        return cy.get('.product-details').find('p')
    },
    getPriceProduct: () => {
        return cy.get('.product-details').find('span')
    },
    getQuantityLabel: () => {
        return cy.get('.product-details').find('label')
    },
    getQuantityField: () => {
        return cy.get('[id="quantity"]')
    },
    getAddToCart: () => {
        return cy.get('.product-details').find('[type="button"]')
    },
    getAdditionalInformation: () => {
        return cy.get('.product-details').find('b')
    },
    getProductImages: () => {
        return cy.get('.product-details').find('img')  
    }
}