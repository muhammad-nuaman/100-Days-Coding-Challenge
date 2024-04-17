"use strict";
/*
<<<<<< Question 33 >>>>>>

# Ordinal Numbers:

> Display numbers with their ordinal suffixes.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Numbers 1 - 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Display Numbers with Suffix
numbers.forEach((num) => {
    let suffix = 'th';
    switch (num) {
        case 1:
            suffix = 'st';
            break;
        case 2:
            suffix = 'nd';
            break;
        case 3: suffix = 'rd';
    }
    console.log(`${num}${suffix}`);
});
