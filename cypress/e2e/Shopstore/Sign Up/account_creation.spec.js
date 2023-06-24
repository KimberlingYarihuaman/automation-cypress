import { createAccount } from '../../../components/Shopstore/Sign Up/account-creation-component';
import { generatorEmails } from '../../../components/Common/generate-email-component';


describe('Sign Up Tests', () => {

    beforeEach(function () {
        cy.visit('/login');
    })

    it('[TXX] - User Is Able To See The Log In Section', function () {
        //HEADING
        createAccount.getLogInHeading().should('be.visible')

        //EMAIL FIELD
        createAccount.getLogInEmailField().should('be.visible')

        //PASSWORD FIELD
        createAccount.getLogInPasswordField().should('be.visible')

        //LOGIN BUTTON
        createAccount.getLogInButton().should('be.visible')
    })

    it('[TXX] - User Is Able To See The Sign Up Section', function () {
        //HEADING
        createAccount.getSignUpHeading().should('be.visible')

        //NAME FIELD
        createAccount.getSignUpNameField().should('be.visible')

        //EMAIL FIELD
        createAccount.getSignUpEmailField().should('be.visible')

        //SIGN UP BUTTON
        createAccount.getSignUpButton().should('be.visible')
    })

    it('[TXX] - User Is Able To Fillout The Form And Click On The Sign Up Button', function () {
        //NAME
        createAccount.getSignUpNameField().type('Kimberling')

        //EMAIL
        createAccount.getSignUpEmailField().type(generatorEmails.getGenerateEmail())

        //SIGN UP BUTTON
        createAccount.getSignUpButton().click({ force: true })

        //FILL OUT THE ACCOUNT INFORMATION
        createAccount.getAccountInformationHeading().should('be.visible')
        .its('length').should('eq', 2)

        //TITLE
        createAccount.getMrsOption().should('be.visible').check()

        //CHANGE THE NAME
        createAccount.getAccountInformationNameField().should('be.visible').type(' Graciela')

        //PREFILLED EMAIL
        createAccount.getAccountInformationEmailField().should('be.visible')
        .and('have.attr', 'disabled','disabled')

        //PASSWORD
        createAccount.getAccountInformationPasswordField().should('be.visible').type('Kim1234567!')

        //DAYS FIELD
        createAccount.getAccountInformationDaysField().should('be.visible').select('23')
        .should('have.value', '23')

        //MONTHS FIELD
        createAccount.getAccountInformationMonthsField().should('be.visible').select('March')
        .should('have.value', '3')

        //YEARS FIELD
        createAccount.getAccountInformationYearsField().should('be.visible').select('1997')
        .should('have.value', '1997')

        //FIRST NAME
        createAccount.getAddressInformationFirstName().should('be.visible').type('Kim')

        //LAST NAME
        createAccount.getAddressInformationLastName().should('be.visible').type('Yarihuaman')

        //COMPANY
        createAccount.getAddressInformationCompany().should('be.visible').type('Apply Digital')

        //ADDRESS 1
        createAccount.getAddressInformationAddress1().should('be.visible').type('Av Sur 0')

        //ADDRESS 2
        createAccount.getAddressInformationAddress2().should('be.visible').type('0 Avenue in Surrey, B.C')

        //COUNTRY
        createAccount.getAddressInformationCountry().should('be.visible').select('Canada')
        .should('have.value', 'Canada')

        //STATE
        createAccount.getAddressInformationState().should('be.visible').type('Ontario')

        //CITY
        createAccount.getAddressInformationCity().should('be.visible').type('Toronto')

        //ZIP CODE
        createAccount.getAddressInformationZipCode().should('be.visible').type('L4K - M9W')

        //MOBILE NUMBER
        createAccount.getAddressInformationMobileNumber().should('be.visible').type('+6470987654')

        //CREATE ACCOUNT BUTTON
        createAccount.getCreateAccountButton().click({ force: true })

        //SEE THE LOG IN PAGE
        createAccount.getCreatedAccountHeading("Account Created!").should('be.visible')
    })
})