export const signIn = {
    getShoppingCartButton: () => {
        return cy.get('.nav.navbar-nav').children().eq(2).find('a')
    },
    getHeaderUserName: (text) => {
        return cy.get('a>b').contains(text)
    }
}