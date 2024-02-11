// import { equal } from "assert"
// import { expect } from "chai"


describe('GitHub Repo Search Happy Path Tests', () => {
  it('Can Search For Known Repo via API and Navigate to Repo Using Response Metadata', () => {
    cy.searchGitHubRepos('create-react-app').then(response => {
      expect(response.status).to.eq(200);

      const items = response.body.items;
      const topResult = items[0];
      const url = topResult.html_url;

      expect(topResult.name).to.eq('create-react-app');
      expect(topResult.description).to.eq('Set up a modern web app by running one command.');
      expect(topResult.license).to.deep.eq({
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      })

      cy.visit(url);

      // Assert we've successfully loaded 'create-react-app' repo page

      cy.url().should('eq', url);
      cy.get('.Layout-sidebar').should('contain.text', topResult.description);
      cy.get('[data-selector="repos-split-pane-content"]').should('contain.text', 'README.md')

      console.log(`name is ${topResult.name}`)  
    })
  })
})