/// <reference types = "Cypress"/>
describe('webpage', function(){
    it('verifying the url of the webpage', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
            const text=$el.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const PriceText = price.text()
                    expect(PriceText).to.equal('25')      
                          })
            }

        })
    })
})
//need to check