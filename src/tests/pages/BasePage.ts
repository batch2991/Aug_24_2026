import {Page} from "@playwright/test"

export class BasePage
{
    protected page:Page

    constructor(page:Page)
    {
        this.page=page
    }
    public async openUrl(url:string)
    {
        await this.page.goto(url)
    }
}