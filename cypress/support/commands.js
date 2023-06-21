
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