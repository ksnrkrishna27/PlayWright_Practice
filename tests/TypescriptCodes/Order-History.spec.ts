import {test,expect,Page,Locator} from "@playwright/test"
import {login,logout} from "../../tests/ReusableCode/ReusableCode.spec"
import { describe } from "node:test"


describe('Order History flows', ()=> {   

test("Order History flow1",{tag: ['@flow1','@Order-Historyflows']}, async()=>{

    const new_page : Page = await login("abcz1@gmail.com","abc123")

    const order_history_locator : Locator = await new_page.locator('//*[@id="column-right"]/div/a[6]');
    await order_history_locator.click();

    let order_history_title : string = await new_page.title();
    expect(order_history_title).toEqual("Order History");

    await new_page.screenshot({path : './Screenshots/Order_History_flow1.png'});

    await new_page.waitForTimeout(2000);

    await logout(new_page);

})

test("Order History flow2",{tag: ['@flow2','@Order-Historyflows']}, async() =>{

    const new_page : Page = await login("abcz1@gmail.com","abc123");

    const My_Account_locator : Locator = await new_page.locator('//*[@id="top-links"]/ul/li[2]/a/span[1]');
    await My_Account_locator.click();

    const order_history_locator : Locator = await new_page.locator('//*[@id="top-links"]/ul/li[2]/ul/li[2]/a');
    await order_history_locator.click();

    let order_history_title : string = await new_page.title();
    expect(order_history_title).toEqual("Order History");

    await new_page.screenshot({path : './Screenshots/Order_History_flow2.png'});

    await new_page.waitForTimeout(2000);

    await logout(new_page);


})

});