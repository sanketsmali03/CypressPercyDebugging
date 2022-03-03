const TEST_WIDTHS = [375, 480, 720, 1280, 1440, 1920];
let scrollToBottom = require("scroll-to-bottomjs");

describe('TodoMVC', function() {
  beforeEach(function() {
    cy.viewport(1024, 768)
    cy.visit('https://prod.adm.com/en-us/')
    
  })

  it('Loads the TodoMVC app', function() {
  cy.wait(5000)
  cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
  cy.percySnapshot("HOME",{ widths: TEST_WIDTHS,enableJavaScript: true})
  cy.wait(5000)

  })


})
