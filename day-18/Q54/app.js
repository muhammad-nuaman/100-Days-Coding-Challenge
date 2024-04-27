"use strict";
/*
<<<< Question 54: >>>>>

# Making Flexible Object Keys:

> Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function: Create Dynamic Object
const dynamicObject = (key, value) => ({ [key]: value });
// Call Dynamic Object Function
const google = dynamicObject('url', 'https://www.google.com');
const facebook = dynamicObject('url', 'https://www.facebook.com');
// Print Dynamic Objects
console.log(`Google:     ${google.url}`);
console.log(`Facebook:   ${facebook.url}`);
