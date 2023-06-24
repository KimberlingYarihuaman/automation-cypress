export const checkout = {
    getBreadcrumb: () => {
        return cy.get('ol.breadcrumb')
    },
    getBreadcrumbLink: () => {
        return cy.get('ol.breadcrumb').children().eq(0).find('a')
    },
    getHeading: () => {
        return cy.get('h2.heading')
    },
    getCheckOutInformation: () => {
        return cy.get('[data-qa="checkout-info"]')
    },
    getAddressDeliveryInformation: () => {
        return cy.get('[id="address_delivery"]').children()
    },
    getAddressInvoiceInformation: () => {
        return cy.get('[id="address_invoice"]').children()
    },
    getCartInformation: () => {
        return cy.get('[id="cart_info"]')
    },
    getOrderMessage: () => {
        return cy.get('[id="ordermsg"]')
    },
    getOrderMessageParagraph: () => {
        return cy.get('[id="ordermsg"]').find('label')
    },
    getOrderMessageField: () => {
        return cy.get('[name="message"]')
    },
    getPlaceOrderButton: () => {
        return cy.get('[id="ordermsg"]').next().find('a')
    }
}