export const orderConfirmation = {
    getOrderPlacedHeading: () => {
        return cy.get('[data-qa="order-placed"]')
    },
    getOrderPlacedParagraph: () => {
        return cy.get('[data-qa="order-placed"]').next()
    },
    getOrderPlacedLinks: () => {
        return cy.get('.container').eq(1).find('a')
    },
    getContinueButton: () => {
        return cy.get('[data-qa="continue-button"]')
    }
}