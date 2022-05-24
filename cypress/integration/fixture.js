/// <reference types = "Cypress"/>
describe('webpage', function(){
    before (function(){

        cy.fixture('example').then(function(data)
        {
            this.data= data
         })
        })
        it('first testcase',function(){
         cy.visit('http://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
         cy.get('select').select(this.data.gender)
        //attribute properties and their behaviour with cypress assertions
        cy.get(':nth-child(4)>.ng-untouched').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        //customizing cypress commands for reusing the code
        cy.get(':nth-child(2) > .nav-link').click()
        
        //parameterizing the test data with json commands
        
        this.data.productname.forEach(function(element){
            cy.selectproduct(element)

        })
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
           

        

             
    })
})
