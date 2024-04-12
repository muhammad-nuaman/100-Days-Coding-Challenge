"use strict";
/*

<<<<< Question 28:>>>>>>

# Stages of Life:

> Determine a person’s life stage with an if-else chain.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const names = [
    'Husnain',
    'Ali',
    'Ahmad',
    'Fahad',
    'Asad',
    'Hamza'
];
// Generate Random Age
const randomAge = Math.floor(Math.random() * 70 + 1);
// Generate Random Name
const randomName = names[Math.floor(Math.random() * names.length)];
// Define Person Object
let person = {
    name: randomName,
    age: randomAge
};
// Define Person Life Stages
let lifeStages = {
    baby: person.age < 2,
    toddler: person.age >= 2 && person.age < 4,
    kid: person.age >= 4 && person.age < 13,
    teenager: person.age >= 13 && person.age < 20,
    adult: person.age >= 20 && person.age < 65,
    elder: person.age >= 65
};
// Checking Life Stages
if (lifeStages.baby) {
    console.log(`${person.name} age is ${person.age} \nHe's is a Baby`);
}
else if (lifeStages.toddler) {
    console.log(`${person.name} age is ${person.age} \nHe's is a Toddler`);
}
else if (lifeStages.kid) {
    console.log(`${person.name} age is ${person.age} \nHe's is a Kid`);
}
else if (lifeStages.teenager) {
    console.log(`${person.name} age is ${person.age} \nHe's is a Teenager`);
}
else if (lifeStages.adult) {
    console.log(`${person.name} age is ${person.age} \nHe's is an Adult`);
}
else if (lifeStages.elder) {
    console.log(`${person.name} age is ${person.age} \nHe's is an Elder`);
}
