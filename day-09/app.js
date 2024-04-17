"use strict";
/*
<<<<<< Question 25 >>>>>>:

# Alien Colors #1:

> Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
 
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Variables
const colors = ['green', 'yellow', 'red'];
const randomIndex = Math.floor(Math.random() * colors.length);
const alien_color = colors[randomIndex];
console.log(`\nAlien Color: ${alien_color}`);
console.count(`\nProgram`);
if (alien_color === colors[0]) {
    console.log('You Just Earned 5 points');
}
/*

<<<<<< Question 26 >>>>>>:

# Alien Colors #2:

> Choose a color for an alien, then write an if-else chain.

*/
console.count(`\nProgram`);
if (alien_color === colors[0]) {
    console.log('You Just Earned 5 points');
}
else {
    console.log('You Just Earned 10 points');
}
/*
<<<<<< Question 27 >>>>>>:

# Alien Colors #3:

> Convert your if-else chain to handle three colors: green, yellow, red.

*/
console.count(`\nProgram`);
if (alien_color === colors[0]) {
    console.log('You Just Earned 5 points');
}
if (alien_color === colors[1]) {
    console.log('You Just Earned 10 points');
}
if (alien_color === colors[2]) {
    console.log('You Just Earned 15 points');
}
console.log('');
