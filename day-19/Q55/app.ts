/*
<<<<< Question 55: >>>>> 

# Double Numbers in an Array:

> Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

*/

// Define Numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Define Twice Numbers
const twiceNumbers: number[] = numbers.map(num => num * 2);

// Print Numbers
console.log(twiceNumbers);
