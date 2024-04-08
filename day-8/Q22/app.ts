/*
<<<< Question 22: >>>>>

 # Intentional Error: 
 
 > Try to produce an array index error in one of your programs. 
 
 > Correct the error before finishing.

*/

// Define an Grocery Array
const grocery: string[] = ['Milk', 'Eggs', 'Bread', 'Cheese'];


// Intentional Error
// console.log(grocery['Milk']);

// Print 
console.log(`Grocery Item:  ${grocery[0]}`);
console.log(`Grocery Item:  ${grocery['1']}`);

