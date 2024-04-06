"use strict";
/*
<<<< Question 14: >>>>>

# Guest List:

> If you could invite anyone, living or deceased, to dinner,
who would you invite?

> Make a list that includes at least three people you’d like to invite
to dinner.

> Then use your list to print a message to each person, inviting them
to dinner

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Dinner Guest List 
const dinner_guests = [
    'Bill Gates',
    'Elon Musk',
    'Steve Jobs'
];
// Print Invitation
dinner_guests.forEach(guest => console.log(`Dear ${guest}, you're invited to dinner`));
