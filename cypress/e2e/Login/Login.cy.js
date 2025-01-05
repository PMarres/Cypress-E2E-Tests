describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Login Standard User', () => {
        cy.Login("standard_user", "secret_sauce")
        // cy.get('input[name=user-name]').type("standard_user")
        // cy.get('input[name=password]').type("secret_sauce")
        // cy.get('input[id="login-button"]').click()

        cy.url().should('include', '/inventory.html')
        //cy.getCookie('your-session-cookie').should('exist')
    })

    it('Login wrong', () => {
        cy.Login("standard_user", "secretsauce")
        // cy.get('input[name=user-name]').type("standard_user")
        // cy.get('input[name=password]').type("secretsauce")
        // cy.get('input[id="login-button"]').click()

        cy.get('h3[data-test="error"]').should('exist').should('contain', 'Username and password do not match')
    })

    it('Login locked', () => {
        cy.Login("locked_out_user", "secret_sauce")
        cy.get('h3[data-test="error"]').should('exist').should('contain', 'Sorry, this user has been locked out.')
    })
})