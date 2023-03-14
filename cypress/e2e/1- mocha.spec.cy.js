/// <reference types="cypress"/>

//const { describe } = require("mocha");



//const { xorBy } = require("cypress/types/lodash");

//it -> descibe a test case in mocha
//it -> two arguments , the first one is the name of test case , second one is the steps



//describe --> suite of our test cases 
// File can contain more than test suite
//context is the same as describe 


context ('Login Functionality', () => {


    //before >> it will be executed only one time before all test cases
    // if we have 3 test cases , before will ve executed one time
before(() => {
cy.log('I am inside the before hook')

})


//beforeeach>> will be executed before all and every test case
// if we have 3 test cases, before each will execute three times
beforeEach(() => {
    cy.log('I am inside the before each hook')

})


 //after >> it will be executed only one time after all test cases
// if we have 3 test cases , after will ve executed one time

after(() => {
    cy.log('I am inside the after hook')

})

//aftereach>> will be executed before all and every test case
// if we have 3 test cases, after each will execute three times
afterEach(() =>{

    cy.log('I am inside the aftereach hook')

})

    it ('Log something in cypress',function(){

        cy.log('I am inside a test case');
    });
    
    it ('test case no 2',() => {
    
        cy.log('I am inside test case 2');
    
    });

});

describe ('Order functionality',()=>{


    it ('Log something in cypress',function(){

        cy.log('I am inside a test case');
    });
    
    it ('test case no 2',() => {
    
        cy.log('I am inside test case 2');
    
    });


});
