require('cypress-xpath');

export class AdminEle {
    static get Button (){
        return{
            get Admin(){
                return cy.xpath("//span[text()='Admin']").should("be.visible")
            },
            get Add(){
                return cy.xpath("//i[@class='oxd-icon bi-plus oxd-button-icon']").should("be.visible")
            },
            get Save(){
                return cy.xpath("//button[@type='submit']").should("be.visible")
            },
            get Cancel(){
                return cy.xpath("//div[@class='orangehrm-background-container']").should("be.visible")
            }
        }
    }
    static get Texts (){
        return{
            get Rol(){
                return cy.xpath("(//div[contains(.,'-- Select --')])[14]").should("be.visible")
            },
            get Rol_Option(){
                return cy.xpath("//div[@role='option'][contains(.,'Admin')]").should("be.visible")
            },
            get Status(){
                return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').should("be.visible")
            },
            get Status_Option(){
                return cy.xpath("//div[@role='option'][contains(.,'Enabled')]").should("be.visible")
            },
            get Name(){
                return cy.xpath("//input[@placeholder='Type for hints...']").should("be.visible")
            },
            get Name_Option(){
                return cy.xpath("(//span[contains(.,'sww  test')])[1]").should("be.visible")
            }, 
            get Username(){
                return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible")
            },
            get Password(){
                return cy.xpath("(//input[contains(@type,'password')])[1]").should("be.visible")
            },
            get Confirm_Password(){
                return cy.xpath("(//input[contains(@autocomplete,'off')])[3]").should("be.visible")
            }
        }
    }
}