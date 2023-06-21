export const label = {
    getH1heading: (text) => {
        return cy.contains('h1', text)
    },
    getH2heading: (text) => {
        return cy.contains('h2', text)
    },
    getH3heading: (text) => {
        return cy.contains('h3', text)
    },
    getH4heading: (text) => {
        return cy.contains('h4', text)
    },
    getH5heading: (text) => {
        return cy.contains('h5', text)
    },
    getGeneralComponentByText: (text) => {
        return cy.contains(text)
    }
}