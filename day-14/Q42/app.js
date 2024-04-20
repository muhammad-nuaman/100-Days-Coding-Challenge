"use strict";
/*
<<<<< Question 42: >>>>>

# Great Magicians:

> Add "the Great" to magician names.

Explain & TIP: Modifying array contents within a function demonstrates
how functions can change data. This shows the impact of passing arrays
by reference.

*/
Object.defineProperty(exports, "__esModule", { value: true });
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
    magicians.forEach((magician, i) => magicians[i] = `The Great ${magician}`);
};
// Call Function 
makeGreatMagicians(magicians);
showMagicians(magicians);
