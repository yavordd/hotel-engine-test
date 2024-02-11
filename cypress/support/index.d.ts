/// <reference types="cypress" />
export {}

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Search the Unauthenticated GitHub API for repositories with provided search string.
             * **Note** that this has a rate limit of 60 requests per hour per IP due to unauthenticated nature.
             * 
             * @example cy.searchGitHubRepos('cypress')
             */
            searchGitHubRepos(searchString: string): Chainable<Response<any>>
        }
    }
}