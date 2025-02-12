require('cypress-xpath');

export class Forgetelements {
    static get Button (){
        return{
            get Reset(){
                return cy.xpath("//button[@type='submit']").should("be.visible")
            },
            get Cancel(){
                return cy.xpath("//button[@type='button']").should("be.visible")
            }
        }
    }
    static get Texts (){
        return{
            get Username(){
                return cy.xpath("//input[contains(@name,'username')]").should("be.visible")
            }
        }
    }
    static get Links (){
        return{
            get Forget(){
                return cy.xpath("//p[contains(.,'Forgot your password?')]").should("be.visible")
            }
        }
    }
}