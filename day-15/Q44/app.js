"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define Sandwich Ingredients Function
function sandwich(...items) {
    items.forEach(item => {
        if (item) {
            console.group(`\n>> Sandwich Ingredients:`);
            console.log(' ● ' + item);
            console.groupEnd();
        }
    });
}
// Call Functions
sandwich('Chicken Spread');
sandwich('Vegi Spread');
