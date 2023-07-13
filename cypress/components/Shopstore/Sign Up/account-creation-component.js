export const createAccount = {
    getLogInHeading: () => {
        return cy.get('.login-form').find('h2')
    },
    getLogInEmailField: () => {
        return cy.get('[data-qa="login-email"]')
    },
    getLogInPasswordField: () => {
        return cy.get('[data-qa="login-password"]')
    },
    getLogInButton: () => {
        return cy.get('[data-qa="login-button"]')
    },
    getSignUpHeading: () => {
        return cy.get('.signup-form').find('h2')
    },
    getSignUpNameField: () => {
        return cy.get('[data-qa="signup-name"]')
    },
    getSignUpEmailField: () => {
        return cy.get('[data-qa="signup-email"]')
    },
    getSignUpButton: () => {
        return cy.get('[data-qa="signup-button"]')
    },
    getAccountInformationHeading: () => {
        return cy.get('.title.text-center')
    },
    getMrOption: () => {
        return cy.get('[id="id_gender1"]')
    },
    getMrsOption: () => {
        return cy.get('[id="id_gender2"]')
    },
    getAccountInformationNameField: () => {
        return cy.get('[data-qa="name"]')
    },
    getAccountInformationEmailField: () => {
        return cy.get('[data-qa="email"]')
    },
    getAccountInformationPasswordField: () => {
        return cy.get('[data-qa="password"]')
    },
    getAccountInformationDaysField: () => {
        return cy.get('[data-qa="days"]')
    },
    getAccountInformationMonthsField: () => {
        return cy.get('[data-qa="months"]')
    },
    getAccountInformationYearsField: () => {
        return cy.get('[data-qa="years"]')
    },
    getNewsLetterOption: () => {
        return cy.get('[id="newsletter"]')
    },
    getSpecialOffersOption: () => {
        return cy.get('[id="optin"]')
    },
    getAddressInformationFirstName: () => {
        return cy.get('[data-qa="first_name"]')
    },
    getAddressInformationLastName: () => {
        return cy.get('[data-qa="last_name"]')
    },
    getAddressInformationCompany: () => {
        return cy.get('[data-qa="company"]')
    },
    getAddressInformationAddress1: () => {
        return cy.get('[data-qa="address"]')
    },
    getAddressInformationAddress2: () => {
        return cy.get('[data-qa="address2"]')
    },
    getAddressInformationCountry: () => {
        return cy.get('[data-qa="country"]')
    },
    getAddressInformationState: () => {
        return cy.get('[data-qa="state"]')
    },
    getAddressInformationCity: () => {
        return cy.get('[data-qa="city"]')
    },
    getAddressInformationZipCode: () => {
        return cy.get('[data-qa="zipcode"]')
    },
    getAddressInformationMobileNumber: () => {
        return cy.get('[data-qa="mobile_number"]')
    },
    getCreateAccountButton: () => {
        return cy.get('[data-qa="create-account"]')
    },
    getCreatedAccountHeading: (text) => {
        return cy.get('h2').children().contains(text)
    },
    getContinueButton: () => {
        return cy.get('[data-qa="continue-button"]')
    },
    getCreatedAccountParagraphs: () => {
        return cy.get('[id="form"]').find('p')
    },
    getLoginErrorMessage: (text) => {
        return cy.get('form>p').contains(text)
    }
}