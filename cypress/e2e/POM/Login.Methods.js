import { Loginelements } from "./Login.Elements"
let Wait1 =1500

export class Loginmethods{
    static Visit(){
        const Page = cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        Page.title().should("eq","OrangeHRM")
        cy.wait(Wait1)
    }
    static Enter(user, pass){
        Loginelements.Texts.Name.type(user)
        Loginelements.Texts.Pass.type(pass)
        cy.wait(Wait1)
    }
    static Click(){
        Loginelements.Button.Login.click()
        cy.wait(Wait1)
    }
} 