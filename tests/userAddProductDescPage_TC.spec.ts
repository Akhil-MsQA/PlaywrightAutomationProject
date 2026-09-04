import { test, expect } from '../fixtures';

test('User add Product to cart from Desc Page', async ({ page, homePage: HomePage, productPage: ProductPage, productDescriptionPage: ProductDescriptionPage, productCartPage: ProductCartPage, loginPage: LoginPage }) => {
  test.setTimeout(120000);

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
    await ProductPage.selectSortValue('Price (Low > High)');
  });

  await test.step('Select product Samsung SyncMaster 941BW', async () => {
    await ProductDescriptionPage.selectProduct('Samsung SyncMaster 941BW');
    const productName = await ProductDescriptionPage.getProductName();
    expect(productName).toBe('Samsung SyncMaster 941BW');
  });

  await test.step('Verify product specifications', async () => {
    await ProductDescriptionPage.getProductSpec();
  });

  await test.step('Add product to cart', async () => {
    await ProductDescriptionPage.clickaddToCart();
    await ProductPage.getSucessMsg();
    await ProductDescriptionPage.getCartCount();
    await ProductPage.clickWishListTab();
    await ProductPage.clickRemoveWishList();
    });

  await test.step('Manage cart', async () => {
    await ProductDescriptionPage.clickCartButton();
    await ProductDescriptionPage.clickRemoveCart('Samsung SyncMaster 941BW');
  });

});
