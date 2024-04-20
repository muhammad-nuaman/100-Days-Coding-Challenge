/*
<<<<< Question 43: >>>>>

# Unchanged Magicians: 

> Preserve the original magician names while creating a new "great" list.


Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.

*/

// Define Magicians
const magicians: string[] = [
    'Albus Dumbledore',
    'Harry Potter',
    'Ron Weasley',
    'Hermione Granger'
];

// Define Function: That Show Magicians
const showMagicians = (magicians: string[]) => {
    magicians.forEach((magician, i) => console.log(`${++i} ${magician}`))
}

// Define Function: That Make Great Magicians
const makeGreatMagicians = (magicians: string[]) => {
    let greatMagicians: string[] = [];
    magicians.forEach((magician, i) => greatMagicians[i] = `The Great ${magician}`)
    return greatMagicians;
}

// Call and Store Function: to make Great Magicians 
let greatMagicians = makeGreatMagicians(magicians);

// Call Function
showMagicians(greatMagicians); console.log(`\n`);
showMagicians(magicians);

