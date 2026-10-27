import { BasePage } from "./BasePage";

export class ProductPage extends BasePage
{

    private readonly prodheading:string="Products"
    private readonly menu1:string="Open Menu"
    private readonly logoutlink:string="Logout"   

    public async verifyHeading()
    {
        await this.page.waitForSelector("//span[.='Products']",{timeout:10000})
        return await this.page.getByText(this.prodheading).isVisible()
    }
    public async logout()
    {
         await this.page.getByText(this.menu1).click()
         await this.page.getByText(this.logoutlink).click()
    }
    public async cartpage()
    {
        console.log("Hello")

        console.log("Hello world")

        console.log("new line added")
    }
    
}