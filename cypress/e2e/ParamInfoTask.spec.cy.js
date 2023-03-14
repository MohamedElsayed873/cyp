it ('Should visit the website correctly',()=>{


cy.visit('https://subscribe.stctv.com/sa-ar')
cy.get('h4').should('be.visible')

cy.get('#name-الأساسية').should('be.visible')
cy.get('#name-بريميوم').should('be.visible')
cy.get('.extensions > :nth-child(2) > .plan-names > :nth-child(1)').should('be.visible')

cy.get('#الأساسية-selection').click



    });

    it ('Should visit the website correctly',()=>{


        cy.visit('https://subscribe.stctv.com/kw-ar')
        cy.get('.mobile-hidden').should('be.visible')
        cy.get('#name-لايت').should('be.visible')
        cy.get('#name-الأساسية').should('be.visible')
        cy.get('#name-بريميوم').should('be.visible')

        cy.get('#الأساسية-selection').click
        
        
        
        
            });
           

            it ('Should visit the website correctly',()=>{


                cy.visit(' https://subscribe.stctv.com/bh-ar')
                cy.get('.mobile-hidden').should('be.visible')
                cy.get(':nth-child(2) > :nth-child(1) > div > h2').should('be.visible')
                cy.get('#currency-لايت > i').should('be.visible')
                cy.get('#currency-الأساسية > i').should('be.visible')
                cy.get('#currency-بريميوم > i').should('be.visible')
                
                
                    });


   