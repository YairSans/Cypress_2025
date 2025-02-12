require('cypress-xpath');

export class BE_Ele {
    static get Button (){
        return{
            get Search(){
                return cy.xpath("//button[@type='submit']").should("be.visible")
            },
            get Edit(){
                return cy.xpath("//i[@class='oxd-icon bi-pencil-fill']").should("be.visible")
            }
        }
    }
    static get Texts (){
        return{
            get Username(){
                return cy.get(':nth-child(2) > .oxd-input').should("be.visible",{timeout:3000})
            },
            get Password(){
                return cy.xpath("(//input[contains(@type,'password')])[1]").should("be.visible",{timeout:3000})
            },
            get Confirm_Password(){
                return cy.xpath("(//input[contains(@autocomplete,'off')])[3]").should("be.visible",{timeout:3000})
            }
        }
    }
    static get Checks (){
        return{
            get Yes(){
                return cy.xpath("//label[contains(.,'Yes')]").should("be.visible")
            }
        }
    }
    static get Label (){
        return{
            get Edit(){
                return cy.get('.orangehrm-card-container > .oxd-text--h6').should("be.visible")
            }
        }
    }
}