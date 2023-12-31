export const cartSummary = {
    getBreadcrumb: () => {
        return cy.get('ol.breadcrumb')
    },
    getBreadcrumbLink: () => {
        return cy.get('ol.breadcrumb').children().eq(0).find('a')
    },
    getCartInformation: () => {
        return cy.get('[id="cart_info_table"]')
    },
    getTableHeader: () => {
        return cy.get('.cart_menu').children()
    },
    getTableBody: () => {
        return cy.get('tbody>tr').children()
    },
    getProductLink: () => {
        return cy.get('h4').children()
    },
    getDeleteButton: () => {
        return cy.get('.cart_quantity_delete')
    },
    getCheckOutButton: () => {
        return cy.get('.btn.btn-default.check_out')
    }
}