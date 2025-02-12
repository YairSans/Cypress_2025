///<reference types = "Cypress">
import { Loginmethods } from "./POM/Login.Methods"
import { AdminMeth } from "./POM/Admin.Meth"

let numero_total = 5
describe('Login OrangeHM', () => {
  beforeEach(()=>{
    Loginmethods.Visit()    
    Loginmethods.Enter("Admin","admin123")
    Loginmethods.Click()
  })
  it("Iniciar registro Admin correcto", () => {
    AdminMeth.Select_Opcion_ADMIN()
    AdminMeth.Select_Role()
    AdminMeth.Select_Status()
    AdminMeth.Enter_Name("Test")
    AdminMeth.Enter_UserName("Test12345")
    AdminMeth.Enter_Password("@L1234567a","@L1234567a")
    AdminMeth.Accept()
  })
  it("Iniciar registro Admin, Ya existe", () => {
    AdminMeth.Select_Opcion_ADMIN()
    AdminMeth.Select_Role()
    AdminMeth.Select_Status()
    AdminMeth.Enter_Name("Test")
    AdminMeth.Enter_UserName("Test12345")
    const T = cy.xpath("//span[contains(@class,'message')]")
    const Ty = T.text
    if (Ty != "Already exists"){
      cy.log("User name ya ha sido registrato, intenta con otro")
      AdminMeth.Enter_UserName("QATest12345")
    } else
    cy.log("Es requerido otro Username diferente")
  })
  it("Iniciar registro Admin y Cancelar", () => {
    AdminMeth.Select_Opcion_ADMIN()
    AdminMeth.Select_Role()
    AdminMeth.Select_Status()
    AdminMeth.Enter_Name("Test")
    AdminMeth.Enter_UserName("Test12345")
    AdminMeth.Enter_Password("@L1234567a","@L1234567a")
    AdminMeth.Cancel()
  })
  it("Iniciar registro Admin, Campos vacios", () => {
    AdminMeth.Select_Opcion_ADMIN()
    AdminMeth.Accept()
  })
  it("Iniciar registro Admin, Pass diferente", () => {
    AdminMeth.Select_Opcion_ADMIN()
    AdminMeth.Select_Role()
    AdminMeth.Select_Status()
    AdminMeth.Enter_Name("Test")
    AdminMeth.Enter_UserName("Test12345")
    AdminMeth.Enter_Password("@L1234567a","@L12345")
    AdminMeth.Accept()
    const T = cy.xpath("//span[contains(@class,'message')]")
    const Ty = T.text
    if (Ty != "Passwords do not match"){
      cy.log("No hace match el password ")
    AdminMeth.Enter_Password("@L1234567a","@L1234567a")
    } else
    cy.log("Es requerido ingresar un password identico")
  })
  it("Realizar 5 registros", () => {
    for (let num=1; num=numero_total; num++){
      //*100 es el rango de numeros enteros que utilizara
      let cantidad = Math.floor(Math.random() *100)
      AdminMeth.Select_Opcion_ADMIN()
      AdminMeth.Select_Role()
      AdminMeth.Select_Status()
      AdminMeth.Enter_Name("Test")
      AdminMeth.Enter_UserName("Test"+cantidad)
      AdminMeth.Enter_Password("@L1234567a","@L1234567a")
      AdminMeth.Cancel()
    }
  })
})