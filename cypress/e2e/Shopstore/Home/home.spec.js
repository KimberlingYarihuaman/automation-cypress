import { home } from '../../../components/Shopstore/Home/home-component';
import { image } from '../../../components/Common/image-component';
import { productData } from '../../../components/Shopstore/Common/data-provider';


describe('Home Page Tests', () => {

    beforeEach(function () {
        cy.visit('/');
    })

    it('[AE-T1] - User Is Able To See And Validate The Header', function () {
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
        
        it('[AE-T1] - User Is Able To See The Carousel Correctly', function () {
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

    it('[AE-T1] - User Is Able To See The Products', function () {
        //HEADING
        home.getHeadingProduct().should('exist')

        //PRODUCTS
        home.getProducts().should('exist')
        .its('length').should('gte', 40)

        //IMAGE OF THE PRODUCT
        home.getProductsImage().should('be.visible')
        .its('length').should('gte', 40)

        //HEADING OF THE PRODUCT
        home.getProductsHeading().should('be.visible')
        .its('length').should('gte', 40)

        //DESCRIPTION OF THE PRODUCT
        home.getProductsDescription().should('be.visible')
        .its('length').should('gte', 40)

        //ADD TO CARD BUTTON
        home.getAddToCartButton().should('be.visible')
        .its('length').should('gte', 40)

        //VALIDATE LINK STATUS
        home.getViewProductButton().should('be.visible')
        .and("have.attr", "href").then((href) => {
            cy.pageReturnValidStatus(href);
        })

        //VIEW PRODUCT BUTTON
        home.getViewProductButton().should('be.visible')
        .its('length').should('gte', 34)
    })

    it('[AE-T1,T2] - User Is Able To Scroll Center, Choose A Product And Click On The View Product Button', function () {
       let product = productData.getRandomProduct()

       //SCROLL CENTER TO THE PAGE
       cy.scrollTo('center')

       //CLICK ON THE CHOSEN PRODUCT
       home.getChosenProduct(product).click({ force: true })

       //VERIFY NEW WEBSITE
       cy.url().should('include', '/product_details/' + product)
    })
})