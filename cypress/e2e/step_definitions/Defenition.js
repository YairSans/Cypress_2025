///<reference types = "Cypress">
require('cypress-xpath');
import { Loginmethods } from "../POM/Login.Methods"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("El usuario abre la pagina para primer login",()=>{
    Loginmethods.Visit()
});
When ("El usuario ingresar su User {word}",(Test)=>{
    cy.log("porbado los parametro")
    cy.xpath("//input[contains(@name,'username')]").should("be.visible").clear().type(Test)
});
When ("El usuario ingresar su Pass {word}",(Test2)=>{
    cy.log("porbado los parametro")
    cy.xpath("//input[contains(@name,'password')]").should("be.visible").clear().type(Test2)
});
Then ("Validar se pueda realizar Login correctamente",()=>{
    Loginmethods.Click()
})