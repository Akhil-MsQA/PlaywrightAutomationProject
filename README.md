# Playwright Automation Project

End-to-end test automation framework built with [Playwright](https://playwright.dev/) and TypeScript for the OpenCart application.

## Prerequisites

- Node.js 20 or later
- npm
- Git

## Installation

Clone the repository and install dependencies:

```powershell
git clone <repository-url>
cd PlaywrightAutomationProject
npm ci
npx playwright install
```

## Environment Variables

Create a local `.env` file in the project root. Do not commit this file.

```dotenv
BASE_URL="https://your-test-application-url/"
USER_NAME="your-test-username"
PASS_WORD="your-test-password"
```

The Playwright configuration loads these values automatically. GitHub Actions receives the same values from repository secrets.

## Running Tests

Run all tests:

```powershell
npx playwright test
```

Run tests with the browser visible:

```powershell
npx playwright test --headed
```

Run a specific test file:

```powershell
npx playwright test tests/userLogin_TC.spec.ts
```

Run tests in debug mode:

```powershell
npx playwright test --debug
```

Open the HTML report:

```powershell
npx playwright show-report
```

## Project Structure

```text
pages/                 Page Object classes
  cartPages/
  checkoutPage/
  homePages/
  loginPage/
  productPage/
  registerPage/
tests/                 Playwright test specifications
Utilities/             Shared setup and utility functions
fixtures.ts            Custom Playwright fixtures
playwright.config.ts   Playwright configuration
state.json             Browser state used by the project
.github/workflows/     GitHub Actions workflows
```

## Test Reports

Playwright generates the following output:

- `playwright-report/` contains the HTML report.
- `test-results/` contains screenshots, videos, and traces for failed or retried tests.

These generated folders are ignored by Git and are uploaded as artifacts by GitHub Actions.

## CI/CD Pipeline

The workflow is defined in `.github/workflows/playwright.yml` and runs on:

- Pull requests targeting `main`
- Pushes to `main`
- Manual runs from the GitHub Actions page

The workflow:

1. Checks out the repository.
2. Installs Node.js 20.
3. Installs npm dependencies.
4. Installs Chromium and its system dependencies.
5. Runs the Playwright tests.
6. Uploads the Playwright report and test results.

Add these repository secrets in **Settings > Secrets and variables > Actions**:

- `BASE_URL`
- `USER_NAME`
- `PASS_WORD`

Never place real passwords or tokens in this README, source code, or committed files.

## Branching Workflow

Use `main` for stable code and create a separate branch for each change:

```powershell
git switch main
git pull
git switch -c feature-name
```

Commit and push your changes:

```powershell
git add .
git commit -m "Describe the change"
git push -u origin feature-name
```

Open a pull request from the feature branch into `main`. The CI pipeline runs automatically on the pull request.

## Useful Commands

Check the current Git status:

```powershell
git status
```

List local branches:

```powershell
git branch
```

Run TypeScript type checking:


```powershell
npx tsc --noEmit
```
