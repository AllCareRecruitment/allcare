describe('Profile Form', () => {
    beforeEach(() => {
        cy.intercept('POST', '/api/user/register', {
            statusCode: 201,
            body: { message: 'Profile created successfully!' }, // ✅ Add this
        }).as('registerUser')

        cy.visit('/register/create-profile') // Update with your actual URL
    })

    it('should fill out the form and submit successfully', () => {
        cy.get('input[name="name"]').type('Johnet')
        cy.get('input[name="surname"]').type('Doer')
        cy.get('input[name="email"]').type('john.does@example.com')
        cy.get('input[name="phoneNumber"]').type('1234567890')

        cy.get('button[type="submit"]').click()

        cy.wait('@registerUser') // Cypress now correctly waits for the request
        cy.contains('Profile created successfully!').should('be.visible')
    })

    it('should show an error message on failed registration', () => {
        cy.intercept('POST', '/api/user/register', {
            statusCode: 500,
            body: { message: 'Error: Could not register user.' }, // ✅ Add this
        }).as('registerUserFail')

        cy.get('input[name="name"]').type('Janet')
        cy.get('input[name="surname"]').type('Smithr')
        cy.get('input[name="email"]').type('jane.smith@example.com')
        cy.get('input[name="phoneNumber"]').type('0987654321')

        cy.get('button[type="submit"]').click()

        cy.wait('@registerUserFail')
        cy.contains('Error: Could not register user.').should('be.visible')
    })
})
