class Homepage{
    getEditbox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getGender()
    {
        return cy.get('select')
    }
    getEntreprenour()
    {
        return cy.get('#inlineRadio3')
    }
    getTwowaybinging()
    {
        return cy.get(':nth-child(4)>.ng-untouched')
    }
    getShoptab()
    {
         return cy.get(':nth-child(2) > .nav-link')
    }
}
export default Homepage;
