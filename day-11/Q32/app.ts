/*

<<<<< Question 32:>>>>>>

#Checking Usernames: 

> Ensure uniqueness in usernames.

*/

// Define Current Users
const currentUsers: string[] = [
    'Ali',
    'Asad',
    'Ahmad',    
    'Sana',
    'Sara',
    'Sohail',
    'Saleem',
    'Nuaman',
]

// Define New Users
const newUsers: string[] = [
    'Ali',
    'Shahid',
    'Ahmad',    
    'Sona',
    'Nimra',
    'Sohail',
    'Kashif',
    'Nuaman',
    'Junaid',
    'Samra',
    'Umair'
]

// Checking: If User are Available or Not
newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => 
        currentUser.toLowerCase() === newUser.toLowerCase()    
    )) 
    {console.log(`Sorry ${newUser}, that name is taken.\n`)}
    else {console.log(`Great, ${newUser} is still available.\n`)}
})