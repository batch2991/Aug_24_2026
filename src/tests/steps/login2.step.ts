import { When, Then } from "@cucumber/cucumber"
import { expect} from "@playwright/test";
import { MyWorld } from "../commons/MyWorld";


When('i will enter {string} and {string} and login', async function (this:MyWorld, uid: string, pwd: string) {
   await this.loginpage.login(uid,pwd)
});

Then('i should see the {string} error message on the application.', async function (this:MyWorld,err: string) {
    let msg = await this.loginpage.getErrormsg()
    expect(msg).toContain(err)
});