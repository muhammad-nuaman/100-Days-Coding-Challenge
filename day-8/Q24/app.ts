/*
<<<< Question 24: >>>>>

# More Conditional Tests: 

> You don’t have to limit the number of tests you create to 10. If you 
want to try more comparisons, 

> write more tests. Have at least one True and one False result for each 
of the following:


• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array


*/


// Define Person Type
type Person = {
    name: string,
    age: number,
    isMarried: boolean,
    isGraduate: boolean,
    doingJob: boolean,
    wantToGoForeign: boolean
}

const person: Person = {
    name: 'Shamir',
    age: 35,
    isMarried: true,
    isGraduate: false,
    doingJob: true,
    wantToGoForeign: true
}

// Define Answers 
const asnwer = ['Wrong', 'Right']

console.log();
console.log(`Person Name (${person.name}) is Shamir!                ${asnwer[Number(person.name   ===   'Shamir')]}`);
console.log(`Person Name (${person.name}) is shamir!                ${asnwer[Number(person.name   ===   'shamir')]}`);
console.log(`Person Name (${person.name}) is not Shamir!            ${asnwer[Number(person.name   !==   'Shamir')]}`);
console.log(`Person Name (${person.name}) is not shamir!            ${asnwer[Number(person.name   !==   'shamir')]}`);
console.log(`(${person.name}) age is Greater than 35!               ${asnwer[Number(person.age     >       35)]}`);
console.log(`(${person.name}) age is Greater than or Equal 35!      ${asnwer[Number(person.age     >=       35)]}`);
console.log(`(${person.name}) age is Less than 35!                  ${asnwer[Number(person.age     <       35)]}`);
console.log(`(${person.name}) age is Less than or Equal 35!         ${asnwer[Number(person.age     <=       35)]}`);
console.log(`(${person.name}) has Married!                          ${asnwer[Number(person.isMarried)]}`);
console.log(`(${person.name}) is Graduate!                          ${asnwer[Number(person.isGraduate)]}`);

console.log();
if (person.wantToGoForeign) {
    console.dir('Visa Required');
    console.group('\nCandidate Must Married or Graduate');
        console.log(`Candidate Married Status: ${person.isMarried}`);
        console.log(`Candidate Graduate Status: ${person.isGraduate}`);
        console.log();
    console.groupEnd();
    
    if (person.isMarried || person.isGraduate) {
        console.dir('Visa Application Approved');
    }
}