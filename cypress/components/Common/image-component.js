export const image = {
    getImage: (text) =>{
        return cy.get(`[alt="${text}"]`)
    }
}