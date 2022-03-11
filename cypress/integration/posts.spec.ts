// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('login user successfully', () => {
    cy.login('lkochajewski@pgs-soft.com', 'test');

    cy.url().should('contain', '/');
    cy.get('[data-cy="homePage"]').should('have.text', 'Home page');
  });

  it('create new post', () => {
    const title = 'Brand new post';
    const body = 'post body'
    cy.intercept('https://jsonplaceholder.typicode.com/posts');
    cy.visit('/');

    cy.get('#Title').type(title);

    cy.get('#Body').type(body);

    cy.get('[data-cy="createPostButton"]').click();

    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts').then(
      (resp) => {
        expect(resp.status).to.eq(201);
        expect(resp.body.id).to.eq(101);

        cy.get('[data-cy="9"]').should(`have.text', '10. ${title}`);
      }
    );
  });
});
