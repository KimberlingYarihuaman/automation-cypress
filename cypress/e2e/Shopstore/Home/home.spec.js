import { home } from '../../../components/Shopstore/Home/home-component';
import { image } from '../../../components/Common/image-component';


describe('Home Page Tests', () => {

    beforeEach(function () {
        cy.visit('/');
    })

    it('[TXX] - User Is Able To See And Validate The Header', function () {
        //LOGO
        image.getImage("Website for automation practice").should('be.visible')

        //HEADER
        home.getHeader().should('be.visible')
        .its('length').should('eq', 8)

        //HEADER ITEMS
        home.getHeaderIteams().each(($el) => {
            //VALIDATE STATUS LINK
            cy.wrap($el).should("have.attr", "href").then((href) => {
                cy.pageReturnValidStatus(href);
            })
        })
    })

    if(!Cypress.config('isMobile')){
        
        it('[TXX] - User Is Able To See And Interact With Carousel', function () {
            //CAROUSEL
            home.getCarousel().should('be.visible')

            //CARUSEL INDICATORS
            home.getCarouselIndicators().should('be.visible')

            //HEADING
            home.getCarouselHeading().should('be.visible')
            .its('length').should('eq', 3)

            //SUBHEADING
            home.getCarouselSubheading().should('be.visible')
            .its('length').should('eq', 3)

            //PARAGRAPH
            home.getCarouselParagraph().should('be.visible')
            .its('length').should('eq', 3)

            //PREVIOUS BUTTON
            home.getCarouselPreviousButton().should('be.visible').click({ force: true })

            //NEXT BUTTON
            home.getCarouselNextButton().should('be.visible').click({ force: true })
        })
    }

    it('[TXX] - User Is Able To Click On The Primary Button On Carousel', function () {
        //PRIMARY BUTTON
        home.getCarouselPrimaryButton().should('be.visible').click({ force: true })

        //VALIDATE URL
        cy.url().should('include', '/test_cases')
    })

    it('[TXX] - User Is Able To Click On The Secondary Button On Carousel', function () {
        //SECONDARY BUTTON
        home.getCarouselSecondaryButton().should('be.visible').click({ force: true })

        //VALIDATE URL
        cy.url().should('include', '/api_list')
    })
})