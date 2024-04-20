/*
<<<<< Question 42: >>>>>

# Great Magicians: 

> Add "the Great" to magician names.

Explain & TIP: Modifying array contents within a function demonstrates
how functions can change data. This shows the impact of passing arrays
by reference.

*/


const magicians: string[] = [
    'Albus Dumbledore',
    'Harry Potter',
    'Ron Weasley',
    'Hermione Granger'
];

// Define Function: That Show Magicians
const showMagicians = (magicians: string[]) => {
    magicians.forEach((magician, i) => console.log(`${++i} ${magician}`));
}

// Define Function: That Make Great Magicians
const makeGreatMagicians = (magicians: string[]) => {
    magicians.forEach((magician, i) => magicians[i] = `The Great ${magician}`);
}

// Call Function 
makeGreatMagicians(magicians);
showMagicians(magicians);
