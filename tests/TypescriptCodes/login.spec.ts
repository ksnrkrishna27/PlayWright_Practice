import {test,expect,Browser,Page,Locator} from "@playwright/test"
import { channel } from "diagnostics_channel";
import { before } from "node:test";
import { webkit,chromium,firefox } from "playwright"


    test("login functionality",{tag:'@login'},async() => {

        const browser : Browser = await chromium.launch({channel : 'chrome'});
        const page : Page = await browser.newPage();
        await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

        const email_locator : Locator = await page.locator("#input-email");
        const password_locator : Locator = await page.locator('[name = "password"]');
        const Login_button_locator : Locator = await page.locator('[value="Login"]');

        await email_locator.fill("abcz@gmail.com");
        await password_locator.fill("abc123");
        await Login_button_locator.click();

        const title : string = await page.title();
        console.log("Title of the page after login : "+title);

        await page.screenshot({path : 'homepage.png'});

        expect(title).toEqual("My Account");

        await browser.close();


    });
