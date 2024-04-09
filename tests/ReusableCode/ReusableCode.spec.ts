import {test,expect,Browser,Page,Locator} from "@playwright/test"
import { chromium } from "playwright";
import { Context } from "vm";



export const login = async (email_id :string,pwvalue : string)=> {

        //const Browser_instance : {browser : Browser, context : Context, page : Page};
        const browser : Browser = await chromium.launch();
        const context : Context = await browser.newContext();
        const page : Page = await context.newPage();
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");


        const email_locator : Locator = await page.locator("#input-email");
        const password_locator : Locator = await page.locator('[name = "password"]');
        const Login_button_locator : Locator = await page.locator('[value="Login"]');

        await email_locator.fill(email_id);
        await password_locator.fill(pwvalue);
        await Login_button_locator.click();

        const title : string = await page.title();
        console.log("Title of the page after login : "+title);

        await page.screenshot({path : './Screenshots/homepage.png'});

        expect(title).toEqual("My Account");

        return page;
}

export const logout = async (logout_page : Page)=> {
    

    const My_Account_locator : Locator = await logout_page.locator('//*[@id="top-links"]/ul/li[2]/a/span[1]');

    await My_Account_locator.click();

    await logout_page.screenshot({path : './Screenshots/MyAccount_Dropdown.png'});

    const logout_locator : Locator = await logout_page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[5]/a');

    await logout_locator.click();

    const logoutpage_title : string = await logout_page.title();

    expect(logoutpage_title).toEqual("Account Logout");

    await logout_page.screenshot({path : './Screenshots/logout_page.png'});

    await logout_page.waitForTimeout(2000);


}

