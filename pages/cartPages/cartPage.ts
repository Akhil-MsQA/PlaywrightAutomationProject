import { Page, Locator,expect } from '@playwright/test';

export class productCartPage {
    private page: Page;
    private cartMsg:Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartMsg = page.locator("//div[@id='NATC_SMART_WAGON_CONF_MSG_SUCCESS']");
    }


    public async getCartMessage(){
        const message = await this.cartMsg.textContent();
        console.log(`Cart Message: ${message}`);
        return message;
    }
}