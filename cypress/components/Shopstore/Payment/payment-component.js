export const payment = {
    getHeading: () => {
        return cy.get('.heading')
    },
    getPaymentInformation: () => {
        return cy.get('.payment-information')
    },
    getNameCard: () => {
        return cy.get('[data-qa="name-on-card"]')
    },
    getCardNumber: () => {
        return cy.get('[data-qa="card-number"]')
    },
    getCVC: () => {
        return cy.get('[data-qa="cvc"]')
    },
    getExpirationMonth: () => {
        return cy.get('[data-qa="expiry-month"]')
    },
    getExpirationYear: () => {
        return cy.get('[data-qa="expiry-year"]')
    },
    getPayConfirmButton: () => {
        return cy.get('[data-qa="pay-button"]')
    }
}