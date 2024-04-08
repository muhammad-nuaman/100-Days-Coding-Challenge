/*
<<<< Question 19: >>>>>

# Dinner Guests: 

> Working with one of the programs from Exercises 14 through 18, 

> print a message indicating the number of people you are inviting 
to dinner.

*/

// Define Dinner Guest List 
const dinner_guests: string[] = [
    'Bill Gates',
    'Elon Musk',
    'Steve Jobs'
]

// Print Invitation
dinner_guests.forEach(guest => 
    console.log(`Dear ${guest}, you're invited to dinner`)
);

// Print Number of Guests
console.log(`\nI'm inviting ${dinner_guests.length} people for dinner`);