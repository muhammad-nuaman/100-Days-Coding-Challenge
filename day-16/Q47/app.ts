/*

<<<< Question 47: >>>> 

# Advanced Array Destructuring: 

> Given an array of objects representing different laptops, each with properties
make, model, and year, use array destructuring to assign the first and second
laptops to variables. Then, log these variables.

*/

// Define an Objects Array
const laptops: { make: string; model: string; year: number }[] = [
  { make: "Apple", model: "MacBook Pro", year: 2020 },
  { make: "Dell", model: "XPS", year: 2019 },
];

// Destructuring the first and second laptops
const [firstLaptop, secondLaptop] = laptops;

// Print the first and second laptops
console.log(firstLaptop);
console.log(secondLaptop);

