import Lego from "../../PageObjetModel/pom"

const lego =new Lego()

describe("Connexted",()=>{

    beforeEach("Everytime login",()=>{
        lego.visitWebPage('http://51.112.103.14/')
        lego.email('sid262000z@gmail.com')
        lego.password('111111')
        lego.submit()
        lego.assert().should('be.visible')
        lego.toastMsg().should('be.visible')
        lego.DeclineButton()


    })

    it("Home Page Check-up",()=>{
       lego.HomePage()
       lego.scrollTop()
       
    })

    it('broken links check-up',()=>{
        lego.brokenLinks()
    })

    it('add post and create new account if no of images gets excedded to more than 5',()=>{
        lego.addPostButton()
        lego.title('This is a sample title').title('capture')
        lego.description('Anything')
        lego.imageAddUp()
        lego.publish()
    })

    it('functionality checking of like post',()=>{
        lego.clickLike()
        lego.assertLike().should('not.be.disabled')
        lego.unlike()
        lego.assertUnlike().should('not.have.class', 'active')
    })

    it('checking functunality for comment',()=>{
        lego.commentIcon()
        lego.writeComment('this is a comment')
        lego.sendComment()
        lego.assertComment()
    })

    it('Notification icon check',()=>{
        lego.notificationIcon()
    })

    it('performance icon check',()=>{
        lego.performanceIconCheck()
    })

    it('performance icon check',()=>{
        lego.overallPerformanceCheck()
    })
})