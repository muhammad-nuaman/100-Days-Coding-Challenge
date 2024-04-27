"use strict";
/*

<<<<< Question 53: >>>>>

# Pulling Apart a Nested Object:

> Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Developer Skills
const developerSkills = {
    languages: ['Javascript', 'Typescript', 'Python'],
    frameWorks: ['React', 'Vue', 'Angular'],
    tools: ['VS Code', 'Git', 'Github']
};
// Destructuring 
const { languages, frameWorks, tools } = developerSkills;
// Print
console.log(`Language:      ${languages[0]}`);
console.log(`Framework:     ${frameWorks[0]}`);
console.log(`Tool:          ${tools[0]}`);
