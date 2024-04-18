/*
<<<<< Question 35:  >>>>>>

# Animals: 

> Highlight animals with a common trait.

*/

// Define Animals with it's Traits
const animals: {[key: string]: string}[] = [
    {name: 'Dog', trait: 'Loyal, Energetic, and Social animals that thrive on companionship and playfulness.'},
    {name: 'Cat', trait: 'Independent, Curious, and Agile creatures known for their grace, curiosity, and self-sufficiency.'},
    {name: 'Rabbit', trait: 'Gentle, Cuddly, and Nibbler animals that enjoy affection, cuddles, and exploring their surroundings.'},

]

// Print Each Animal with it's Traits 
animals.forEach(animal => {
    console.log(`\n★  ${animal.name}:\n\t ${animal.trait}\n`);
})

// Print Message About These Animals
console.dir("Any of these animals would make a great pet!");

