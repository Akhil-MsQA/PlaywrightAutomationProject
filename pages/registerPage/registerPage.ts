import {Page,Locator,expect} from '@playwright/test';


export class registerPage {
    private page: Page;
    private registerButton: Locator;
    private firstName:Locator;
    private lastName:Locator;
    private email:Locator;
    private telephone:Locator;
    private password:Locator;
    private confirmPassword:Locator;
    private privacyPolicyCheckbox:Locator;
    private continueButton:Locator;
    private successMessage:Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerButton = page.locator("//a[@href='https://naveenautomationlabs.com/opencart/index.php?route=account/register' and text()='Register']");
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.email = page.getByPlaceholder("E-Mail");
        this.telephone = page.getByPlaceholder("Telephone");
        this.password = page.getByPlaceholder("Password");
        this.confirmPassword = page.locator("//input[@id='input-confirm']");
        this.privacyPolicyCheckbox = page.locator("//input[@type='checkbox' and @value='1']");
        this.continueButton = page.locator("//input[@type='submit' and @value='Continue']");
        this.successMessage = page.locator("//div[@id='content']//h1");




    }

    public async clickRegisterTab(){
        await this.registerButton.waitFor({ state: 'visible' });
        await this.registerButton.click();
        
    }

    public async enterFirstName(firstName:string){
        await this.firstName.waitFor({ state: 'visible' });
        await this.firstName.fill(firstName);
    }

    public async enterLastName(lastName:string){
        await this.lastName.waitFor({ state: 'visible' });
        await this.lastName.fill(lastName);
    }

    public async enterEmail(email:string){
        await this.email.waitFor({ state: 'visible' });
        await this.email.fill(email);
    }

    public async enterTelephone(telephone:string){
        await this.telephone.waitFor({ state: 'visible' });
        await this.telephone.fill(telephone);
    }

    public async enterPassword(password:string){            
        await this.password.first().waitFor({ state: 'visible' });
        await this.password.first().fill(password);
    }

    public async enterConfirmPassword(confirmPassword:string){
        await this.confirmPassword.waitFor({ state: 'visible' });
        await this.confirmPassword.fill(confirmPassword);
    }

    public async clickPrivacyPolicyCheckbox(){
        await this.privacyPolicyCheckbox.waitFor({ state: 'visible' });
        await this.privacyPolicyCheckbox.check();
    }

    public async clickContinueButton(){
        await this.continueButton.waitFor({ state: 'visible' });
        await this.continueButton.click();
    }

    public async getSuccessMessage() {
        await this.successMessage.waitFor({ state: 'visible' });
        const msg =  await this.successMessage.textContent();
        console.log('Success message is: ' + msg);
    }

    






}