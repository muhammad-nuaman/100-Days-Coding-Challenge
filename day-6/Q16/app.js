"use strict";
/*
<<<< Question 16: >>>>>

# More Guests:

> You've found a bigger dinner table, so there's room for more guests.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Dinner Guests
const dinner_guest = [
    'Bill Gates',
    'Elon Musk',
    'Sam Altman'
];
// Add More Dinner Guests 
dinner_guest.unshift('Mark Zuckerberg');
dinner_guest.splice(dinner_guest.length / 2, 0, 'Elon Musk');
dinner_guest.push('Jeff Bezos');
// Print Invitation
dinner_guest.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to dinner`);
});
