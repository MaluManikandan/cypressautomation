/// <reference types = "Cypress"/>
describe('checking cypress autohandles alerts in webapps ', function(){
    it('alert', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
        {
         expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>
        {
         expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
    })
})