import {Page,Locator,expect} from '@playwright/test';

export class homePage {
    private page: Page;
    private myAccountTab: Locator;
    private searchIcon:Locator;
    private addressBar:Locator;
    private pincode:Locator;
    private applyButton:Locator;
    private languageIcon:Locator;
    private addressValue:Locator;
    private continueButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountTab = page.locator("//span[text()='My Account']");
        this.searchIcon = page.locator("//input[@id='nav-search-submit-button']");
        this.addressBar = page.locator("//a[@id='nav-global-location-popover-link']");
        this.pincode = page.locator("//input[@id='GLUXZipUpdateInput']");
        this.applyButton = page.locator("//span[@id='GLUXZipUpdate-announce']");
        this.languageIcon = page.locator("//button[@class='nav-flyout-button nav-icon nav-arrow']");
        this.addressValue = page.locator("//span[@class='nav-line-2 nav-progressive-content']");
        this.continueButton = page.locator("//a[text()='Continue']");
    }

    public  async clickAccountTab() {
        await this.myAccountTab.waitFor({ state: 'visible' });
        await this.myAccountTab.click();
    }
    
    public async clickSearchButton() {
        await this.searchIcon.click();
    }

    public async clickAddressBar() {
        await this.addressBar.waitFor({ state: 'visible' });
        await this.addressBar.click();
    }

    public async guestUserAddPincode(pincode:string){
        await this.pincode.fill(pincode);        
    }

   public async verifyAddressValue() {
        await this.addressValue.waitFor({ state: 'visible' });
        const rawText = await this.addressValue.textContent();
        const address = rawText ? rawText.trim() : "";
        console.log(`Address Value: ${address}`);
}



    public async clickApplyButton(){
        await this.applyButton.click();
    }

    public async clickLanguageIcon(){
        await this.languageIcon.hover();
    }

    public async clickContinueButton(){
        await this.continueButton.waitFor({ state: 'visible' });
        await this.continueButton.click();
    }


}