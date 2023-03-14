/*


//we can find an element by using tag name
it('find element by tag name',()=>{

cy.visit('cypress/index.html')

// get by css selector, we put the tag name inside get command
// html tag name
cy.get('h1')

});

//it.only >> execute only one test case

it('find element by ID',()=>{

    cy.visit('cypress/index.html')
    
    // to find any element by Id by #
    cy.get('#welcome')
    
    });

    it('find element by class name',()=>{

        cy.visit('cypress/index.html')
        
        // to find any element by class name ( we use the dot command)
        // in case of compound classes, we can use only
        //cy.get('.list1')
        
        cy.get('.list1.web')    

        }); */

        it('find element by attribute name',()=>{

            cy.visit('cypress/index.html')
            
            //to find element using any attribute, we use [value] 

            //to find the first element from a list of elements we use the first command
            //cy.get('h1').first();   
    

            //to find the last element from a list of elements we use the last command
            //cy.get('h1').last();


            //we can use children command without any arguments and with arguments
            //cy.get('.course-list').children('.web')

            cy.get('.course-list').children().first()
            cy.get('.course-list').children().last()
            cy.get('.course-list').children().eq(2);

            //find() = children()
            
            });
