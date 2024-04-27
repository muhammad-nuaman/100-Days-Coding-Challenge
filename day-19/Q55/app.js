"use strict";
/*
<<<<< Question 55: >>>>>

# Double Numbers in an Array:

> Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Numbers
const numbers = [1, 2, 3, 4, 5];
// Define Twice Numbers
const twiceNumbers = numbers.map(num => num * 2);
// Print Numbers
console.log(twiceNumbers);
