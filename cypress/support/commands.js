import { productDetails } from '../components/Shopstore/Product Details/product-details-component.js'
import { payment } from '../components/Shopstore/Payment/payment-component.js'
import { createAccount } from '../components/Shopstore/Sign Up/account-creation-component.js'
import { generatorEmails } from '../components/Common/generate-email-component.js'
import { signIn } from '../components/Shopstore/Sign In/sign-in-component.js';
import { modal } from '../components/Common/modal-component.js'


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
    .type('30')
    
    productDetails.getAddToCart().click({ force: true })

    modal.getModal().should('be.visible').within(() =>{
        modal.getModalLink().click({ force: true })
    })
});

//SIGN UP NEW USER
Cypress.Commands.add('signUpNewUser', () => {
   cy.visit('/login')

   //NEW USER SIGNUP!
   createAccount.getSignUpNameField().type('Alejandra')
   createAccount.getSignUpEmailField().type(generatorEmails.getGenerateEmail())
   createAccount.getSignUpButton().click({ force: true })

   //ADDITIONAL INFORMATION
   createAccount.getMrsOption().check()
   createAccount.getAccountInformationNameField().type(' Natalie')
   createAccount.getAccountInformationPasswordField().type('Kim1234567!')
   createAccount.getAccountInformationDaysField().select('19')
   createAccount.getAccountInformationMonthsField().select('July')
   createAccount.getAccountInformationYearsField().select('1990')
   createAccount.getAddressInformationFirstName().type('Ale')
   createAccount.getAddressInformationLastName().type('Mendoza')
   createAccount.getAddressInformationCompany().type('Apply Digital')
   createAccount.getAddressInformationAddress1().type('Av Sur 0')
   createAccount.getAddressInformationAddress2().type('0 Avenue in Surrey, B.C')
   createAccount.getAddressInformationCountry().select('Canada')
   createAccount.getAddressInformationState().type('Ontario')
   createAccount.getAddressInformationCity().type('Toronto')
   createAccount.getAddressInformationZipCode().type('L4K - M9W')
   createAccount.getAddressInformationMobileNumber().type('+6470987987')
   createAccount.getCreateAccountButton().click({ force: true })
});

//ADD A NEW PAYMENT METHOD
Cypress.Commands.add('newPaymentMethod', () => {
  cy.visit('/payment')
  
  //CARD FIELDS
  payment.getNameCard().type('Kimberling Yarihuaman')
  payment.getCardNumber().type('4321567890121234')
  payment.getCVC().type('346')
  payment.getExpirationMonth().type('12')
  payment.getExpirationYear().type('2029')
  payment.getPayConfirmButton().click({ force: true })
});

//LOG IN USERS
Cypress.Commands.add('Login', () => {
  cy.visit('/login')
  
  cy.readFile('cypress/fixtures/login.json').then((json) => {
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