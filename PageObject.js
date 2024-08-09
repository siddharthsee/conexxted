class Hero{
    notification(){
       return cy.contains('Notifications').click()
    }

    scoreInsight(){
        cy.contains(' View Score Insights ').click({force:true})
    }
    trendFollowingScore(){
       cy.contains(' Trend Following score ').click()
       return cy.contains('Listing')
    }

    trendSettingScore(){
      return  cy.contains(' Trend Setting score ').click() 
    }














}

export default Hero