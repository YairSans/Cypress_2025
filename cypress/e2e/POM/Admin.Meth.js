import { AdminEle } from "./Admin.Ele"

let Wait1 =1000

export class AdminMeth{
    static Select_Opcion_ADMIN(){
        AdminEle.Button.Admin.click()
        //Se comenta para la prueba de Edit
        //AdminEle.Button.Add.click()
        cy.wait(Wait1)
    }
    static Select_Role(){
        AdminEle.Texts.Rol.click()
        AdminEle.Texts.Rol_Option.click()
        cy.wait(Wait1)
    }
    static Select_Status(){
        AdminEle.Texts.Status.click()
        AdminEle.Texts.Status_Option.click()
        cy.wait(Wait1)
    }
    static Enter_Name(Name){
        AdminEle.Texts.Name.clear().type(Name)
        cy.wait(Wait1)
        AdminEle.Texts.Name_Option.click()
        cy.wait(Wait1)
    }
    static Enter_UserName(User){
        AdminEle.Texts.Username.clear().type(User)
        cy.wait(Wait1)
    }
    static Enter_Password(Pass1,Pass2){
        AdminEle.Texts.Password.clear().type(Pass1)
        AdminEle.Texts.Confirm_Password.clear().type(Pass2)
        cy.wait(Wait1)
    }
    static Accept(){
        AdminEle.Button.Save.click()
        cy.wait(Wait1)
    }
    static Cancel(){
        AdminEle.Button.Cancel.click()
        cy.wait(Wait1)
    }
} 