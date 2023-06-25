import { contactUs } from '../../../components/Shopstore/Contact Us/contact-us-component';
import { home } from '../../../components/Shopstore/Home/home-component';

describe('Contact Us Page Tests', () => {

    beforeEach(function () {
        cy.Login()
        //CLICK ON THE CONTACT US LINK
        home.getHeaderContactUsOption().should('be.visible').click({ force: true })
    })

    it('[TXX] - User Is Able To See And Fill Out The Contact Us Form', function () {
        //CONTACT FORM
        contactUs.getContactUsForm().should('be.visible')

        //CONTACT INFO
        contactUs.getContactInfo().should('be.visible')
        .its('length').should('eq', 2)

        //HEADING
        contactUs.getContactUsHeader().should('be.visible')
        .its('length').should('eq', 3)

        //GET NOTE CONTACT US
        contactUs.getContactUsNote().should('be.visible')

        cy.readFile('cypress/fixtures/login.json').then((json) => {
            //NAME
            contactUs.getNameField().should('be.visible').type(json.name)
            //EMAIL
            contactUs.getEmailField().should('be.visible').type(json.email)
        })
        //SUBJECT
        contactUs.getSubjectField().should('be.visible').type('Testing')

        //MESSAGE
        contactUs.getMessageField().should('be.visible').type('Automation Testing!')

        //ATTACH FILE
        contactUs.getUploadFileButton().should('be.visible').selectFile('cypress/files/plants.pdf')

        //CLICK ON THE SUBMIT BUTTON
        contactUs.getSubmitButton().should('be.visible').click({ force: true })

        //STATUS ALERT SUCCESS
        contactUs.getAlertSuccess().should('be.visible')

        //CLICK ON THE HOME BUTTON
        contactUs.getHomeButton().should('be.visible').click({ force: true })

        //CLICK ON THE LOG OUT BUTTON
        home.getHeaderLogOutOption().should('be.visible').click({ force: true })
    })
})
