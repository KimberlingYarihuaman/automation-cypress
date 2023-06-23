export const cartSummary = {
    getCartInformation: () => {
        return cy.get('[id="cart_info_table"]')
    }
}