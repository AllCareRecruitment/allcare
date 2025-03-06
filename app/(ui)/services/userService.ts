describe('User Registration API Tests', () => {
    const credentials = btoa('dean:dean')

    it('should successfully register a new user', () => {
        const userData = {
            name: 'John',
            surname: 'Doe',
            email: `john${Date.now()}@example.com`,
            phoneNumber: '1234567890'
        }
        const roleId = 2

        cy.request({
            method: 'POST',
            url: '/api/user/register',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${credentials}`
            },
            body: { ...userData, roleId, active: true }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('user')
            expect(response.body.user).to.have.property('id')
            expect(response.body.user).to.have.property('email', userData.email)
        })
    })

    it('should return error when using an existing email', () => {
        const userData = {
            name: 'Existing',
            surname: 'User',
            email: 'existing@example.com',
            phoneNumber: '9876543210'
        }
        const roleId = 3

        cy.request({
            method: 'POST',
            url: '/api/user/register',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${credentials}`
            },
            body: { ...userData, roleId, active: true },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Email already in use')
        })
    })

    it('should return unauthorized for incorrect credentials', () => {
        cy.request({
            method: 'POST',
            url: '/api/user/register',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa('wrong:credentials')}`
            },
            body: {
                name: 'Unauthorized',
                surname: 'User',
                email: `unauth${Date.now()}@example.com`,
                roleId: 1,
                active: true
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401)
        })
    })

    it('should handle server errors gracefully', () => {
        cy.intercept('POST', '/api/user/register', {
            statusCode: 500,
            body: { error: 'Internal Server Error' }
        }).as('serverError')

        cy.request({
            method: 'POST',
            url: '/api/user/register',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${credentials}`
            },
            body: {
                name: 'Test',
                surname: 'Error',
                email: `error${Date.now()}@example.com`,
                roleId: 1,
                active: true
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property('error', 'Internal Server Error')
        })
    })
})
