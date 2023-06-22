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
    },
    getHeadingProduct: () => {
        return cy.get('h2[class="title text-center"]')
    },
    getProducts: () => {
        return cy.get('div[class="product-image-wrapper"]')
    },
    getProductsImage: () => {
        return cy.get('div[class="productinfo text-center"]').find('img')
    },
    getProductsHeading: () => {
        return cy.get('div[class="productinfo text-center"]').find('h2')
    },
    getProductsDescription: () => {
        return cy.get('div[class="productinfo text-center"]').find('p')
    },
    getAddToCartButton: () => {
        return cy.get('div[class="productinfo text-center"]').find('a')
    },
    getViewProductButton: () => {
        return cy.get('div[class="choose"]').find('a')
    },
    getChosenProduct: () => {
        return cy.get('div[class="choose"]').find('a[href="/product_details/21"]')
    }
}