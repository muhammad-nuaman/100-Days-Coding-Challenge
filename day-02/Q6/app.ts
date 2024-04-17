/*

# Question 6: 

# Stripping Names: 

> Store a person’s name, and include some whitespace characters at 
the beginning and end of the name. 

> Use "\t" (tab) and "\n" (new line) at least once. 

> Print the name once, so the whitespace around the name is displayed. 

> Then print the name after stripping the white spaces.
 
*/

// Store Person Name with (\t and \n)
const person: string = '\tsultan\n';

// Print Person Name with Spaces
console.log(person);

// Print Person Name without Spaces
console.log(person.trim());


