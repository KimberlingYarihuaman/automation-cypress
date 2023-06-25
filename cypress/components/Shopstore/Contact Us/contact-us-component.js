export const contactUs = {
    getContactUsForm: () => {
        return cy.get('.contact-form')
    },
    getContactInfo: () => {
        return cy.get('.contact-info').children()
    },
    getContactUsHeader: () => {
        return cy.get('h2.title.text-center')
    },
    getContactUsNote: () => {
        return cy.get('.contact-form').children().eq(0)
    },
    getNameField: () => {
        return cy.get('[data-qa="name"]')
    },
    getEmailField: () => {
        return cy.get('[data-qa="email"]')
    },
    getSubjectField: () => {
        return cy.get('[data-qa="subject"]')
    },
    getMessageField: () => {
        return cy.get('[data-qa="message"]')
    },
    getMessageField: () => {
        return cy.get('[data-qa="message"]')
    },
    getSubmitButton: () => {
        return cy.get('[data-qa="submit-button"]')
    },
    getUploadFileButton: () => {
        return cy.get('[name="upload_file"]')
    },
    getAlertSuccess: () => {
        return cy.get('.status.alert.alert-success')
    },
    getHomeButton: () => {
        return cy.get('.btn.btn-success')
    }    
}