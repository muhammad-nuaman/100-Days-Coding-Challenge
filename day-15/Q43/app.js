"use strict";
/*
<<<<< Question 43: >>>>>

# Unchanged Magicians:

> Preserve the original magician names while creating a new "great" list.


Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Magicians
const magicians = [
    'Albus Dumbledore',
    'Harry Potter',
    'Ron Weasley',
    'Hermione Granger'
];
// Define Function: That Show Magicians
const showMagicians = (magicians) => {
    magicians.forEach((magician, i) => console.log(`${++i} ${magician}`));
};
// Define Function: That Make Great Magicians
const makeGreatMagicians = (magicians) => {
    let greatMagicians = [];
    magicians.forEach((magician, i) => greatMagicians[i] = `The Great ${magician}`);
    return greatMagicians;
};
// Call and Store Function: to make Great Magicians 
let greatMagicians = makeGreatMagicians(magicians);
// Call Function
showMagicians(greatMagicians);
console.log(`\n`);
showMagicians(magicians);
