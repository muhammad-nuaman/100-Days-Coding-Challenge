/*
<<<<<< Question 37: >>>>>>

# Large Shirts:

> Default values in make_shirt().

*/

// Define Sizes Type
type Sizes = "Small" | "Medium" | "Large";


// Define Function That Make Tshirt 
function makeTshirt(
    size: Sizes = 'Large', text: string = 'I love Typescript'
) {
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