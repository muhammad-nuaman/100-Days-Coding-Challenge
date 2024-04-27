/*
<<<< Question 57: >>>>

# Find the Average Grade: 

> Given a list of grades, calculate the average grade.

*/


// Define Grades
const grades: number[] = [90, 80, 70, 60, 50];

// // Get Grades Average
const average: number = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// // Print Average
console.log(`Average: ${average}`);





