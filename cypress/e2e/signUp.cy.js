
describe('signUp',()=>{
    it('signUp create account',()=>{
        const email= Math.random().toString(4).substring(2,10)+'@gmail.com'
        cy.visit('http://51.112.103.14/signup');

        // Fill in the sign-up form fields
        cy.get('[id="name"]').type('nickname');
        cy.get('[id="mobile"]').type('12345663');
    
        cy.get('[id="email"]').type(email)
        cy.get('[id="password"]').type(654321)
        cy.get('#confirmPassword').type(654321)
        cy.get('.cc-deny').click()
        cy.get('.mat-mdc-select-placeholder').click()//.select('Male')
        cy.contains('Male').click()
        cy.get('.mat-mdc-button-touch-target').click()
        cy.get(':nth-child(2) > [data-mat-col="5"] > .mat-calendar-body-cell').click({force:true})
        cy.contains('Submit').click({force:true})
        cy.contains('OTP Verification').should('be.visible')
      
    })
})