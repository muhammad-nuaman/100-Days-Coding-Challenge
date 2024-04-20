"use strict";
/*
<<<< Question 41: >>>>

# Magicians:

> Display magician names from an array.

Explain & TIP: Passing arrays to functions allows for the manipulation
or display of their contents in a centralized manner. This is useful
for handling lists of data.


*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Magicians 
const magicians = [
    'Albus Dumbledore',
    'Harry Potter',
    'Ron Weasley',
    'Hermione Granger'
];
// Define Function: that show Magicians
function showMagicians(magicians) {
    magicians.forEach((magician, i) => console.log(`${++i} ${magician}`));
}
// Call Function: to show Magicians
showMagicians(magicians);
