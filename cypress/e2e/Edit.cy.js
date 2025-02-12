///<reference types = "Cypress">
import { Loginmethods } from "./POM/Login.Methods"
import { AdminMeth } from "./POM/Admin.Meth"
import { BE_Meth } from "./POM/B_E_Meth"

describe('Login OrangeHM', () => {
  beforeEach(()=>{
    Loginmethods.Visit()    
    Loginmethods.Enter("Admin","admin123")
    Loginmethods.Click()
  })
  it("Editar Password", () => {
    AdminMeth.Select_Opcion_ADMIN()
    BE_Meth.Enter_Username("FMLName1")
    BE_Meth.Click_Search()
    BE_Meth.Click_Edit()
    BE_Meth.Click_Yes()
    AdminMeth.Enter_Password("L1234567a@","L1234567a@")
    AdminMeth.Accept()
  })
})