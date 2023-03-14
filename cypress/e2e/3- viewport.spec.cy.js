
['iphone-8','ipad-mini','macbook-16'].forEach(viewport =>{
    


it ('Should open the website in diff. views',()=>{

    //we can use view port to make width and height of the test runner
cy.visit('cypress/index.html');

cy.viewport(viewport)
    
    });

})