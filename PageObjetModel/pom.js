class Lego {
    visitWebPage(URL) {
        return cy.visit(URL)
    }

    email(em) {
        return cy.get('[id="email"]').type(em)
    }

    password(pw) {
        return cy.get('[id="password"]').type(pw)
    }

    submit() {
        return cy.get('[class="text-md sm:text-lg bg-themeColor text-white w-full mt-12 py-3 rounded-lg"]').click()
    }

    assert() {
        return cy.contains(' Connexxted ')
    }

    toastMsg() {
        return cy.get('.toast-message')
    }
    DeclineButton() {
        return cy.get('.cc-deny').click()
    }
    HomePage() {
        return cy.scrollTo("bottom", { duration: 2000 })
    }
    scrollTop() {
        return cy.scrollTo("top")
    }

    brokenLinks() {

        let brokenLinks = 0
        let activeLinks = 0
        cy.get('a').each(($link, index) => {
            const hr = $link.attr('href')
            if (hr) {
                cy.request({ url: hr, failOnStatusCode: false }).then((response) => {
                    if (response.status >= 400) {
                        cy.log(`index->${index + 1} broken link is ${hr}`)
                        brokenLinks++

                    }
                    else {
                        cy.log(`active link is ${hr}`)
                        activeLinks++

                    }


                })
            }


        }).then(($links) => {
            const totalLinks = $links.length
            cy.log(`total links ->${totalLinks}`)
            cy.log(`active links ->${activeLinks}`)
            cy.log(`broken links ->${brokenLinks}`)



        })
    }

    addPostButton() {
        return cy.get('[class="text-sm text-white"]').click()
    }

    //doubt in this below line-->
    title(title, ss) {
        return cy.get('[id="title"]').type(title).screenshot(ss)
    }

    description(tm) {
        return cy.get('[formcontrolname="description"]').type(tm)
    }

    imageAddUp() {
        return cy.get('[type="file"]').attachFile(['abc.png', 'xyz.png', 'image.png', 'demo.png', 'lamao.png']).then(($images) => {
            // Assert that the number of images is not greater than 5
            if ($images.length > 5) {
                const email = Math.random().toString(4).substring(2, 10) + '@gmail.com'
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
                cy.get(':nth-child(2) > [data-mat-col="5"] > .mat-calendar-body-cell').click({ force: true })
                cy.contains('Submit').click({ force: true })
                cy.contains('OTP Verification').should('be.visible')
                throw new Error('The page has more than 5 images');
            }
        })
    }
    publish() {
        return cy.contains(' Publish ').click({ force: true })
    }

    clickLike() {
        return cy.get('[alt="like"]').eq(0).click()
    }

    assertLike() {
        return cy.get('[alt="like"]').eq(0)
    }
    unlike() {
        return cy.get('[alt="like"]').eq(0).click()
    }

    assertUnlike() {
        return cy.get('[alt="like"]').eq(0)
    }
    commentIcon() {
        return cy.get(':nth-child(1) > .mt-5 > .gap-4 > :nth-child(2) > img').click()
    }
    writeComment(sss) {
        return cy.get('[type="text"]').type(sss)
    }
    sendComment() {
        return cy.get('[alt="send"]').click()
    }

    assertComment() {
        cy.get('.mt-2 > .text-lightGray').should('be.visible')
       // cy.contains('this is a comment').should('be.visible')
    }
    // check for error below --static keyword--
    notificationIcon() {
        cy.contains('Notifications').click()
        cy.contains(' Notifications ').should('be.visible')
        cy.go(-1)
    }
    
    performanceIconCheck() {
        cy.contains('Performance').click()
        cy.contains('My Performance').should('be.visible')
        cy.get('#mat-select-value-1').click()
        cy.go(-1)
        cy.contains('Performance').click()

    }

    
    overallPerformanceCheck() {
        cy.contains('Performance').click()
        cy.contains('My Performance').should('be.visible')
        cy.get('#mat-select-value-1').click()
        //cy.get('#mat-select-value-1').click()
        cy.get('#mat-option-1').click()
    
    }



}
export default Lego