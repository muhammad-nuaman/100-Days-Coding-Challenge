"use strict";
/*=====================================================================
<<<<< Question 36 >>>>>>

# T-Shirt:

> Create a function for customizing t-shirts.

=====================================================================*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function That Make Tshirt 
function makeTshirt(size, text) {
    console.log(`\nReady To Wear: ✔️ `);
    console.log(`\tSize: ${size}`);
    console.log(`\tText: ${text}`);
}
// Print Title
console.log(`
▀▀█▀▀ ░ █▀▀ █░░█ ░▀░ █▀▀█ ▀▀█▀▀   █▀▄▀█ █▀▀█ █░█ █▀▀ █▀▀█
░░█░░ ▀ ▀▀█ █▀▀█ ▀█▀ █▄▄▀ ░░█░░   █░▀░█ █▄▄█ █▀▄ █▀▀ █▄▄▀
░░▀░░ ░ ▀▀▀ ▀░░▀ ▀▀▀ ▀░▀▀ ░░▀░░   ▀░░░▀ ▀░░▀ ▀░▀ ▀▀▀ ▀░▀▀
`);
// Print Shirts
makeTshirt('Small', '♥♥ Codes ♥♥');
makeTshirt('Meduim', 'Code is Everywhere');
makeTshirt('Large', `Coding It's My Life`);
