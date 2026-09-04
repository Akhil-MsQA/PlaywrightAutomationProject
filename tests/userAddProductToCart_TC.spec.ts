import { test, expect } from '../fixtures';

test('User add Product to cart', async ({ page, homePage: HomePage, productPage: ProductPage, loginPage: LoginPage, productDescriptionPage: ProductDescriptionPage, registerPage: RegisterPage }) => {

  await test.step('Navigate to BASE_URL', async () => {
    await page.goto(process.env.BASE_URL);
  });

  await test.step('Login as Guest User', async () => {
    await HomePage.clickAccountTab();
    await LoginPage.clickLoginButton();
    await LoginPage.enterUsername(process.env.USER_NAME);
    await LoginPage.enterPassword(process.env.PASS_WORD);
    await LoginPage.clickLoginSubmitButton();
    await expect(page).toHaveTitle('My Account');
  });

  await test.step('Navigate to Desktop products', async () => {
    await ProductPage.clickDesktopTab();
    await ProductPage.clickShowAllDesktop();
  });

  await test.step('Apply sorting and filters', async () => {
    await ProductPage.selectSortValue('Price (Low > High)');
  });

  await test.step('Add product to wishlist', async () => {
    await ProductPage.clickWishListIcon('iPod Classic');
    await ProductPage.getSucessMsg();
    await ProductPage.getWishlistCount();
  });

  await test.step('Add product to cart', async () => {
    await page.reload();
    await ProductPage.clickAddToCart('iPod Classic');
    await ProductPage.getSucessMsg();
    await expect(ProductPage['successMsg']).toHaveText(
      'Success: You have added iPod Classic to your shopping cart! ×'
    );
  });

  await test.step('Manage wishlist and cart', async () => {
    await ProductPage.clickWishListTab();
    await ProductDescriptionPage.clickCartButton();
    await ProductDescriptionPage.clickRemoveCart('iPod Classic');
  });

  await test.step('Logout and continue', async () => {
    await HomePage.clickAccountTab();
    await LoginPage.clickLogoutButton();
    await HomePage.clickContinueButton();
  });

});
