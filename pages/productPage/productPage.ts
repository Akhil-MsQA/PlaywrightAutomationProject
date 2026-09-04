import {Page,Locator,expect} from '@playwright/test';


export class productPage{
    private page: Page;
    private DesktopTab:Locator;
    private sorticonvalue:Locator;
    private product:Locator;
    private showAllDesktop:Locator;
    private successMsg:Locator;
    private wishlistCount:Locator;
    private wishlistRemove:Locator;
    

    
    
    
    
    constructor(page: Page) {
        this.page = page;
        this.DesktopTab= page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20' and text()='Desktops']");
        this.showAllDesktop = page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20' and text()='Show All Desktops']")
        this.sorticonvalue = page.locator("//select[@id='input-sort']");
        this.product = page.locator("//div[@class='a-section a-spacing-none puis-padding-right-small s-title-instructions-style puis-desktop-list-title-instructions-style']");
        this.successMsg = page.locator("//div[@class='alert alert-success alert-dismissible']");
        this.wishlistCount = page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist' and @id='wishlist-total']");
        this.wishlistRemove = page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist&remove=48' ]")
    }



    public async clickDesktopTab(){
        await this.DesktopTab.waitFor({ state: 'visible' });
        await this.DesktopTab.click();
    }

    public async clickShowAllDesktop(){
        await this.showAllDesktop.waitFor({ state: 'visible' });
        await this.showAllDesktop.click();
    }

    public async selectSortValue(value:string){
        await this.sorticonvalue.waitFor({ state: 'visible' });
        await this.sorticonvalue.selectOption({label:value});
        
    }

    public async clickWishListIcon(ProductName:string){
        const wishListIcon = this.page.locator(`//div[@class='product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12']    [ .//a[text()='${ProductName}'] ]  //button[2]`)
        await wishListIcon.click();
    }

    public async clickAddToCart(ProductName:string){
        const addtocart = this.page.locator(`//div[@class='product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12']    [ .//a[text()='${ProductName}'] ]    //div[@class='button-group']//button[.//span[text()='Add to Cart']]`);
        await addtocart.click();
        
    
    }

    public async getWishlistCount() {
        await this.wishlistCount.waitFor({ state: 'visible' });
        const countText = await this.wishlistCount.textContent();
        console.log(`Wishlist Count Text: ${countText}`);
        const match = countText?.match(/\d+/);
        const count = match ? parseInt(match[0], 10) : 0;
        expect(count).toBeGreaterThan(0);
        return count; // optional: return for reuse
}


    public async getSucessMsg(){
        await this.successMsg.waitFor({ state: 'visible' });
        const rawText = await this.successMsg.textContent();
        const successMessage = rawText ? rawText.trim() : "";
        console.log(`Success Message: ${successMessage}`);      
       
    }

    public async clickWishListTab(){
        await this.wishlistCount.waitFor({state:'visible'});
        await this.wishlistCount.click();

    }

    public async clickRemoveWishList(){
        await this.wishlistRemove.waitFor({state:'visible'});
        await this.wishlistRemove.click();
    }



}