"use strict";
/*

# Question 3:

# Name Cases:

> Store a person’s name in a variable,

> Then print that person’s name in lowercase, uppercase, and titlecase.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Store Person Name
let personName = "shoAib";
// Print into Lower Case
console.log(`Lower Case: ${personName.toLowerCase()}`);
// Print into Upper Case
console.log(`Upper Case: ${personName.toUpperCase()}`);
// Print into Title Case
console.log(`Title Case: ${personName[0].toUpperCase() + personName.slice(1).toLocaleLowerCase()}`);
