/*
<<<< Question 41: >>>>

# Magicians: 

> Display magician names from an array.

Explain & TIP: Passing arrays to functions allows for the manipulation
or display of their contents in a centralized manner. This is useful
for handling lists of data.


*/

// Define Magicians 
const magicians: string[] = [
    'Albus Dumbledore',
    'Harry Potter',
    'Ron Weasley',
    'Hermione Granger'
]

// Define Function: that show Magicians
function showMagicians (magicians: string[]) {
    magicians.forEach((magician, i) => console.log(`${++i} ${magician}`))
}

// Call Function: to show Magicians
showMagicians(magicians);