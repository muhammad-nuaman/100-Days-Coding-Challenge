/*
<<<<< Question 21: >>>>> 

# Think of something you could store in a TypeScript Object. 

> Write a program that creates Objects containing these items.

*/

// Define Function that Create Book Object
const book = 
    (title: string, author: string, publishedYear: number) => 
    ({title, author, publishedYear})

// Call Function to Create Book Object
const book1 = book('Harry Potter', 'JK Rowling', 1997);
const book2 = book('The Hobbit', 'JRR Tolkien', 1937);

// Print Objects
console.log(book1);
console.log(book2);
