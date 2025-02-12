import { Forgetelements } from "./Forget.Elements"
let Wait1 =1500

export class Forgetmethods{
    static Click_Forget(){
        Forgetelements.Links.Forget.click()
        cy.wait(Wait1)
    }
    static Click_Reset(Admin){
        Forgetelements.Texts.Username.type(Admin)
        Forgetelements.Button.Reset.click()
        const Text = cy.xpath("//h6[contains(.,'Reset Password link sent successfully')]").should("have.text","Reset Password link sent successfully")
        if (Text == "Reset Password link sent successfully")
            print("Validacion correcta")
        else
            print("Validacion incorrecta")
        cy.wait(Wait1)
    }
    static Click_Cancel(){
        Forgetelements.Button.Cancel.click()
    }
} 