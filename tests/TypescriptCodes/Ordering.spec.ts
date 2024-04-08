import {test,expect,Page,Locator} from "@playwright/test"

import {login,logout} from "../../tests/ReusableCode/ReusableCode.spec"

let email_id : string = "abcz1@gmail.com";
let password : string = "abc123";

test("Ordering item", async ()=>{

    const page_after_login : Page = await login(email_id,password);

    // const width = await page_after_login.evaluate(() => window.outerWidth);
    //     const height = await page_after_login.evaluate(() => window.outerHeight);
    //     await page_after_login.setViewportSize({width,height});

    const download_locator : Locator = await page_after_login.locator('//*[@id="column-right"]/div/a[7]');

    await download_locator.click();

    const download_page_title : string = await page_after_login.title();

    console.log(download_page_title);
    
    await page_after_login.screenshot({path : './Screenshots/download_page.png'});

    expect(download_page_title).toEqual("Account Downloads");

    await logout(page_after_login);

    

})
