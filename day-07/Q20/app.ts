/*
<<<< Question 20: >>>>>

# Think of something you could store in a array. For example, 

> you could make a list of mountains, rivers, countries, cities, 
languages, or anything else you’d like. 

> Write a program that creates a list containing these items.

*/

// Define a Program that Create List
const listing = (...items: string[]) => items;

// Listing Items
const countries = listing('pakistan', 'india', 'china', 'russia', 'afghanistan', 'iran');
const mountains = listing('mount everest', 'mount k2', 'mount kilimanjaro', 'mount andes');
const languages = listing('english', 'urdu', 'persian', 'pashto', 'arabic', 'hindi');

// Print Items
console.table(countries);
console.table(mountains);
console.table(languages);


