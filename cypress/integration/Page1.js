/// <reference types = "Cypress"/>
import Homepage from '../pageobjects/Homepage'
describe('webpage', function(){
    before (function(){

        cy.fixture('example').then(function(data)
        {
            this.data= data
         })
        })
        it('first testcase',function(){
            const homePage = new Homepage()
         cy.visit('http://rahulshettyacademy.com/angularpractice/')

        homePage.getEditbox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwowaybinging().should('have.value',this.data.name)
        homePage.getEditbox().should('have.attr','minlength','2')
        homePage.getEntreprenour().should('be.disabled')
        
        homePage.  getShoptab().click()
        
      
        
        this.data.productname.forEach(function(element){
            cy.selectproduct(element)

        })
           

        

             
    })
})
