import{test,expect} from  "@playwright/test"
import{logginpage} from "../pages/logginpage"
import{homepages} from "../pages/homepage"
import{cart} from "../pages/cart"


// without POM
test.skip("loggin",async ({page})=>{
    await page.goto("https://demoblaze.com/")
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("aniketthakre")
    await page.locator("#loginpassword").fill("Password$1")
    await page.locator("//button[@onclick='logIn()']")
})

//with POM (Page Object Model)

test.skip ("loggin with POM",async({page}) =>{
     
    const loggin = new logginpage(page)
    await loggin.gotologgin()
    await loggin.logginpage('aniketthakre','Paswor$1')
    
})

test.skip ("homepage",async({page})=>{
    const loggin = new logginpage(page)
    const homes = new homepages(page)
    await loggin.gotologgin()
    await homes.home()
})

test ("cart",async({page})=>{
    const loggin = new logginpage(page)
    await loggin.gotologgin()
    await loggin.logginpage('aniketthakre','Paswor$1')
    const carts = new cart(page)
    await carts.cart()

})

