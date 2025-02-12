Feature: Primer Demo
ESTO ES UN PRIMER DEMO UTILIZANDO CUCUMBER
Scenario Outline: Scenario Outline name: Probando los scripts con Parametros
    Given El usuario abre la pagina para primer login
    When El usuario ingresar su User <Test>
    When El usuario ingresar su Pass <Test2>
    Then Validar se pueda realizar Login correctamente
    Examples:
    |Test |Test2 |
    |Hola |Test1 |
    |Hola |Test2 |
    |Hola |Test3 |
    |Hola |Test4 |
    |Hola |Test5 |
