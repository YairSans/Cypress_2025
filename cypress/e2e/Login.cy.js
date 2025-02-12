///<reference types = "Cypress">
import { Loginmethods } from "./POM/Login.Methods"

describe('Login OrangeHM', () => {
  beforeEach(()=>{
    Loginmethods.Visit()
  })
  before(function(){
    cy.fixture("Data").then(function(Write){
      globalThis.Write=Write
    })
  })
  it("Credenciales correctas", () => {
    Loginmethods.Enter(Write.User,Write.Pass)
    Loginmethods.Click()
  })
  it("Credenciales incorrectas", () => {
    Loginmethods.Enter("1234567","1234567")
    Loginmethods.Click()
  })
  it("Password incorrecto", () => {
    Loginmethods.Enter("Admin","1234567")
    Loginmethods.Click()
    const T = cy.xpath("//p[contains(.,'Invalid credentials')]")
    const Ty = T.text
    if (Ty != "Invalid credentials")
      cy.log("Es requerido ingresar las credenciales correctas ")
    Loginmethods.Enter("Admin","admin123")
    Loginmethods.Click()
  })
  it("Username incorrecto", () => {
    Loginmethods.Enter("1234567","admin123")
    Loginmethods.Click()
    const T = cy.xpath("//p[contains(.,'Invalid credentials')]")
    const Ty = T.text
    if (Ty != "Invalid credentials")
      cy.log("Es requerido ingresar las credenciales correctas ")
    Loginmethods.Enter("Admin","admin123")
    Loginmethods.Click()
  })
  it("Sin credenciales", () => {
    Loginmethods.Click()
    const T = cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
    const Ty = T.text
    if (Ty != "Required")
      cy.log("Es requerido ingresar las credenciales correctas ")
    Loginmethods.Enter("Admin","admin123")
    Loginmethods.Click()
  })
})