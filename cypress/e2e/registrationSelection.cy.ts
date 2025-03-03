describe('Registration Selection Page', () => {
    beforeEach(() => {
        cy.visit('/register')
    })

    it('should navigate to create-profile for job seekers', () => {
        cy.contains('FOR JOB SEEKERS').should('be.visible')
        cy.contains('GET STARTED').first().click()

        cy.url().should('include', '/register/create-profile')
    })

    it('should navigate to create-profile for employers', () => {
        cy.contains('FOR EMPLOYERS').should('be.visible')
        cy.contains('GET STARTED').last().click()

        cy.url().should('include', '/register/create-profile')
    })
})
