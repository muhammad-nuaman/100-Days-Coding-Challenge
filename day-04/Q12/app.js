"use strict";
/*
# Question 12:

# Greetings:

> Use the array from Exercise 11. Instead of just printing each
person’s name, print a message to them.

> The message should be the same for each person, but personalized
with their name.


*/
Object.defineProperty(exports, "__esModule", { value: true });
// Store Friends Name
const friends = ["Ahmed", "Ali", "Sayed", "Mahmoud"];
// Print Each Friends Name
console.group('Greeting to Friends');
friends.forEach(friend => console.log(`Hey ${friend}, wishing you a fantastic day ahead filled with joy and success!`));
console.groupEnd();
