"use strict";
/*
<<<< Question 56: >>>>

# Keep Only Strings:

> Given a mix of different types of items, make a new list that has only
the words.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Create a list
const mixedList = [1, "I", "Love", true, "Typescript", false, "Coding"];
// Filter the list to only include strings
const stringList = mixedList.filter(item => typeof item === 'string');
// Print the new list
console.log(stringList);
