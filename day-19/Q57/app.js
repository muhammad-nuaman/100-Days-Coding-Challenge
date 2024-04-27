"use strict";
/*
<<<< Question 57: >>>>

# Find the Average Grade:

> Given a list of grades, calculate the average grade.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Grades
const grades = [90, 80, 70, 60, 50];
// // Get Grades Average
const average = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// // Print Average
console.log(`Average: ${average}`);
