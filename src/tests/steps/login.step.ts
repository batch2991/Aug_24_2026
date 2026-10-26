import {Given,When,Then, setDefaultTimeout} from "@cucumber/cucumber"
import {expect} from "@playwright/test"
import { MyWorld } from "../commons/MyWorld";

//setDefaultTimeout(30000)

Given('i am on the login page', async function (this:MyWorld) {
  await this.loginpage.openUrl("https://www.saucedemo.com")
});

When('i will enter valid userid and valid pwd and click login', async function (this:MyWorld) {
  await this.loginpage.login("standard_user","secret_sauce")
});

Then('i should be navigated to dashboard page', async function (this:MyWorld) {
  let status=await this.productpage.verifyHeading()
  await expect(status).toBe(true) 
});