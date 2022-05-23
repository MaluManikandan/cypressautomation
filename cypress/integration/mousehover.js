/// <reference types = "Cypress"/>
describe('webpage', function(){
    it('verifying the url of the webpage', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })
})