/*

<<<<< Question 31:>>>>>>

# No Users: 

> Ensure your user list isn’t empty.

*/

// Define Type
type User = {name: string, isLogin: boolean}

// Define Random Status 
const status = () => [false, true][Math.floor(Math.random() * 2)];

// Define Users
const users: User[] = [
    {name: 'Ali', isLogin: status()},
    {name: 'Ahmad', isLogin: status()},
    {name: 'Mohammad', isLogin: status()},
    {name: 'Sara', isLogin: status()},
    {name: 'Mona', isLogin: status()}
]

// Define Login Users
const loginUser: User[] = users.filter(user => user.isLogin)

// Checking: If User are Not Login
if (!loginUser.length) {console.log("We need to find some users!")}
