describe('Home Page', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/')
  })

  it('should load the home page successfully', () => {
    // Basic test to ensure the page loads
    cy.get('body').should('be.visible')
  })

  it('should have a title', () => {
    // Check if the page has a title
    cy.title().should('not.be.empty')
  })

  it('should contain some content', () => {
    // Check if there's some content on the page
    cy.get('body').should('not.be.empty')
  })
}) 