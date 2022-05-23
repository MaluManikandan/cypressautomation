/// <reference types = "Cypress"/>

import 'cypress-iframe'
describe('webpage', function(){
    it('verifying the url of the webpage', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.iframe().find("h1[class='pricing-title']").should('have.length',2)
        //this code need tp be checked..its wrong

    })

})
//need to check