import { test, expect } from '../fixtures';

test('Guest User Login', async ({ page, homePage: HomePage, loginPage: LoginPage, registerPage: RegisterPage }) => {

  await test.step('Navigate to BASE_URL', async () => {
    await page.goto(process.env.BASE_URL);
  });

  await test.step('Click Account tab', async () => {
    await HomePage.clickAccountTab();
  });

  await test.step('Click Login button', async () => {
    await LoginPage.clickLoginButton();
  });

  await test.step('Enter username', async () => {
    await LoginPage.enterUsername(process.env.USER_NAME);
  });

  await test.step('Enter password', async () => {
    await LoginPage.enterPassword(process.env.PASS_WORD);
  });

  await test.step('Submit login form', async () => {
    await LoginPage.clickLoginSubmitButton();
  });

  await test.step('Verify page title', async () => {
    const title = await page.title();
    expect(title).toBe('My Account');
  });

  await test.step('Click Account tab again', async () => {
    await HomePage.clickAccountTab();
  });

  await test.step('Click Logout button', async () => {
    await LoginPage.clickLogoutButton();
  });

  await test.step('Click Continue button on Register page', async () => {
    await HomePage.clickContinueButton();
  });

});
