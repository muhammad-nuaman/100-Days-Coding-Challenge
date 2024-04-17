"use strict";
/*
<<<<< Question 15: >>>>>

# Changing Guest List:

> One of your guests can't make it to the dinner,
so you need to send out a new set of invitations with a replacement guest.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Dinner Guest List 
const dinner_guests = [
    'Bill Gates',
    'Elon Musk',
    'Steve Jobs'
];
let guestCantMakeIt = 'Steve Jobs';
// Guest Replacement
dinner_guests[dinner_guests.indexOf(guestCantMakeIt)] = 'Sam Altman';
// Print Invitation
dinner_guests.forEach((guest, index, guests) => {
    console.log(`Dear ${guest}, you're invited to dinner`);
});
