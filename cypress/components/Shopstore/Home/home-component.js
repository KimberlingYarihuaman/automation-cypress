export const home = {
    getHeader: () => {
        return cy.get('[id="header"]').find('ul').children()
    },
    getHeaderIteams: () => {
        return cy.get('[id="header"]').find('li>a')
    },
    getCarousel: () => {
        return cy.get('[id="slider-carousel"]')
    },
    getCarouselIndicators: () => {
        return cy.get('[id="slider-carousel"]').find('ol')
    },
    getCarouselNextButton: () => {
        return cy.get('[data-slide="next"]').eq(0)
    },
    getCarouselPreviousButton: () => {
        return cy.get('[data-slide="prev"]').eq(0)
    },
    getCarouselHeading: () => {
        return cy.get('[id="slider-carousel"]').find('h1')
    },
    getCarouselSubheading: () => {
        return cy.get('[id="slider-carousel"]').find('h2')
    },
    getCarouselParagraph: () => {
        return cy.get('[id="slider-carousel"]').find('p')
    },
    getCarouselPrimaryButton: () => {
        return cy.get('[id="slider-carousel"]').find('button').parent().eq(0)
    },
    getCarouselSecondaryButton: () => {
        return cy.get('[id="slider-carousel"]').find('button').parent().eq(1)
    }
}