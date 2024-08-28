import Lego from "../../PageObjetModel/pom"

const lego =new Lego()

describe("Connexted",()=>{
// login before every 'it' block to consider it as one functunality.
    beforeEach("Everytime login",()=>{
        lego.visitWebPage('http://51.112.103.14/')
        lego.email('sid262000z@gmail.com')
        lego.password('111111')
        lego.submit()
        lego.assert().should('be.visible')
        lego.toastMsg().should('be.visible')
        lego.DeclineButton()


    })
  // checking for scrolling of page till down of the page and back to top
    it("Home Page Check-up",()=>{
       lego.HomePage()
       lego.scrollTop()
       
    })
    //checking if any broken link is present on the home page.
    it('broken links check-up',()=>{
        lego.brokenLinks()
    })
   // clicking on add post icon and checking its functunality also it should come back to login again if number of uploaded post is more than 5.
    it('add post and create new account if no of images gets excedded to more than 5',()=>{
        lego.addPostButton()
        lego.title('This is a sample title').title('capture')
        lego.description('Anything')
        lego.imageAddUp()
        lego.publish()
    })

    //clicking like icon, it should be liked and then unliked the post as well.
    it('functionality checking of like post',()=>{
        lego.clickLike()
        lego.assertLike().should('not.be.disabled')
        lego.unlike()
        lego.assertUnlike().should('not.have.class', 'active')
    })
  //write comment on the post, sent comment as well and then assertion is passed.
    it('checking functunality for comment',()=>{
        lego.commentIcon()
        lego.writeComment('this is a comment')
        lego.sendComment()
        lego.assertComment()
    })
 //click on notification and it should be visible, asserted it.
    it('Notification icon check',()=>{
        lego.notificationIcon()
    })
 // functionality check for performance page 
    it('performance icon check',()=>{
        lego.performanceIconCheck()
    })
   // dropdown functunality check of performance and its overall funcunality as well.
    it('performance icon check',()=>{
        lego.overallPerformanceCheck()
    })
})