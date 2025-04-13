const { expect } = require("allure-playwright")

exports.logginpage = 

class logginpage {
     
    constructor (page/*fixture*/){
        //attributes
        this.page= page
        this.logginlink="#login2"
        this.usernameinput="#loginusername"
        this.passwordinput="#loginpassword"
        this.logginbutton="//button[@onclick='logIn()']"
        this.profile="//a[@id='nameofuser']"
    }
       //1st method for opening the page
    async gotologgin (){
        await this.page.goto("https://demoblaze.com/")
    }
        // 2nd method for loggin page
    async logginpage(username , password){
        await this.page.locator(this.logginlink).click()
        await this.page.locator(this.usernameinput).fill(username)
        await this.page.locator(this.passwordinput).fill(password)
        await this.page.locator(this.logginbutton).click()
        const profile = await this.page.locator(this.profile)
        await expect(profile).toBeVisible()

    }
}