const { expect } = require("allure-playwright")

exports.homepages=

class homepages {

    constructor (page) {
        this.page = page
        this.category ="//a[@id='cat']"
        this.phone ="//div[@id='contcont']//a[2]"
        this.laptops="//a[3]"
        this.monitor ="//a[4]"
    }
    
    
    async home (){
        
        const cat =await this.page.locator(this.category)
        const ph = await this.page.locator(this.phone)
        const lapp = await this.page.locator(this.laptops)
        const mon = await this.page.locator(this.monitor)
       
        await expect(cat).toBeVisible()
        await expect(ph).toBeVisible()
        await expect(lapp).toBeVisible()
        await expect(mon).toBeVisible()


    }
}