/*
<<<<< Question 36 >>>>>>

# T-Shirt:

> Create a function for customizing t-shirts.

*/

// Define Sizes Type
type Sizes = 'Small' | 'Meduim' | 'Large';

// Define Function That Make Tshirt 
function makeTshirt(size: Sizes, text: string) {
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
makeTshirt('Small',  '♥♥ Codes ♥♥')
makeTshirt('Meduim', 'Code is Everywhere')
makeTshirt('Large',  `Coding It's My Life`)