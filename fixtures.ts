import { test as base, expect } from '@playwright/test';
import { homePage } from './pages/homePages/homePage';
import { loginPage } from './pages/loginPage/loginPage';
import { registerPage } from './pages/registerPage/registerPage';
import { productPage } from './pages/productPage/productPage';
import { productDescriptionPage } from './pages/productPage/productDescriptionPage';
import { productCartPage } from './pages/cartPages/cartPage';

// Define the fixtures type
type PageFixtures = {
  homePage: homePage;
  loginPage: loginPage;
  registerPage: registerPage;
  productPage: productPage;
  productDescriptionPage: productDescriptionPage;
  productCartPage: productCartPage;
};

export const test = base.extend<PageFixtures>({
  // Fixture for homePage
  homePage: async ({ page }, use) => {
    const home = new homePage(page);
    await use(home);
    // Cleanup code here if needed (optional)
  },

  // Fixture for loginPage
  loginPage: async ({ page }, use) => {
    const login = new loginPage(page);
    await use(login);
  },

  // Fixture for registerPage
  registerPage: async ({ page }, use) => {
    const register = new registerPage(page);
    await use(register);
  },

  // Fixture for productPage
  productPage: async ({ page }, use) => {
    const product = new productPage(page);
    await use(product);
  },

  // Fixture for productDescriptionPage
  productDescriptionPage: async ({ page }, use) => {
    const prodDesc = new productDescriptionPage(page);
    await use(prodDesc);
  },

  // Fixture for productCartPage
  productCartPage: async ({ page }, use) => {
    const cart = new productCartPage(page);
    await use(cart);
  },

  
});

export { expect };
