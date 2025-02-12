require('cypress-xpath');

export class Loginelements {
    static get Button (){
        return{
            get Login(){
                return cy.xpath("//button[@type='submit']").should("be.visible")
            }
        }
    }
    static get Texts (){
        return{
            get Name(){
                return cy.xpath("//input[contains(@name,'username')]").should("be.visible")
            },
            get Pass(){
                return cy.xpath("//input[contains(@name,'password')]").should("be.visible")
            }
        }
    }
}