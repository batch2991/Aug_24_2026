import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";

export class MyWorld extends World
{
    page!:Page
    browser!:Browser
    context!:BrowserContext

    loginpage!:LoginPage
    productpage!:ProductPage
}
setWorldConstructor(MyWorld)