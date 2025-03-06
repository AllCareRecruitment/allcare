describe('User API Tests', () => {
    const credentials = {
        username: 'dean',
        password: 'dean'
    };

    it('should register a new user', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/users',
            auth: credentials, // Pass Basic Auth credentials
            body: {
                name: 'John',
                surname: 'Doe',
                email: `john${Date.now()}@example.com`,
                active: true,
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.user).to.have.property('id');
        });
    });

    it('should return error when registering with an existing email', () => {
        const existingEmail = 'existing@example.com';

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/users',
            auth: credentials, // Pass Basic Auth credentials
            body: {
                name: 'Test',
                surname: 'User',
                email: existingEmail,
                active: true,
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.error).to.eq('Email already in use');
        });
    });
});
