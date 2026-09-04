import { Page, Locator,expect } from '@playwright/test';

export class productDescriptionPage {
  private page: Page;
  private productTitle: Locator;
  private productName: Locator;
  private selectOption: Locator;
  private textArea: Locator;
  private productSpec: Locator;
  private addToCart:Locator;
  private successMsg:Locator;
  private cartCount:Locator;
  private cartButton:Locator;
  private removeCartItem:Locator;

  constructor(page: Page) {
    this.initLocators(page);
  }

  private initLocators(page: Page) {
    this.page = page;
    this.productTitle = page.locator("//span[@id='productTitle']");
    this.productName = page.locator("//div[@class='col-sm-4']//h1");
    this.selectOption = page.locator("//select[@id='input-option217']");
    this.textArea = page.getByPlaceholder("Textarea");
    this.productSpec = page.locator("//div[@class='col-sm-4']//ul[@class='list-unstyled']");
    this.addToCart = page.locator("//button[@id='button-cart']");
    this.successMsg = page.locator("//div[@class='alert alert-success alert-dismissible']");
    this.cartCount = page.locator("//span[@id='cart-total']");
    this.cartButton = page.locator("//button[@type='button' and @class='btn btn-inverse btn-block btn-lg dropdown-toggle']");
    this.removeCartItem = page.locator("//button[@title='Remove' and @class='btn btn-danger btn-xs']")
    
    
  }

  public async selectProduct(productName: string) {
    const product = this.page.locator(`//a[contains(text(),'${productName}')]`);
    await product.first().waitFor({ state: 'visible' });
    await product.first().scrollIntoViewIfNeeded();
    await product.first().click();
}


  public async getProductName(){
    await this.productName.waitFor({ state: 'visible' });
    const name = await this.productName.textContent();
    console.log(`Product Name is : ${name}`);
    return name;
  }


  public async selectOptions() {
    if (await this.selectOption.isVisible()) {
    await this.selectOption.selectOption({ index: 1 });
    } else {
    console.log("Select option dropdown not present on screen.");
    }
  }

  public async enterTextArea(text: string) {
    if ((await this.textArea.isVisible())) {
    await this.textArea.fill(text);
    }
    else{
      console.log("TextArea is not present in the UI")
    }
  }



    public async getProductSpec() {
        await this.productSpec.first().waitFor({state:'visible'})
        const spec = await this.productSpec.first().textContent();
        console.log(spec)
    }

    public async clickaddToCart() {
        await this.addToCart.waitFor({state:'visible'})
        await this.addToCart.click();
    }

    public async getSuccessMsg(){
      await this.successMsg.waitFor({state:'visible'})
      const msg = await this.successMsg.textContent();
      console.log(msg);
    }

    public async getCartCount() {
      await this.cartCount.waitFor({ state: 'visible' });
      const countText = await this.cartCount.textContent();
      const count = parseInt(countText || '0', 10);
      console.log(`Cart Count After Adding: ${count}`);
      expect(count).toBeGreaterThan(0);
    }

    public async clickCartButton(){
      await this.cartButton.waitFor({state:'visible'})
      await this.cartButton.click();
    }

    public async clickRemoveCart(ProductName:string){
      const removeButton = this.page.locator(`//tbody//tr[td[@class='text-left']//a[text()='${ProductName}']]//button[@title='Remove']`)
      await removeButton.click();
    }



  







    
}