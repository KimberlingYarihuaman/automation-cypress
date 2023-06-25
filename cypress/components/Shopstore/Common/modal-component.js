export const modal = {
    getModal: () =>{
        return cy.get('.modal-content')
    },
    getModalHeader: () => {
        return cy.get('.modal-header')
    },
    getModalHeaderIcon: () => {
        return cy.get('i')
    },
    getModalBody: () => {
        return cy.get('.modal-body')
    },
    getModalText: () => {
        return cy.get('p')
    },
    getModalLink: () => {
        return cy.get('a')
    },
    getModalFooter: () => {
        return cy.get('.modal-footer')
    },
    getModalButton: () => {
        return cy.get('[data-dismiss="modal"]')
    }
}