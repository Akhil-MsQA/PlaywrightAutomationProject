import { test, expect } from '../fixtures';
import { generateRandomEmail, readExcelData } from '../Utilities/utilities';

type RegistrationData = {
  TC: string;
  FirstName: string;
  Lastname: string;
  telphone: number;
  Password: string;
};

const registrationData = readExcelData<RegistrationData>('Data.xlsx').find(
  (row) => row.TC === 'guestUserRegister_TC.spec',
);

if (!registrationData) {
  throw new Error('Data.xlsx must contain a row for guestUserRegister_TC.spec');
}



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
    await RegisterPage.enterFirstName(registrationData.FirstName);
    await RegisterPage.enterLastName(registrationData.Lastname);

    const randomEmail = generateRandomEmail();
    await RegisterPage.enterEmail(randomEmail);

    await RegisterPage.enterTelephone(String(registrationData.telphone));
    await RegisterPage.enterPassword(String(registrationData.Password));
    await RegisterPage.enterConfirmPassword(String(registrationData.Password));
    await RegisterPage.clickPrivacyPolicyCheckbox();
    await expect(RegisterPage['privacyPolicyCheckbox']).toBeChecked();
  });

  await test.step('Submit registration and verify success', async () => {
    await RegisterPage.clickContinueButton();
    await expect(RegisterPage['successMessage']).toHaveText('Your Account Has Been Created!');
  });
  
});