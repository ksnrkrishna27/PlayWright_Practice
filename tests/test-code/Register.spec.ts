import {test,expect,Locator,Page, Browser, chromium} from "@playwright/test"
import { login } from "../ReusableCode/util"

test("Registering a User",{tag:'@Register'}, async() => {
    
    const browser : Browser = await chromium.launch();
    const page : Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    const firstname_locator : Locator =  page.locator('[name="firstname"]')
    await firstname_locator.fill("abc");

    const lastname_locator : Locator =  page.locator('[name="lastname"]')
    await lastname_locator.fill("def");

    const email_locator : Locator =  page.locator('[name="email"]');
    await email_locator.fill("abcz1@gmail.com");

    const phonenum_locator : Locator =  page.locator('[name="telephone"]');
    await phonenum_locator.fill("1234567891");

    const pw_locator : Locator =  page.locator('[name="password"]');
    await pw_locator.fill("abc123");

    const confirmpw_locator : Locator = page.locator('[name="confirm"]');
    await confirmpw_locator.fill("abc123");


    page.close();

})