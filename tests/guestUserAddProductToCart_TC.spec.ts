import { test, expect } from '../fixtures';
import { readExcelData } from '../Utilities/utilities';

type ProductData = {
  TC: string;
  Productname: string;
};

const productData = readExcelData<ProductData>('Data.xlsx').find(
  (row) => row.TC === 'guestUserAddProductToCart_TC.spec',
);

if (!productData) {
  throw new Error('Data.xlsx must contain a Productname value for guestUserAddProductToCart_TC.spec');
}

const productName = productData.Productname;

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
    console.log(`Adding product to cart: ${productName}`);
    await ProductPage.clickAddToCart(productName);
    await ProductPage.getSucessMsg();
    await expect(ProductPage['successMsg']).toHaveText(
      `Success: You have added ${productName} to your shopping cart! ×`
    );
  });


});
