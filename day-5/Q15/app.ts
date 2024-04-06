/*
<<<<< Question 15: >>>>> 

# Changing Guest List: 

> One of your guests can't make it to the dinner, 
so you need to send out a new set of invitations with a replacement guest.

*/

// Define Dinner Guest List 
const dinner_guests: string[] = [
    'Bill Gates',
    'Elon Musk',
    'Steve Jobs'
]

let guestCantMakeIt: string = 'Steve Jobs';

// Guest Replacement
dinner_guests[dinner_guests.indexOf(guestCantMakeIt)] = 'Sam Altman';

dinner_guests.forEach((guest, index, guests) => {
    console.log(`Dear ${guest}, you're invited to dinner`)
});


