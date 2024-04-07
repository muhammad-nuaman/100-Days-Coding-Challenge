/*
<<<< Question 17: >>>>>

# Shrinking Guest List: 

> Unfortunately, your new table won’t arrive in time, and you can only 
invite two guests.

*/

// Dinner Guests
const dinner_guest: string[] = [
    'Bill Gates', 
    'Elon Musk',
    'Sam Altman'
];

// Add More Dinner Guests 
dinner_guest.unshift('Mark Zuckerberg');
dinner_guest.splice(dinner_guest.length / 2, 0, 'Tim Cook');
dinner_guest.push('Jeff Bezos');

// Print Message
console.log('\nI can invite only two people for dinner.\n');

while(dinner_guest.length > 2) {
    let notInvitedGuest = dinner_guest.pop()
    console.log(`I'm sorry ${notInvitedGuest}, you can’t invite them to dinner.`);
    
}
console.log(''); // need some spaces

// Print Invitation
dinner_guest.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to dinner`);
});

console.log(''); // need some spaces

