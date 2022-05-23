/// <reference types = "Cypress"/>
describe('checking ui of the page ', function(){
    it('checkboxes', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type=checkbox]').check(['option1','option2'])
        //static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')  
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()==='India')
            {
              $el.click()

            }
            cy.get('#autocomplete').should('have.value','India')
            //visible invisible
            cy.get('#displayed-text').should('be.visible')
            cy.get('#hide-textbox').click()
            cy.get('#displayed-text').should('not.be.visible')
            cy.get('#show-textbox').click()
            cy.get('#displayed-text').should('be.visible')
 
            //radio buttons
 
            cy.get('[value="radio2"]').check().should('be.checked')
 
        })
        
      })
})