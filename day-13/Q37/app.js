"use strict";
/*
<<<<<< Question 37: >>>>>>

# Large Shirts:

> Default values in make_shirt().

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function That Make Tshirt 
function makeTshirt(size = 'Large', text = 'I love Typescript') {
    console.count(`\nReady To Wear: ✔️ `);
    console.log(`\tSize: ${size}`);
    console.log(`\tText: ${text}`);
}
// Print Title
console.log(`
▀▀█▀▀ ░ █▀▀ █░░█ ░▀░ █▀▀█ ▀▀█▀▀   █▀▄▀█ █▀▀█ █░█ █▀▀ █▀▀█
░░█░░ ▀ ▀▀█ █▀▀█ ▀█▀ █▄▄▀ ░░█░░   █░▀░█ █▄▄█ █▀▄ █▀▀ █▄▄▀
░░▀░░ ░ ▀▀▀ ▀░░▀ ▀▀▀ ▀░▀▀ ░░▀░░   ▀░░░▀ ▀░░▀ ▀░▀ ▀▀▀ ▀░▀▀
`);
makeTshirt();
makeTshirt('Medium');
makeTshirt('Small', '♥ Typescript ♥');
