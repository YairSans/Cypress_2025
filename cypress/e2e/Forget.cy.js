///<reference types = "Cypress">
import { Loginmethods } from "./POM/Login.Methods"
import { Forgetmethods } from "./POM/Forget.Methods"

describe('Forget password OrangeHM', () => {
  beforeEach(()=>{
    Loginmethods.Visit()
  })
  it("Reset correcto", () => {
    Forgetmethods.Click_Forget()
    Forgetmethods.Click_Reset("Admin")
  })
  it("Cancelar Reset", () => {
    Forgetmethods.Click_Forget()
    Forgetmethods.Click_Cancel()
  })
})


