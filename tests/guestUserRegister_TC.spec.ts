import { test, expect } from '../fixtures';
import { generateRandomEmail } from '../Utilities/utilities';

test('Guest user Register', async ({ page, homePage: HomePage, registerPage: RegisterPage }) => {
  test.setTimeout(60000);

  await test.step('Navigate to BASE_URL', async () => {
    await page.goto(process.env.BASE_URL); 
  });

  await test.step('Open Register page', async () => {
    await HomePage.clickAccountTab();
    await RegisterPage.clickRegisterTab();
    await expect(page).toHaveTitle('Register Account');
  });

  await test.step('Fill registration form', async () => {
    await RegisterPage.enterFirstName('Abcd');
    await RegisterPage.enterLastName('Efgh');

    const randomEmail = generateRandomEmail();
    await RegisterPage.enterEmail(randomEmail);

    await RegisterPage.enterTelephone('1234567890');
    await RegisterPage.enterPassword('password123');
    await RegisterPage.enterConfirmPassword('password123');
    await RegisterPage.clickPrivacyPolicyCheckbox();
    await expect(RegisterPage['privacyPolicyCheckbox']).toBeChecked();
  });

  await test.step('Submit registration and verify success', async () => {
    await RegisterPage.clickContinueButton();
    await expect(RegisterPage['successMessage']).toHaveText('Your Account Has Been Created!');
  });
  
});