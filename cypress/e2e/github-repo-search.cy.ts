describe('GitHub Repo Search Happy Path Tests', () => {
  it('Can Search For Known Repo via API and Navigate to Repo Using Response Metadata', () => {
    cy.searchGitHubRepos('create-react-app').then(response => {
      expect(response.status).to.eq(200);

      // The 'items' property contains an array of the repositories, and their metadata, that matched our search query.
      const topResult = response.body.items[0];
      const topResultUrl = topResult.html_url;

      expect(topResult.name).to.eq('create-react-app');
      expect(topResult.description).to.eq('Set up a modern web app by running one command.');
      expect(topResult.license).to.deep.eq({
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      })

      // Verify we can successfully load the 'create-react-app' repo page using the returned metadata.

      cy.visit(topResultUrl);

      cy.url().should('eq', topResultUrl);
      cy.get('.Layout-sidebar').should('contain.text', topResult.description);
      cy.get('[data-selector="repos-split-pane-content"]').should('contain.text', 'README.md');
    })
  })
})