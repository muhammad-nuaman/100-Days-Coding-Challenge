"use strict";
/*

<<<< Question 30: >>>>

# Hello Admin:

> Greet users differently, especially 'admin'.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function: Set Login Status Randomly
const status = () => [false, true][Math.floor(Math.random() * 2)];
// Define Variable: Store Numbers Login Users
let loginUsers = 0;
// Define Users Array
const users = [
    { name: 'Admin', isLogin: status() },
    { name: 'Ahmed', isLogin: status() },
    { name: 'Ali', isLogin: status() },
    { name: 'Sayed', isLogin: status() },
    { name: 'Mona', isLogin: status() },
    { name: 'Ayman', isLogin: status() },
    { name: 'Sara', isLogin: status() },
    { name: 'Heba', isLogin: status() },
    { name: 'Nada', isLogin: status() },
    { name: 'Husnain', isLogin: status() },
    { name: 'Salem', isLogin: status() },
];
// Checking: User Login or Not
users.forEach((user) => {
    if (user.isLogin) {
        if (user.name.includes('Admin')) {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user.name}, Thank you for log in again.`);
        }
        loginUsers++;
    }
});
// Checking: Number of Users
if (!loginUsers) {
    console.log(`There are No users online`);
}
else {
    console.log(`There are ${loginUsers} users online`);
}
