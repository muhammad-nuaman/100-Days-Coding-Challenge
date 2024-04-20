/*
<<<<< Question 44:  >>>>>

# Sandwiches: 

> Summarize sandwich orders with varying ingredients.

Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite
number of arguments, useful for handling lists of data like sandwich ingredients.

*/
// Define Sandwich Ingredients Items Type
type Items = [
    ('Chicken Spread' | 'Vegi Spread'),
    ('Chesse' | null)?,
    ('Lettuce' | null)?,
    ('Tomato' | null)?,
    ('Onion' | null)?
]

// Define Sandwich Ingredients Function
function sandwich(...items: Items) {
    items.forEach(item => {
        if (item) {
            console.group(`\n>> Sandwich Ingredients:`);
                console.log(' ● ' + item)
            console.groupEnd();
        }            
    });
}

// Call Functions
sandwich('Chicken Spread')
sandwich('Vegi Spread')