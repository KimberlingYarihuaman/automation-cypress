import { productDetails } from '../components/Shopstore/Product Details/product-details-component.js'
import { payment } from '../components/Shopstore/Payment/payment-component.js'
import { createAccount } from '../components/Shopstore/Sign Up/account-creation-component.js'
import { generatorEmails } from '../components/Common/generate-email-component.js'
import { signIn } from '../components/Shopstore/Sign In/sign-in-component.js';
import { modal } from '../components/Shopstore/Common/modal-component';
import { filesPaths, paymentMethodData, productData, signUpData } from '../components/Shopstore/Common/data-provider.js';


//VALIDATE THE LINK STATUS
Cypress.Commands.add('pageReturnValidStatus', (url) => {
    return cy
      .request({
        url: url,
        failOnStatusCode: false,
      })
      .then((resp) => {
        const validStatusCodes = [200, 201];
        expect(resp.status).to.be.oneOf(validStatusCodes);
      });
});

//ADD A NEW PRODUCT
Cypress.Commands.add('addNewProduct', (productNumber) => {
    cy.visit('/product_details/' + productNumber)

    productDetails.getQuantityField().click({ force: true })
    .clear()
    .type(productData.CHOSEN_QUANTITY)
    
    productDetails.getAddToCart().click({ force: true })

    modal.getModal().should('be.visible').within(() =>{
        modal.getModalLink().click({ force: true })
    })
});

//SIGN UP NEW USER
Cypress.Commands.add('signUpNewUser', () => {
   cy.visit('/login')

   //NEW USER SIGNUP!
   createAccount.getSignUpNameField().type(signUpData.NAME)
   createAccount.getSignUpEmailField().type(generatorEmails.getGenerateEmail())
   createAccount.getSignUpButton().click({ force: true })

   //ADDITIONAL INFORMATION
   createAccount.getMrsOption().check()
   createAccount.getAccountInformationNameField().type(signUpData.CHANGED_NAME)
   createAccount.getAccountInformationPasswordField().type(signUpData.PASSWORD)
   createAccount.getAccountInformationDaysField().select(signUpData.DAYS)
   createAccount.getAccountInformationMonthsField().select(signUpData.MONTH)
   createAccount.getAccountInformationYearsField().select(signUpData.YEARS)
   createAccount.getAddressInformationFirstName().type(signUpData.FIRST_NAME)
   createAccount.getAddressInformationLastName().type(signUpData.LAST_NAME)
   createAccount.getAddressInformationCompany().type(signUpData.COMPANY)
   createAccount.getAddressInformationAddress1().type(signUpData.ADDRESS_1)
   createAccount.getAddressInformationAddress2().type(signUpData.ADDRESS_2)
   createAccount.getAddressInformationCountry().select(signUpData.COUNTRY)
   createAccount.getAddressInformationState().type(signUpData.STATE)
   createAccount.getAddressInformationCity().type(signUpData.CITY)
   createAccount.getAddressInformationZipCode().type(signUpData.ZIP_CODE)
   createAccount.getAddressInformationMobileNumber().type(signUpData.MOBILE_NUMBER)
   createAccount.getCreateAccountButton().click({ force: true })
});

//ADD A NEW PAYMENT METHOD
Cypress.Commands.add('newPaymentMethod', () => {
  cy.visit('/payment')
  
  //CARD FIELDS
  payment.getNameCard().type(paymentMethodData.NAME)
  payment.getCardNumber().type(paymentMethodData.CARD_NUMBER)
  payment.getCVC().type(paymentMethodData.CVC)
  payment.getExpirationMonth().type(paymentMethodData.EXPIRATION_MONTH)
  payment.getExpirationYear().type(paymentMethodData.EXPIRATION_YEAR)
  payment.getPayConfirmButton().click({ force: true })
});

//LOG IN USERS
Cypress.Commands.add('Login', () => {
  cy.visit('/login')
  
  cy.readFile(filesPaths.FIXTURES_LOGIN).then((json) => {
    //EMAIL
    createAccount.getLogInEmailField().should('be.visible').type(json.email)
    //PASSWORD
    createAccount.getLogInPasswordField().should('be.visible').type(json.password)
    //CLICK ON THE LOGIN BUTTON
    createAccount.getLogInButton().should('be.visible').click({ force: true })
    //NAME USER IS SHOWN
    signIn.getHeaderUserName(json.name).should('be.visible')
  })
});