# hotel-engine-test

## Installation

1. Make sure to have Node.js installed
* For macOS machines you can find the latest [installation instructions here](https://nodejs.org/en/download/package-manager#macos)
* For Windows machines you can find the latest [installation instructions here](https://nodejs.org/en/download/package-manager#windows-1)
2. `cd` into the directory where you store your projects.
3. Clone the repository with `git clone https://github.com/yavordd/hotel-engine-test.git`.
4. `cd` into the `hotel-engine-test` directory that should have been created if the repo was successfully cloned.
5. Run `npm install` to install latest dependencies.

## Running the tests
### To run the tests in headed mode
1. From the `hotel-engine-test` directory run `npx cypress open --e2e` or `npx cypress open --e2e --browser=chrome` if you want to launch the test directly with Chrome browser.
2. Select the browser of your choice (if not using the `--browser` argument mentioned above).
* You can also use the `cy:open:e2e` script from `package.json` to open Cypress for running all the `e2e` tests in Chrome, e.g. `npm run cy:open:e2e`
3. Select the spec of your choice, the test(s) within it will start to run automatically.

### To run the tests in headless mode
1. If you'd like to run all `e2e` spec files, from the `hotel-engine-test` directory run `npx cypress run --e2e --browser=chrome`
* You can also use the `cy:run:e2e` script from `package.json` to run all the `e2e` tests in Chrome, e.g. `npm run cy:run:e2e`
2. If you'd like to run a specific spec file, from the `hotel-engine-test` directory run `npx cypress run --spec="cypress/e2e/github-repo-search.cy.ts"`
* You can also use the `cy:run` script from `package.json` with your desired arguments, e.g. `npm run cy:run --spec="cypress/e2e/github-repo-search.cy.ts"`