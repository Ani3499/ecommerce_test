import { expect } from "allure-playwright"
exports.cart = 
class cart {

    constructor (page ) {
        this.page = page
        this.iteam="//a[normalize-space()='Samsung galaxy s6']"
        this.itemtitle="//h2[normalize-space()='Samsung galaxy s6']"
        this.cartitem="//a[normalize-space()='Add to cart']"
    }

    async cart (){
        await this.page.locator(this.page)
        const it=await this.page.locator(this.iteam)
        await expect(it).toBeVisible()
        await this.page.locator(this.iteam).click()
        const itti = await this.page.locator(this.itemtitle)
        await expect(itti).toBeVisible()
        await this.page.locator(this.cartitem).click()
        this.page.on("dialog" ,async (con) => {
            expect(con.type()).toContain("alert")
            expect(con.message()).toContain("Product added")
            console.log(con.message())
       
            await con.accept()
       
           })

        

    }
} 
