import {test,expect,Page,Locator} from "@playwright/test"
import {login,logout} from "../../tests/ReusableCode/ReusableCode.spec"


test("Order History flow1", async()=>{

    const new_page : Page = await login("abcz1@gmail.com","abc123")

    const order_history_locator : Locator = await new_page.locator('//*[@id="column-right"]/div/a[6]');
    await order_history_locator.click();

    let order_history_title : string = await new_page.title();
    expect(order_history_title).toEqual("Order History");

    await new_page.screenshot({path : './Screenshots/Order_History_flow1.png'});


    await logout(new_page);

})