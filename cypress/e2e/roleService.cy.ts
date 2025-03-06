describe('User Role API Tests', () => {
    const credentials = btoa('dean:dean');

    it('should retrieve all roles successfully', () => {
        cy.request({
            method: 'GET',
            url: '/api/user/role?all=true',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${credentials}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('roles').and.to.be.an('array');
            
            if (response.body.roles.length > 0) {
                expect(response.body.roles[0]).to.have.all.keys('id', 'name', 'active');
            }
        });
    });

    it('should return unauthorized for incorrect credentials', () => {
        cy.request({
            method: 'GET',
            url: '/api/user/role?all=true',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa('wrong:credentials')}`
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('should handle server errors gracefully', () => {
        cy.intercept('GET', '/api/user/role?all=true', {
            statusCode: 500,
            body: { error: 'Internal Server Error' }
        }).as('serverError');

        cy.request({
            method: 'GET',
            url: '/api/user/role?all=true',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${credentials}`
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.have.property('error', 'Internal Server Error');
        });
    });
});
