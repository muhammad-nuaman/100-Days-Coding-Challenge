"use strict";
/*

<<<<< Question 31:>>>>>>

# No Users:

> Ensure your user list isn’t empty.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Random Status 
const status = () => [false, true][Math.floor(Math.random() * 2)];
// Define Users
const users = [
    { name: 'Ali', isLogin: status() },
    { name: 'Ahmad', isLogin: status() },
    { name: 'Mohammad', isLogin: status() },
    { name: 'Sara', isLogin: status() },
    { name: 'Mona', isLogin: status() }
];
// Define Login Users
const loginUser = users.filter(user => user.isLogin);
// Checking: If User are Not Login
if (!loginUser.length) {
    console.log("We need to find some users!");
}
