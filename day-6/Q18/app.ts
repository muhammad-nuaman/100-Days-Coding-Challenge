/*
<<<<< Question 18: >>>>> 

# Seeing the World: 

> Think of at least five places in the world you’d like to visit.

*/
let places: string[] = [
    "Italy", 
    "Dubai", 
    "France", 
    "Canada", 
    "America", 
];

// Print: Places into Original Order
console.dir('Original Order');
console.table(places);

// Print: Places into Alphabetic Order
console.dir('Alphabetic Order');
console.table([...places].sort())

// Print: Places into Original Order
console.dir('Original Order');
console.table(places);

// Print: Places into Reverse Alphabetic Order
console.dir('Reverse Alphabetic Order');
console.table([...places])

// Print: Places into Original Order
console.dir('Reverse Original Order');
console.table(places.reverse());

// Print: Places into Original Order
console.dir('Reverse Again Original Order');
console.table(places.reverse());

// Print: Places into Original Order
console.dir('Original Alphabatic Order');
console.table(places.sort());

// Print: Places into Original Order
console.dir('Original Reverse Alphabatic Order');
console.table(places.reverse());

