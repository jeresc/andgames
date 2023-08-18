import 'cypress-iframe';

describe('Videogames App', () => {
  it('renders without crashing', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h2').contains('&games');
    cy.get('button').contains('Go Home').click();
  });

  it('can search for a videogame', () => {
    cy.visit('http://localhost:5173/#/home');
    cy.get("input[name='search-bar']").type('The Witcher');
    cy.get('h3').contains('The Witcher');
  });

  it('can add a new videogame', () => {
    cy.visit('http://localhost:5173/#/home/');
    cy.contains('New').click();
    cy.get("[data-set-id='add-videogame-form'] button[type='submit']").should(
      'be.disabled',
    );
    cy.get("[data-set-id='add-videogame-form'] input[name='name']").type(
      'Grand Theft Auto: Buenos Aires Chronicles',
    );
    // cy.get('#upload-button').click();
    // cy.frameLoaded();
    // cy.iframe().contains("Web Address").click()
    // cy.get("[placeholder*='http://']")
    cy.get('#test-image-button').click();
    cy.get("[data-set-id='add-videogame-form'] button[type='submit']").should(
      'be.disabled',
    );
    cy.get("[data-set-id='add-videogame-form'] button[data-field='genres']").click();
    cy.contains('Arcade').click();
    cy.contains('Show options').click();
    cy.contains('Racing').click();
    cy.contains('Save').click();
    cy.get("[data-set-id='add-videogame-form'] button[type='submit']").should(
      'be.disabled',
    );

    cy.get(
      "[data-set-id='add-videogame-form'] button[data-field='platforms']",
    ).click();
    cy.contains('PlayStation').click();
    cy.contains('Show options').click();
    cy.contains('PC').click();
    cy.contains('Show options').click();
    cy.contains('Linux').click();
    cy.contains('Show options').click();
    cy.contains('Android').click();
    cy.contains('Android').click();
    cy.contains('Save').click();
    cy.get("[data-set-id='add-videogame-form'] button[type='submit']").should(
      'be.disabled',
    );

    cy.get("[data-set-id='add-videogame-form'] textarea[name='description']")
      .type(`
"Grand Theft Auto: Buenos Aires Chronicles" invites players to immerse themselves in the exhilarating underbelly of Argentina's capital city. Set in a meticulously recreated open-world Buenos Aires, players will traverse the rich tapestry of neighborhoods, from the grandeur of Recoleta to the grit of La Boca, each pulsating with their own stories and challenges. As a complex protagonist entangled in the city's criminal web, players will orchestrate daring heists, navigate political intrigues, and confront personal demons, all while grappling with the socio-economic realities of modern Argentina.
`);
    cy.get("[data-set-id='add-videogame-form'] button[type='submit']").should(
      'be.disabled',
    );

    cy.get("[data-set-id='add-videogame-form'] input[name='released']").type(
      '2023-11-08',
    );
    cy.get("img[data-rating='10']").click();

    cy.get("[data-set-id='add-videogame-form'] button[type='submit']")
      .should('not.be.disabled')
      .click();

    cy.get("input[name='search-bar']").type(
      'Grand Theft Auto: Buenos Aires Chronicles',
    );

    cy.get('h3').contains('Grand Theft Auto: Buenos Aires Chronicles');
  });
});
