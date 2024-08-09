describe('new signUp on multiple upload',()=>{
    it.only('Create posts',()=>{
        cy.get('[class="text-sm text-white"]').click()
        cy.get('[id="title"]').type('THis is a sample title').screenshot('capture')
        cy.get('[formcontrolname="description"]').type("bjdcbjcb dccdc cdcdcd cdcdcd cccd dcdc")
        cy.get('[type="file"]').attachFile(['abc.png','xyz.png','image.png','demo.png','lamao.png','zzz.png'])
        cy.contains(' Publish ').click()
        cy.get('[type="file"]').attachFile(['abc.png','xyz.png','image.png',{wait:7000}]).then(($images) => {
          // Assert that the number of images is not greater than 5
          if ($images.length > 5) {
            cy.visit('http://51.112.103.14/signup');
            cy.get('[id="name"]').type('nickname');
            cy.get('[id="mobile"]').type('12345663');
            cy.get('[id="email"]').type('faker@gmail.com')
            cy.get('[id="password"]').type(654321)
            cy.get('#confirmPassword').type(654321)
            cy.get('.cc-deny').click()
            cy.get('.mat-mdc-select-placeholder').click()//.select('Male')
            cy.contains('Male').click()
            cy.get('.mat-mdc-button-touch-target').click()
            cy.get(':nth-child(2) > [data-mat-col="5"] > .mat-calendar-body-cell').click({force:true})
            cy.contains('Submit').click({force:true})
            cy.contains('OTP Verification').should('be.visible')
    
            
          }
        });
        cy.contains(' Publish ').click()
        
      })
})