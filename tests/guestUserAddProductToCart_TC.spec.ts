import { test, expect } from '../fixtures';

test('User add Product to cart', async ({ page, homePage: HomePage, productPage: ProductPage, productDescriptionPage: ProductDescriptionPage }) => {

  await test.step('Navigate to BASE_URL', async () => {
    await page.goto(process.env.BASE_URL);
  });

  
  await test.step('Navigate to Desktop products', async () => {
    await ProductPage.clickDesktopTab();
    await ProductPage.clickShowAllDesktop();
  });

  await test.step('Apply sorting and filters', async () => {
    await ProductPage.selectSortValue('Price (Low > High)');
  });


  await test.step('Add product to cart', async () => {
    await ProductPage.clickAddToCart('iPod Classic');
    await ProductPage.getSucessMsg();
    await expect(ProductPage['successMsg']).toHaveText(
      'Success: You have added iPod Classic to your shopping cart! ×'
    );
  });


});
