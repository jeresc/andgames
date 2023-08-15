describe("Videogames App", () => {
  it("renders without crashing", () => {
    cy.visit("http://localhost:5173/")  
    cy.get("h1").contains("Landing")
    cy.get("button").contains("Go to Home").click()
  }) 

  it("can search for a videogame", () => {
    cy.visit("http://localhost:5173/#/videogames")
    cy.get("input[name='search-bar']").type("The Witcher")
    cy.get("h3").contains("The Witcher")
  })
})
