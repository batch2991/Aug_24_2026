import { Before, After,setDefaultTimeout } from "@cucumber/cucumber";
import { MyWorld } from "./MyWorld";
import { chromium } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";

setDefaultTimeout(40000)
Before(async function (this: MyWorld) {
   this.browser = await chromium.launch({ headless: false })
   this.context = await this.browser.newContext({
      recordVideo: {
         dir: "./reports/videos/",   // folder where videos are saved
         size: { width: 1280, height: 720 }
      }
   })

   this.page = await this.context.newPage()

   this.loginpage = new LoginPage(this.page)
   this.productpage = new ProductPage(this.page)
})

After(async function (this: MyWorld, { pickle }) {
   let img = await this.page.screenshot({ path: `./reports/images/${pickle.name}-${Date.now()}.png` })
   this.attach(img, "image/png")

   const video = this.page.video();
   await this.context.close();
   if (video) {
      const path = await video.path();
      const fs = require("fs");
      const videoBuffer = fs.readFileSync(path);
      await this.attach(videoBuffer, "video/webm");
   }


   this.browser.close()
})
