import {Page,expect,Locator} from '@playwright/test';

export class loginPage{
    private page:Page;
    private loginButton:Locator;
    private usernameInput:Locator;
    private passwordInput:Locator;
    private loginSubmitButton:Locator;
    private logoutButton:Locator;


    constructor(page:Page){
        this.page=page;
        this.loginButton = page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=account/login' and text()='Login']");
        this.usernameInput = page.locator("#input-email");
        this.passwordInput = page.locator("#input-password");
        this.loginSubmitButton = page.locator("//input[@value='Login']");
        this.logoutButton = page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=account/logout' and text()='Logout']");
        


    }

    public async clickLoginButton(){
        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.click();
    }

    public async enterUsername(username:string){
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);
    }

    public async enterPassword(password:string){
        await this.passwordInput.waitFor({ state: 'visible' });
        await this.passwordInput.fill(password);
    }

    public async clickLoginSubmitButton(){
        await this.loginSubmitButton.waitFor({ state: 'visible' });
        await this.loginSubmitButton.click();
    }

    public async clickLogoutButton(){
        await this.logoutButton.first().waitFor({state:'visible'});
        await this.logoutButton.first().click();
    }

}