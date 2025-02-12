import { BE_Ele } from "./B_E_Ele"

let Wait1 =1000

export class BE_Meth{
    static Enter_Username(User){
        BE_Ele.Texts.Username.type(User)
    }
    static Click_Search(){
        BE_Ele.Button.Search.click({force:true})
        cy.wait(Wait1)
    }
    static Click_Edit(){
        BE_Ele.Button.Edit.click({force:true})
        BE_Ele.Label.Edit.should("have.text","Edit User")
        cy.wait(Wait1)
    }
    static Click_Yes(){
        BE_Ele.Checks.Yes.click({force:true})
        cy.wait(Wait1)
    }
} 