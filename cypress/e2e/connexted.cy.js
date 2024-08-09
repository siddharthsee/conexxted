import Hero from "../../PageObject"

const hero= new Hero()


describe('template spec', () => {
  beforeEach('everytime login',()=>{
    cy.visit('http://51.112.103.14/')
    cy.get('[id="email"]').type('sid262000z@gmail.com')
    cy.get('[id="password"]').type('111111')
    cy.get('[class="text-md sm:text-lg bg-themeColor text-white w-full mt-12 py-3 rounded-lg"]').click()
    cy.contains(' Connexxted ').should('be.visible')
    cy.get('.toast-message').should('be.visible')
    cy.get('.cc-deny').click()
    //cy.wait(6000)
    
     
    });
 
  it('login passes', () => {
    // cy.visit('http://51.112.103.14/')
    // cy.get('[id="email"]').type('testuser24@yopmail.com')
    // cy.get('[id="password"]').type('Test@1234')
    // cy.get('[class="text-md sm:text-lg bg-themeColor text-white w-full mt-12 py-3 rounded-lg"]').click()
    //cy.contains(' Connexxted ').should('be.visible')
  })

  // it.skip('login fails',()=>{
  //   // cy.visit('http://51.112.103.14/')
  //   // cy.get('[id="email"]').type('testuser24@yopmail.com')
  //    cy.get('[id="password"]').type('Test@@1234')
  //   cy.get('[class="text-md sm:text-lg bg-themeColor text-white w-full mt-12 py-3 rounded-lg"]').click()
  //  // cy.contains(' Connexxted ').should('be.visible')
  //   cy.get("div[aria-label='Invalid Credentials']").should('be.visible').and('have.contain','Invalid Credentials')
  // })

  it('Home page checkup ',()=>{
   
    cy.scrollTo("bottom",{duration:2000})
    cy.scrollTo("top")
   
  })

  it('Number of broken links,active links, total links ',()=>{
    //cy.visit('https://ecommerce-playground.lambdatest.io/?fp_ref=anshita87')
    let brokenLinks=0
    let activeLinks=0
    cy.get('a').each(($link,index)=>{
         const hr= $link.attr('href')
         if(hr){
            cy.request({url:hr,failOnStatusCode:false}).then((response)=>{
                if(response.status>=400){
                    cy.log(`index->${index+1} broken link is ${hr}`)
                    brokenLinks++

                }
                else{
                    cy.log(`active link is ${hr}`)
                    activeLinks++

                }


            })
         }


    }).then(($links)=>{
        const totalLinks=$links.length
        cy.log(`total links ->${totalLinks}`)
        cy.log(`active links ->${activeLinks}`)
        cy.log(`broken links ->${brokenLinks}`)



    })
  })






  it.only('Create posts',()=>{
    cy.get('[class="text-sm text-white"]').click()
    cy.get('[id="title"]').type('THis is a sample title').screenshot('capture')
    cy.get('[formcontrolname="description"]').type("bjdcbjcb dccdc cdcdcd cdcdcd cccd dcdc")
    cy.get('[type="file"]').attachFile(['abc.png','xyz.png','image.png','demo.png','lamao.png']).then(($images) => {
      // Assert that the number of images is not greater than 5
      if ($images.length > 5) {
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
        throw new Error('The page has more than 5 images');
      }
    })
    
    cy.contains(' Publish ').click({force:true})
    
    
  })







  it('functionality checking for like',()=>{
    cy.get('[alt="like"]').eq(0).click()
    cy.get('[alt="like"]').eq(0).should('not.be.disabled')
    cy.get('[alt="like"]').eq(0).click()
    cy.get('[alt="like"]').eq(0).should('not.have.class', 'active')
    
  })

  it('checking functunality for comment ',()=>{
    cy.get(':nth-child(1) > .mt-5 > .gap-4 > :nth-child(2) > img').click()
    cy.get('[type="text"]').type('this is a comment')
    cy.get('[alt="send"]').click()
    cy.get('.mt-2 > .text-lightGray').should('be.visible')
    cy.contains('this is a comment').should('be.visible')
  })

  it('Notification icon check',()=>{
    cy.contains('Notifications').click()
    cy.contains(' Notifications ').should('be.visible')
    cy.go(-1)
  })

  it('performance icon check for current month',()=>{
    cy.contains('Performance').click()
    cy.contains('My Performance').should('be.visible')
    cy.get('#mat-select-value-1').click()
    cy.go(-1)
    cy.contains('Performance').click()
    //cy.contains('Current Month').click().select('Overall').click()


  })
  it('performance icon check for overall',()=>{
    cy.contains('Performance').click()
    cy.contains('My Performance').should('be.visible')
    cy.get('#mat-select-value-1').click()
    //cy.get('#mat-select-value-1').click()
    cy.get('#mat-option-1').click()
  })
  it('Notification check and view score insight check',()=>{
    hero.notification().contains('Notifications').should('be.visible')
    cy.go(-1)
    hero.scoreInsight()
    hero.trendFollowingScore().should('be.visible')
    hero.trendSettingScore().should('not.be.disabled')
  })


})



  


