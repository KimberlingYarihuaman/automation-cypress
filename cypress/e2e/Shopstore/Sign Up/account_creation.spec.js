import { createAccount } from '../../../components/Shopstore/Sign Up/account-creation-component';
import { edgeData, filesPaths, signUpData, verifyMessages } from '../../../components/Shopstore/Common/data-provider';
import { label } from '../../../components/Common/label-component';

describe('Sign Up Tests', () => {

    beforeEach(function () {
        cy.visit('/login');
    })

    it('[AE-T10] - User Is Able To See The Log In Section', function () {
        //HEADING
        createAccount.getLogInHeading().should('be.visible')

        //EMAIL FIELD
        createAccount.getLogInEmailField().should('be.visible')

        //PASSWORD FIELD
        createAccount.getLogInPasswordField().should('be.visible')

        //LOGIN BUTTON
        createAccount.getLogInButton().should('be.visible')
    })

    it('[AE-T38] - User Is Able To See The Log In Section', function () {
        let name = signUpData.NAME
        //EMAIL FIELD
        createAccount.getLogInEmailField().type(signUpData.getEmail(name))

        //PASSWORD FIELD
        createAccount.getLogInPasswordField().type(edgeData.PASSWORD)

        //LOGIN BUTTON
        createAccount.getLogInButton().should('be.visible').click({ force: true})

        //SHOW ERROR MESSAGE
        createAccount.getLoginErrorMessage(verifyMessages.INCORRECT_EMAIL_PASSWORD).should('be.visible')
    })

    it('[AE-T10] - User Is Able To See The Sign Up Section', function () {
        //HEADING
        createAccount.getSignUpHeading().should('be.visible')

        //NAME FIELD
        createAccount.getSignUpNameField().should('be.visible')

        //EMAIL FIELD
        createAccount.getSignUpEmailField().should('be.visible')

        //SIGN UP BUTTON
        createAccount.getSignUpButton().should('be.visible')
    })

    it('[AE-T16,T18,T20,T21,T22] - User Is Able To Fillout The Form And Click On The Sign Up Button', function () {
        let name, email
        //NAME
        name = signUpData.NAME
        createAccount.getSignUpNameField().type(name)

        //EMAIL
        email = signUpData.getEmail(name)
        createAccount.getSignUpEmailField().type(email)

        //SIGN UP BUTTON
        createAccount.getSignUpButton().click({ force: true })

        //FILL OUT THE ACCOUNT INFORMATION
        createAccount.getAccountInformationHeading().should('be.visible')
        .its('length').should('eq', 2)

        //TITLE
        createAccount.getMrsOption().should('be.visible').check()

        //CHANGE THE NAME
        createAccount.getAccountInformationNameField()
        .should('be.visible')
        .and('not.be.undefined')
        .and('not.be.null')
        .type(signUpData.CHANGED_NAME)

        //PREFILLED EMAIL
        createAccount.getAccountInformationEmailField()
        .should('be.visible')
        .and('not.be.undefined')
        .and('not.be.null')
        .and('have.attr', 'disabled','disabled')

        //PASSWORD
        createAccount.getAccountInformationPasswordField().should('be.visible').type(signUpData.PASSWORD)

        //DAYS FIELD
        createAccount.getAccountInformationDaysField().should('be.visible').select(signUpData.DAYS)
        .should('have.value', signUpData.DAYS)

        //MONTHS FIELD
        createAccount.getAccountInformationMonthsField().should('be.visible').select(signUpData.MONTH)

        //YEARS FIELD
        createAccount.getAccountInformationYearsField().should('be.visible').select(signUpData.YEARS)

        //FIRST NAME
        createAccount.getAddressInformationFirstName().should('be.visible').type(signUpData.FIRST_NAME)

        //LAST NAME
        createAccount.getAddressInformationLastName().should('be.visible').type(signUpData.LAST_NAME)

        //COMPANY
        createAccount.getAddressInformationCompany().should('be.visible').type(signUpData.COMPANY)

        //ADDRESS 1
        createAccount.getAddressInformationAddress1().should('be.visible').type(signUpData.ADDRESS_1)

        //ADDRESS 2
        createAccount.getAddressInformationAddress2().should('be.visible').type(signUpData.ADDRESS_2)

        //COUNTRY
        createAccount.getAddressInformationCountry().should('be.visible').select(signUpData.COUNTRY)
        .should('have.value', signUpData.COUNTRY)

        //STATE
        createAccount.getAddressInformationState().should('be.visible').type(signUpData.STATE)

        //CITY
        createAccount.getAddressInformationCity().should('be.visible').type(signUpData.CITY)

        //ZIP CODE
        createAccount.getAddressInformationZipCode().should('be.visible').type(signUpData.ZIP_CODE)

        //MOBILE NUMBER
        createAccount.getAddressInformationMobileNumber().should('be.visible').type(signUpData.MOBILE_NUMBER)

        //CREATE ACCOUNT BUTTON
        createAccount.getCreateAccountButton().click({ force: true })

        //SEE THE LOG IN PAGE
        createAccount.getCreatedAccountHeading(verifyMessages.CREATED_ACCOUNT).should('be.visible')

        //SEE THE PARAGRAPHS
        createAccount.getCreatedAccountParagraphs().should('be.visible')
        .its('length').should('eq', 2)

        //SAVE THE EMAIL AND PASSWORD
        cy.writeFile(filesPaths.FIXTURES_LOGIN, {email, password: signUpData.PASSWORD, name: signUpData.NAME})

        //VALIDATE LINK STATUS
        createAccount.getContinueButton().should('be.visible')
        .should("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })
        //CLICK ON THE CONTINUE BUTTON
        createAccount.getContinueButton().click({ force: true })
    })

    it('[AE-T12,T20] - User Is Able To Enter Special Characters And Numbers In Name Field And Click On Sign Up Button', function () {
        //NAME
        let name = edgeData.GENERAL_EDGE_DATA
        createAccount.getSignUpNameField().type(name)

        //EMAIL
        createAccount.getSignUpEmailField().type(signUpData.getEmail(name))

        //SIGN UP BUTTON
        createAccount.getSignUpButton().click({ force: true })

        //FILL OUT THE ACCOUNT INFORMATION
        createAccount.getAccountInformationHeading().should('be.visible')
    })

    it('[AE-T19,T20] - User Clicks On Create Account Button And Only Completes The Required Fields', function () {
        let name, email
        //NAME
        name = signUpData.NAME
        createAccount.getSignUpNameField().type(name)

        //EMAIL
        email = signUpData.getEmail(name)
        createAccount.getSignUpEmailField().type(email)

        //SIGN UP BUTTON
        createAccount.getSignUpButton().click({ force: true })

        //FILL OUT THE ACCOUNT INFORMATION
        createAccount.getAccountInformationHeading().should('be.visible')

        //PASSWORD
        createAccount.getAccountInformationPasswordField().should('be.visible').type(signUpData.PASSWORD)

        //FIRST NAME
        createAccount.getAddressInformationFirstName().should('be.visible').type(signUpData.FIRST_NAME)

        //LAST NAME
        createAccount.getAddressInformationLastName().should('be.visible').type(signUpData.LAST_NAME)

        //ADDRESS 1
        createAccount.getAddressInformationAddress1().should('be.visible').type(signUpData.ADDRESS_1)

        //COUNTRY
        createAccount.getAddressInformationCountry().should('be.visible').select(signUpData.COUNTRY)
        .should('have.value', signUpData.COUNTRY)

        //STATE
        createAccount.getAddressInformationState().should('be.visible').type(signUpData.STATE)

        //CITY
        createAccount.getAddressInformationCity().should('be.visible').type(signUpData.CITY)

        //ZIP CODE
        createAccount.getAddressInformationZipCode().should('be.visible').type(signUpData.ZIP_CODE)

        //MOBILE NUMBER
        createAccount.getAddressInformationMobileNumber().should('be.visible').type(signUpData.MOBILE_NUMBER)

        //CREATE ACCOUNT BUTTON
        createAccount.getCreateAccountButton().click({ force: true })

        //SEE THE LOG IN PAGE
        createAccount.getCreatedAccountHeading(verifyMessages.CREATED_ACCOUNT).should('be.visible')

        //SAVE THE EMAIL AND PASSWORD
        cy.writeFile(filesPaths.FIXTURES_LOGIN, {email, password: signUpData.PASSWORD, name: signUpData.NAME})
    })


    it('[AE-T15] - User Is Able To Fill Out The New User Sign Up Form (With A Registered Account) And Click On Sign Up Button', function () {
        cy.readFile(filesPaths.FIXTURES_LOGIN).then((json) => {
            //NAME
            createAccount.getSignUpNameField(json.name).should('be.visible').type(json.name)

            //EMAIL
            createAccount.getSignUpEmailField().should('be.visible').type(json.email)
            
            //CLICK ON THE LOGIN BUTTON
            createAccount.getSignUpButton().should('be.visible').click({ force: true })

            //SHOWS A VALIDATION MESSAGE
            label.getGeneralComponentByText(verifyMessages.EXISTING_EMAIL).should('be.visible')
        })
    })
})