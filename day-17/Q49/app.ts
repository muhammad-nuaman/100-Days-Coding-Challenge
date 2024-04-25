/*
<<<< Question 49: >>>> 

# Function with Rest Parameters: 

> 
Write a function that takes a rest parameter representing multiple hobbies. 
It should log each hobby with a statement saying you enjoy that hobby.

*/

// Define Function: That Store and Log Hobbies
function hobbies (...list: string[]) {
    list.forEach(hobby => console.log(`I'm enjoy ${hobby}`));
}

// Call Hobbies Function 
hobbies('Reading', 'Coding', 'Traveling', 'Gaming');